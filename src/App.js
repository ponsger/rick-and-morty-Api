import { Fragment } from "react";
import Header from "./components/Header";
import Characters from "./components/Characters";
import "./main.sass";
import './components/Header.css'

function App() {
  return (
    <Fragment>
      <Header title="Rick and Morty" />
      <Characters />
    </Fragment>
  );
}

export default App;