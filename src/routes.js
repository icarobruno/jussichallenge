import { HashRouter, Route } from "react-router-dom";

import Home from "./pages/Home/Home";

export default function Routes() {
  return (
    <HashRouter>
      <Route exact path="/" component={Home} />
    </HashRouter>
  );
}
