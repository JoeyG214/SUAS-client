const CapturedImage = ({ image }) => {
  return (
    <div>
      <img className='w-20 h-20' src={image} alt="Py-Camera Capture" />
    </div>
  )
}

export default CapturedImage