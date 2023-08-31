function Error({ children }) {
  return (
    <div className="bg-red-800 text-white text-center font-bold p-3 uppercase mb-3 rounded">
      {children}
    </div>
  );
}

export default Error;