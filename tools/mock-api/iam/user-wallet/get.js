import walletData from '../../../mock-data/wallets'

export default (server) => server.get('/iam/user-wallet/:walletId', (req, res) => {
  const { walletId } = req.params

  const userWallet = walletData[walletId]

  if (!userWallet) {
    res.status(404).jsonp({
      message: 'Wallet not found'
    }) 
  } else {
    setTimeout(() => {
      res.status(200).jsonp(userWallet)
    }, 1000)
  }
})
