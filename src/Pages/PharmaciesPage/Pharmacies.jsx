import React from "react";
import Logo from "./../../assets/bg2.jpg"

const Pharmacies = ({ pharmacies }) => {
<<<<<<< HEAD
  return (
    <table className="bg-white text-gray-900 shadow-none w-80vw mx-auto mt-10">
      <thead>
        <tr>
          <th className="bg-primary text-white p-2">Nombre</th>
          <th className="bg-primary text-white p-2">Teléfono</th>
          <th className="bg-primary text-white p-2">Mail</th>
          <th className="bg-primary text-white p-2 w-auto">Dirección</th>
          <th className="bg-primary text-white p-2 w-auto">Provincia</th>
          <th className="bg-primary text-white p-2 w-auto">Ciudad</th>
        </tr>
      </thead>
      <tbody>
        {typeof pharmacies === 'object' ?
          pharmacies.map((p) => (
            <tr key={p._id} className="bg-blue-100 text-blue-900 text-center">
              <td className="p-2">{p.nombre}</td>
              <td className="p-2">{p.telefono}</td>
              <td className="p-2">{p.mail}</td>
              <td className="p-2">{p.direccion}</td>
              <td className="p-2">{p.provinciaID.nombre}</td>
              <td className="p-2">{p.ciudadID.localidad}</td>
            </tr>
          )) : <tr><td>No se encontraron farmacias</td></tr>}
      </tbody>
    </table>
  );
=======
    return (
        <div className="flex flex-col w-full bg-cover start min-h-70vh contenair" style={{ backgroundImage: `url(${Logo})` }}>
            <table className="mx-auto mt-10 text-gray-900 bg-white shadow-none w-80vw bg-opacity-40 rounded-xl backdrop-filter backdrop-blur-lg">
                <thead>
                    <tr>
                        <th className="p-2 text-white bg-primary bg-opacity-40 backdrop-filter backdrop-blur-lg">Nombre</th>
                        <th className="p-2 text-white bg-primary bg-opacity-40 backdrop-filter backdrop-blur-lg">Teléfono</th>
                        <th className="p-2 text-white bg-primary bg-opacity-40 backdrop-filter backdrop-blur-lg">Mail</th>
                        <th className="p-2 text-white bg-primary bg-opacity-40 backdrop-filter backdrop-blur-lg">Provincia</th>
                        <th className="p-2 text-white bg-primary bg-opacity-40 backdrop-filter backdrop-blur-lg">Localidad</th>
                    </tr>
                </thead>
                <tbody>
                    {typeof pharmacies === 'object' ?
                        pharmacies.map((p) => (
                            <tr key={p._id} className="text-center text-blue-900 bg-white shadow-none bg-opacity-40 backdrop-filter backdrop-blur-lg">
                                <td className="p-2">{p.nombre}</td>
                                <td className="p-2">{p.telefono}</td>
                                <td className="p-2">{p.mail}</td>
                                <td className="p-2">{p.direccion}</td>
                                <td className="p-2">{p.provinciaID.nombre}</td>
                                <td className="p-2">{p.ciudadID.localidad}</td>
                            </tr>
                        )) : <tr className="text-center text-blue-900 bg-white shadow-none bg-opacity-40 backdrop-filter backdrop-blur-lg"><td className="p-2">Sin consultas</td></tr>}
                </tbody>
            </table>
        </div>
    );
>>>>>>> development
};

export default Pharmacies;
