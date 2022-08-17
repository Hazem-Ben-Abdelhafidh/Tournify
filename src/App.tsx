import { Route, Routes } from "react-router-dom"
import Layout from "./Components/Layout"
import SearchResults from "./Components/SearchResults/SearchResults"
import NewTournament from "./features/Tournaments/NewTournament"
import TournamentDetails from "./features/Tournaments/TournamentDetails"
import TournamentsList from "./features/Tournaments/TournamentsList"
import LoginPage from "./pages/LoginPage/LoginPage"
import NotFoundPage from "./pages/NotFoundPage"
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
          <Route path="/results" element={<SearchResults />} />
          <Route path="/tournaments/:id" element={<TournamentDetails />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
