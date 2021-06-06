import { Container } from "semantic-ui-react";
import "./App.css";
import Dashboard from "./layouts/Dashboard";
import Navigate from "./layouts/Navigate";

function App() {
  return (
    <div className="App">
      <Navigate />
      <Container className="main">
        <Dashboard />
      </Container>
    </div>
  );
}

export default App;
