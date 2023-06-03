import Header from "./components/Header"
import CaptureButton from "./components/CaptureButton"

const App = () => {
  return (
    <main className="flex flex-col w-screen h-screen bg-gray-900">
      <Header />
      <CaptureButton />
    </main>
  )
}

export default App