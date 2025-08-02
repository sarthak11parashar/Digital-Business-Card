import Info from "./components/info"
import Footer from "./components/footer"
import About from "./components/about"
import Interests from "./components/Interests"

export default function App() {
  return (
    <div className="card">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}
