const Paciente = () => {
  return (
    <div className="mx-3 mb-5 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">Hook</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">Jhon</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">email@email.com</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha ALta: {""}
        <span className="font-normal normal-case">20-09-2022</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas: {""}
        <span className="font-normal normal-case">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          veniam impedit adipisci voluptas, qui labore obcaecati fugiat sed
          debitis, commodi sint, eaque itaque? Quaerat vero quis natus
          doloremque, modi nulla!
        </span>
      </p>
    </div>
  );
};

export default Paciente;
