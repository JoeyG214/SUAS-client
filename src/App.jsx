import Header from './components/Header'
import CaptureButton from './components/CaptureButton'
import Footer from './components/Footer'
import DroneInfo from './components/DroneInfo'
import CapturedImages from './components/CapturedImages'

import { useState } from 'react'
import imageDataService from './services/scripts/ImageData'

const App = () => {
  const [imageUrl, setImageUrl] = useState(null)
  const [imageUrls, setImageUrls] = useState([])

  const fetchImage = async () => {
    try {
      const image = imageDataService.capture()
      const imageUrl = URL.createObjectURL(image)

      setImageUrl(imageUrl)
      setImagesUrls(imageUrls.concat(imageUrl))
    } catch (error) {
      console.error(`Failed to fetch image: ${error}`)
    }
  }
  
  return (
    <main className="flex flex-col justify-center w-screen min-h-screen bg-gray-900">
      <Header />
      <section className="flex-grow">
        <CaptureButton handleClick={fetchImage} />
        <DroneInfo />
        <CapturedImages images={imageUrls} />
      </section>
      <Footer />
    </main>
  )
}

export default App
