import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { BrowserRouter as Router } from "react-router-dom"
import RootRoute from './routes/root-route'
import store from './redux/root-store'

import './app.scss'
import 'antd/dist/antd.less'

const history = createBrowserHistory()

function App() {
  console.log('appEnv: ', process.env.NODE_ENV)
  return (
    <div className="app">
      <Provider store={store}>
        <Router history={history}>
          <RootRoute />
        </Router>
      </Provider>
    </div>
  )
}

export default App;
