import Pacient from "./Pacient";

function PacientList() {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">Patients list</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Admin your {""}
        <span className="text-indigo-600 font-bold text-xl">
          patients and appointments
        </span>
      </p>
      <Pacient />
      <Pacient />
      <Pacient />
    </div>
  );
}

export default PacientList;
