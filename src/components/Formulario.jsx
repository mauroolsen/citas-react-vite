import { useState, useEffect } from 'react'
import Error from './Error'

function Formulario({pacientes, setPacientes, paciente}) {
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState(false)

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      const {
        nombre: nombrePaciente, 
        propietario: propietarioPaciente, 
        email: emailPaciente, 
        fecha: fechaPaciente, 
        sintomas: sintomasPaciente
      } = paciente;

      setNombre(nombrePaciente)
      setPropietario(propietarioPaciente)
      setEmail(emailPaciente)
      setFecha(fechaPaciente)
      setSintomas(sintomasPaciente)
    }
  }, [paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)
    return (random + fecha)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if([nombre, propietario, email, fecha, sintomas].includes('')) {
      setError(true)
      return;
    }
    setError(false)

    const objPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas
    }

    if(paciente.id) {
      objPaciente.id = paciente.id
      // Editando paciente 
      setPacientes(pacientes.map((element) => {
        return (objPaciente.id === element.id) ? objPaciente : element
      }))
    } else {
      objPaciente.id = generarId() 
      // Agregando paciente
      setPacientes([...pacientes, objPaciente])
    }

    // Reiniciando form
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }

  return (
    <div className="md:w-1/2 lg:2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg text-center mt-4 mb-10">
        Añade Pacientes y{' '}
        <span className=" text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        action=""
        className=" bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}
      >
        { error && <Error><p>Todos los campos son obligatorios</p></Error> }
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="nombre"
          >
            Nombre Mascota
          </label>
          <input
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre de la Mascota"
            name="nombre"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="propietario"
          >
            Propietario
          </label>
          <input
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Propietario de la Mascota"
            name="propietario"
            id="propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
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
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="email"
            placeholder="Email de contacto"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="alta"
          >
            Alta
          </label>
          <input
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="date"
            name="alta"
            id="alta"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="sintomas"
          >
            Síntomas
          </label>
          <textarea
            name="sintomas"
            id="sintomas"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los Síntomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          ></textarea>
        </div>

        <input
          type="submit"
          className=" bg-indigo-600 w-full p-3 rounded-sm uppercase text-white font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value= {paciente.id ? 'Guardar cambios' : 'Agregar paciente'}
        />
      </form>
    </div>
  )
}

export default Formulario
