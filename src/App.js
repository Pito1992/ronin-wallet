import RootRoute from './routes/root-route'

import './app.scss'
import 'antd/dist/antd.less'


function App() {
  console.log('process.env.NODE_ENV: ', process.env.NODE_ENV)
  return (
    <div className="app">
      <RootRoute />
    </div>
  )
}

export default App;
