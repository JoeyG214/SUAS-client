import Header from "./components/Header"
import CaptureButton from "./components/CaptureButton"
import Footer from "./components/Footer"
import DroneInfo from "./components/DroneInfo"

const App = () => {
  return (
    <main className="flex flex-col justify-center w-screen min-h-screen bg-gray-900">
      <Header />
      <section className="flex-grow">
        <CaptureButton />
        <DroneInfo />
      </section>
      <Footer />
    </main>
  )
}

export default App