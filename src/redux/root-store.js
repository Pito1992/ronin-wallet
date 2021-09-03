import { applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import rootReducer from './root-reducer'
import rootSaga from './root-saga'

const isEnvProduction = process.env.NODE_ENV === 'production'

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = isEnvProduction
    ? [sagaMiddleware]
    : [sagaMiddleware, logger]
  
  const composeEnhancers = isEnvProduction
    ? compose
    : (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) // eslint-disable-line no-underscore-dangle

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
  )

  sagaMiddleware.run(rootSaga)

  return store
}

const store = configureStore()

export default store

