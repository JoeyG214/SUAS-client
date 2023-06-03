import Header from "./components/Header"
import CaptureButton from "./components/CaptureButton"
import Footer from "./components/Footer"
import DroneInfo from "./components/DroneInfo"
import CapturedImages from "./components/CapturedImages"

const App = () => {
  return (
    <main className="flex flex-col justify-center w-screen min-h-screen bg-gray-900">
      <Header />
      <section className="flex-grow">
        <CaptureButton />
        <DroneInfo />
        <CapturedImages />
      </section>
      <Footer />
    </main>
  )
}

export default App