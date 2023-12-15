import { Fragment } from "react"
import { BrowserRouter } from "react-router-dom"
import RoutesApp from "./routes/RoutesApp"

function App() {
  return (
    <Fragment>
      <BrowserRouter basename="/" >
        <RoutesApp />
      </BrowserRouter>
    </Fragment>
  )
}

export default App
