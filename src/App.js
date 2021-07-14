import { Component } from "react"
import { loginContext } from "./components/context/loginContext"
import { router } from "./router/router"
class App extends Component {
  state = {
    login: false,
  }

  changeLogin = () => {
    this.setState({ login: !this.state.login })
  }

  render() {
    return (
      <loginContext.Provider
        value={{ login: this.state.login, changeLogin: this.changeLogin }}
      >
        <div>{router}</div>
      </loginContext.Provider>
    )
  }
}
export default App
