import Header from "./components/Header"
import CaptureButton from "./components/CaptureButton"
import Footer from "./components/Footer"

const App = () => {
  return (
    <main className="flex flex-col w-screen min-h-screen bg-gray-900">
      <Header />
      <section className="flex-grow">
        <CaptureButton />
      </section>
      <Footer />
    </main>
  )
}

export default App