import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import PacientList from "./components/PacientList";

function App() {
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form />
        <PacientList />
      </div>
    </div>
  );
}

export default App;
