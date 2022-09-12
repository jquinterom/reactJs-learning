import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";
import { useState, useEffect } from "react";

function App() {
  const pacientesIniciales =
    JSON.parse(localStorage.getItem("pacientes")) ?? [];

  const [pacientes, setPacientes] = useState(pacientesIniciales);
  const [paciente, setPaciente] = useState({});

  /*
  useEffect(() => {
    const obtenerLS = async () => {
      setPacientes(await JSON.parse(localStorage.getItem("pacientes"))) ?? [];

      console.log(1);
      console.log(pacientes);
    };

    obtenerLS();
  }, []);
  */

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes(pacientesActualizados);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
