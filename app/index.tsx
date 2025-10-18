import { initDB } from "@/src/config/db";
import { Home } from "./Home";

// 👉 O ThemeProvider deve envolver o app inteiro
export default function Index() {
  initDB();
  return <Home />;
}
