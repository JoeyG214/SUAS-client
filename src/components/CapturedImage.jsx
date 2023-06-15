import React from 'react'

const CapturedImage = ({ image }) => {
  return (
    <div>
      <li>
        <img src={image} alt="Py-Camera Capture" />
      </li>
    </div>
  )
}

export default CapturedImage