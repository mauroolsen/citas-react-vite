function Error({children}) {
  return (
    <div className=' bg-red-700 text-white text-center p-3 mb-3 font-bold rounded-sm uppercase'>
        <p>{children}</p>
    </div>
  )
}

export default Error