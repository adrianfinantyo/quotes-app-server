import "./App.scss";
import { AnimatePresence } from "framer-motion";
import AppRouter from "./AppRouter";

function App() {
  return (
    <AnimatePresence>
      <AppRouter />
    </AnimatePresence>
  );
}

export default App;
