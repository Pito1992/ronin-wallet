import { createSelector } from 'reselect'

export const getUserWallet = (state) => state.userWallet || {}

export const getUserWalletLoading = createSelector(
  getUserWallet,
  ({ loading }) => loading,
)

export const getUserWalletError = createSelector(
  getUserWallet,
  ({ error }) => error,
)

export const getUserWalletData = createSelector(
  getUserWallet,
  ({ userWallet }) => userWallet || {},
)

export const getUserWalletNumber = createSelector(
  getUserWalletData,
  ({ wallet }) => wallet,
)

export const getUserWalletBase = createSelector(
  getUserWalletData,
  ({ base }) => base,
)

export const getUserWalletCurrencies = createSelector(
  getUserWalletData,
  ({ currencies }) => currencies || {},
)

export const getAvailableCurrencies = createSelector(
  getUserWalletCurrencies,
  (currencies) => Object.keys(currencies),
)

export const getCurrencyDataByCurrencyCode = (currencyCode) => createSelector(
  getUserWalletCurrencies,
  (currencies) => currencyCode ? ({
    ...currencies[currencyCode],
    currencyCode,
  }) : null,
)