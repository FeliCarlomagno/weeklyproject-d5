import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import "./App.css";
import { MyNav } from "./Components/MyNav";
import { Generes } from "./Components/Generes";
import MainFilmRow from "./Components/MainFilmRow";
import MyFooter from "./Components/MyFooter";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Generes />
      <MainFilmRow />
      <MyFooter />
    </div>
  );
}

export default App;
