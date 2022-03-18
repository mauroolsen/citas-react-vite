function Paciente({paciente, setPaciente, eliminarPaciente}) {
    const {nombre, propietario, email, fecha, sintomas, id} = paciente;

    const handleEliminar = () => {
        if(confirm('¿Estas seguro de que deseas eliminar?')) {
            eliminarPaciente(id)
        }
    }

    return ( 
        <div className="my-3 mx-5 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className=" font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
            <span className=" font-normal normal-case">{nombre}</span>
            </p>
            <p className=" font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
            <span className=" font-normal normal-case">{propietario}</span>
            </p>
            <p className=" font-bold mb-3 text-gray-700 uppercase">Email: {''}
            <span className=" font-normal normal-case">{email}</span>
            </p>
            <p className=" font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
            <span className=" font-normal normal-case">{fecha}</span>
            </p>
            <p className=" font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
            <span className=" font-normal normal-case">{sintomas}</span>
            </p>

            <div className="flex justify-between mt-10">
                <button type="button"
                    onClick={() => setPaciente(paciente)} // si no tiene arrow se ejecuta en la carga
                    className="py-2 px-10 font-bold text-white rounded-md bg-indigo-600 hover:bg-indigo-700 uppercase"
                >Editar</button>

                <button type="button"
                    onClick={handleEliminar}
                    className="py-2 px-10 font-bold text-white rounded-md bg-red-600 hover:bg-red-700 uppercase"
                >Eliminar</button>
            </div>
        </div>
    );
}

export default Paciente;