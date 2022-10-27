import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import SelectdPlan from "./components/SelectdPlan/SelectdPlan"
import SignUp from "./components/SignUp/SingUp"
import SubScription from "./components/SubScription/SubScription"
import TokenContexProvider from "./context/TokenContext"

function App() {
  return (
    <TokenContexProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sing-up" element={<SignUp />} />
          <Route path="/subscription" element={<SubScription />} />
          <Route path="/subscription/:ID_DO_PLANO" element={<SelectdPlan />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </TokenContexProvider>
  )
}

export default App
