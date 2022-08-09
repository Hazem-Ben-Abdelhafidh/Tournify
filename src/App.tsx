import { Route, Routes } from "react-router-dom"
import Layout from "./Components/Layout"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div>Welcome</div>} />

      </Route>
    </Routes>
  )
}

export default App
