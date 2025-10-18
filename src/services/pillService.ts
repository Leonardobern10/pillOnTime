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
