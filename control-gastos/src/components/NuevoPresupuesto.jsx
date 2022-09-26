import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({
  presupuesto,
  setPresupuesto,
  setIsValidPresupuesto,
}) => {
  const [message, setMessage] = useState("");

  const handlePresupuesto = (e) => {
    e.preventDefault();

    if (!presupuesto || presupuesto < 0) {
      setMessage("No es un presupuesto válido");
      return;
    }

    setMessage("");
    setIsValidPresupuesto(true);
  };
  return (
    <div className="contendor-presupuesto contenedor sombra">
      <form onSubmit={handlePresupuesto} action="" className="formulario">
        <div className="campo">
          <label htmlFor="">Definir Presupuesto</label>
          <input
            type="number"
            className="nuevo-presupuesto"
            placeholder="Añade tu presupuesto"
            value={presupuesto}
            onChange={(e) => setPresupuesto(Number(e.target.value))}
          />
        </div>

        <input type="submit" value="Añadir" />
        {message && <Mensaje tipo="error"> {message} </Mensaje>}
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
