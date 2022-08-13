import { Route, Routes } from "react-router-dom"
import Layout from "./Components/Layout"
import NewTournament from "./features/Tournaments/NewTournament"
import TournamentsList from "./features/Tournaments/TournamentsList"
import LoginPage from "./pages/LoginPage/LoginPage"
import SignupPage from "./pages/SignupPage/SignupPage"
import RequireAuth from "./utils/RequireAuth"

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route element={<RequireAuth />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<TournamentsList />} />
          <Route path="addNewTournament" element={<NewTournament />} />
        </Route>

      </Route>
    </Routes>
  )
}

export default App
