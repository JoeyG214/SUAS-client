const CaptureButton = () => {
const handleClick = () => {

}

  return (
    <div className="flex">
      <button
        className="w-screen bg-neonGreen text-white py-2 px-4 mx-12 my-4 rounded shadow-neon"
        onClick={(handleClick)}
      >
        <span className="text-2xl font-bold">
          Capture Image
        </span> 
      </button>
    </div>
  )
}

export default CaptureButton