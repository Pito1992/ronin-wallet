import { Route } from "react-router-dom"

function PrivateRoute(props) {
    return <Route {...props} />
}

export default PrivateRoute
