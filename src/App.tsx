import { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import routes from "tempo-routes";

function App() {
  return <>{import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}</>;
}

export default App;
