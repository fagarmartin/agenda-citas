import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import PatientList from "./components/PatientList";
import { useState } from "react";
function App() {
  const [patients,setPatients]=useState([]);
  const [patient,setPatient]=useState({})
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form  patients={patients} setPatients={setPatients}/>
        <PatientList  patients={patients} setPatient={setPatient} />
      </div>
    </div>
  );
}

export default App;
