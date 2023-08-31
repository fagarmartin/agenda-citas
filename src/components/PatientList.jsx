import Patient from "./Patient";

function PatientList({ patients, setPatient }) {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {patients && patients.length ? (
        <>
          {" "}
          <h2 className="font-black text-3xl text-center">Patients list</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Admin your {""}
            <span className="text-indigo-600 font-bold text-xl">
              patients and appointments
            </span>
          </p>
          {patients.map((patient) => (
            <Patient
              key={patient.id}
              patient={patient}
              setPatient={setPatient}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">0 Patients</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Start adding your {""}
            <span className="text-indigo-600 font-bold text-xl">
              and they will show here
            </span>
          </p>
        </>
      )}
    </div>
  );
}

export default PatientList;
