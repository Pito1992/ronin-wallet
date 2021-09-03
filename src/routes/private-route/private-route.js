import { Route, Redirect } from "react-router-dom"
import { useSelector } from 'react-redux'

import { INDEX_URL } from '../../constants/urls'

import { getUserToken } from '../../redux/authentication/authentication-selectors'

function PrivateRoute(props) {
    const token = useSelector(getUserToken)

    if (token) return <Route {...props} />

    return <Redirect to={INDEX_URL} />
}

export default PrivateRoute
