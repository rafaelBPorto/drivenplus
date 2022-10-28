import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import SelectdPlan from "./components/SelectdPlan/SelectdPlan"
import SignUp from "./components/SignUp/SingUp"
import SubScription from "./components/SubScription/SubScription"
import UserContextProvider from "./context/UserContext"

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sing-up" element={<SignUp />} />
          <Route path="/subscription" element={<SubScription />} />
          <Route path="/subscription/:ID_DO_PLANO" element={<SelectdPlan />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  )
}

export default App
