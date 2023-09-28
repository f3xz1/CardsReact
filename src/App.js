import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <Card Name="Name" Pic={logo} Price="123"></Card>
    </div>
  );
}

export default App;
