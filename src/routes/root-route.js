import { Switch } from "react-router-dom"

import { INDEX_URL, MAIN_URL, SEND_ASSETS_URL } from '../constants/urls'

import UnlockWallet from "../modules/unlock-wallet"
import MainWallet from "../modules/main-wallet"
import SendAssets from '../modules/send-assets'

import PublicRoute from "./public-route"
import PrivateRoute from "./private-route"

function RootRoute() {
  return (
    <Switch>
      <PublicRoute exact path={INDEX_URL} component={UnlockWallet} />
      <PrivateRoute exact path={MAIN_URL} component={MainWallet} />
      <PrivateRoute exact path={SEND_ASSETS_URL} component={SendAssets} />
    </Switch>
  )
}

export default RootRoute
