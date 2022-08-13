import { Route, Routes } from "react-router-dom"
import Layout from "./Components/Layout"
import NewTournament from "./features/Tournaments/NewTournament"
import LoginPage from "./pages/LoginPage/LoginPage"
import SignupPage from "./pages/SignupPage/SignupPage"

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<div>Welcome</div>} />
        <Route path="addNewTournament" element={<NewTournament />} />
      </Route>
    </Routes>
  )
}

export default App
