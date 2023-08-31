import { useEffect, useState } from "react";
import Error from "./Error";
function Form({ setPatients, patients, patient,setPatient }) {
  const generateId = () => {
    //generate unique id
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const [formInputs, setFormInputs] = useState({
    id: "",
    name: "",
    owner: "",
    email: "",
    date: "",
    symptoms: "",
  });

  const [error, setError] = useState(false);
  const handleInputChange = (e) => {
    setFormInputs({ ...formInputs, [e.target.name]: e.target.value }); // actualiza el estado de la propiedad que cambie en ese momento
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, owner, email, date, symptoms } = formInputs;
    if ([name, owner, email, date, symptoms].includes("")) {
      setError(true);
      return;
    }

    setError(false);
    const objectPatient = {
      name,
      owner,
      email,
      date,
      symptoms,
    };
    if (patient.id) {
      //editing the patient
      objectPatient.id = patient.id;
      const updatedpatients = patients.map((patientState) =>
        patientState.id === patient.id ? objectPatient : patientState
      );
      //searched the id and replaces the object in the array
      setPatients(updatedpatients);
    } else {
      // adding new registry
      objectPatient.id = generateId();
      setPatients([...patients, objectPatient]); //adds new patient
      setPatient({}) //cleans state    
    }
  };
  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      // fills form values when edit is pressed
      setFormInputs(patient);
    }
  }, [patient]);
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      {" "}
      <h2 className="font-black text-3xl text-center">Patients follow-up</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Add pacients y{" "}
        <span className="text-indigo-600 font-bold">Admin them</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && (
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
        )}
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="name"
          >
            Pet
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Pet"
            name="name"
            id="name"
            value={formInputs.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="owner"
          >
            Owner
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Owner"
            id="owner"
            name="owner"
            value={formInputs.owner}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="email"
            name="email"
            placeholder="E-mail"
            id="email"
            value={formInputs.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="date"
          >
            Discharge
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="date"
            name="date"
            placeholder="Date"
            id="date"
            value={formInputs.date}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="symptoms"
          >
            Symptoms
          </label>
          <textarea
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Describe the symptoms"
            id="symptoms"
            name="symptoms"
            value={formInputs.symptoms}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full rounded-md p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          // if the patient exists
          value={patient.id ? "Edit Patient" : "Add Patient"}
        />
      </form>
    </div>
  );
}

export default Form;
