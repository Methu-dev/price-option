import './App.css'
import LineChart from './Components/LineChart/LineChart'
// import DaisyUi from './Components/DaisyNav/DaisyUi'
import Nav from './Components/Navbar/Nav'
import PriceOptions from './Components/PriceOptions/PriceOptions'
function App() {

  return (
    <>
    {/* <DaisyUi></DaisyUi> */}
    <Nav/>
    <PriceOptions />
    <LineChart />
      {/* <h1 className='text-3xl bg-red-700 text-center'>Vite + React</h1> */}
    </>
  )
}

export default App
