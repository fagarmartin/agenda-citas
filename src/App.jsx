import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import PatientList from "./components/PatientList";
import { useEffect, useState } from "react";
function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});
  const deletePatient = (id) => {
    const updatedPatients = patients.filter((patient) => patient.id !== id);
    setPatients(updatedPatients);
  };
  useEffect(() => {
    const getLS = () => {
      //loads local storage 
      const patientsLS = JSON.parse(localStorage.getItem("patients"));
      setPatients(patientsLS);
    };
    getLS();
  }, []);
  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients)) ?? []; //returns empty array if empty
  }, [patients]);
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <PatientList
          patients={patients}
          setPatient={setPatient}
          patient={patient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  );
}

export default App;
