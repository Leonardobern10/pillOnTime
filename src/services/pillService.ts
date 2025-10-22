import { db } from "../config/db";
import { PillDataFormProps } from "../types/PillDataFormProps";

export async function addPill(pill: PillDataFormProps) {
  await db
    .runAsync(
      `INSERT INTO pills (name, quantity, freq, hour, obs) VALUES (?, ?, ?, ?, ?);`,
      [pill.name, pill.quantity, pill.freq, pill.hour, pill.obs!]
    )
    .then((value) => console.log("Medicamento adicionado com sucesso!" + value))
    .catch((error) =>
      console.error("Não foi possivel adicionar o medicamento: " + error)
    );
}

export async function getAllPills(): Promise<PillDataFormProps[] | null> {
  console.log("Obtendo registros...");
  try {
    const result = await db.getAllAsync<PillDataFormProps>(
      `SELECT * FROM pills;`
    );
    return result;
  } catch (error) {
    console.error("Não foi possivel obter os registros: " + error);
    return null;
  } finally {
    console.info("Operação de consulta concluida!");
  }
}

/** */
export async function delPill(id: number): Promise<void> {
  console.log("Removendo registro...");
  try {
    await db.runAsync("DELETE FROM pills WHERE id = ?", [id]);

    console.log(`Registro id: ${id} removido com sucesso!`);
  } catch (error) {
    console.error("Erro ao deletar registro: " + error);
  }
}

export async function updatePill(
  id: number,
  newData: PillDataFormProps
): Promise<void> {
  console.log("Inicinado atualizando de cadastro...");
  const { name, quantity, freq, hour, obs } = newData;
  try {
    await db.runAsync(
      "UPDATE pills SET name=?, quantity=?, freq=?, hour=?, obs=? WHERE id=?;",
      [name, quantity, freq, hour, obs || "", id]
    );
    console.log(`Remédio com ID ${id} atualizado com sucesso! `);
  } catch (error) {
    console.error("Erro ao atualizar remédio: ", error);
  }
}

export async function getOnePill(
  id: number
): Promise<PillDataFormProps | null> {
  console.log(`🔍 Buscando dado de id: ${id}`);
  try {
    const pill = await db.getFirstAsync<PillDataFormProps>(
      "SELECT * FROM pills WHERE id = ?;",
      [id]
    );

    if (!pill) {
      console.warn(`⚠️ Nenhum remédio encontrado com o ID ${id}`);
      return null;
    }

    console.log("✅ Remédio encontrado:", pill);
    return pill;
  } catch (error) {
    console.error("❌ Erro ao obter medicamento:", error);
    return null;
  }
}
