import "./styles/global.scss";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Board from "./components/board/Board";
import "./App.css";

function App() {
  return (
    <div className="app-layout">
      <Sidebar />

      <div className="app-content">
        <Header />
        <Board />
      </div>
    </div>
  );
}

export default App;
