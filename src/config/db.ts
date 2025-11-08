import * as SQLite from "expo-sqlite";

// Abre o banco de dados (modo assíncrono)
export const db = SQLite.openDatabaseSync("pillontime.db");

export const createTable = async (): Promise<void> => {
  try {
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS pills (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        quantity TEXT NOT NULL,
        freq TEXT NOT NULL,
        hour TEXT NOT NULL,
        date TEXT NOT NULL,
        obs TEXT,
        created_at TEXT DEFAULT (DATE('now'))
      );
    `);
    console.log("✅ Tabela criada com sucesso!");
  } catch (error: any) {
    console.error("❌ Erro ao criar tabela:", error.message);
  }
};

export const initDB = async () => {
  await createTable();
  console.log("✅ Banco pronto para uso");
};
