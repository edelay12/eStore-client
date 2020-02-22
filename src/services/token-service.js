import jwtDecode from 'jwt-decode'
import config from '../config';

let _timeout
const _TEN_SECONDS = 10000

const TokenService = {
    saveCart(cart){
        window.localStorage.setItem(config.CART_STORAGE, JSON.stringify(cart));
    },
    getCart() {
      return window.localStorage.getItem(config.CART_STORAGE)
    },
    hasCart() {
      return !!TokenService.getCart()
  },
  clearCart() {
    window.localStorage.removeItem(config.CART_STORAGE)
  },
    saveAuthToken(token) {
        window.sessionStorage.setItem(config.TOKEN_KEY, token)
    },
    getAuthToken() {
        return window.sessionStorage.getItem(config.TOKEN_KEY)
    },
    clearAuthToken() {
        console.info('clearing token')
        window.sessionStorage.removeItem(config.TOKEN_KEY)
    },
    hasAuthToken() {
        return !!TokenService.getAuthToken()
    },
    parseJwt(jwt) {
        return jwtDecode(jwt)
      },
      readJwtToken() {
        return TokenService.parseJwt(TokenService.getAuthToken())
      },
      _getTimeUntilExpiry(payload) {
        /*
          payload is from the JWT
          the `exp` value is in seconds, need to convert to ms, so * 1000
          calculates the difference between now and when the JWT will expire
        */
        return (payload.exp * 1000) - Date.now()
      },
      queueCallbackBeforeExpiry(callback) {
        /* get the number of ms from now until the token expires */
        const msUntilExpiry = TokenService._getTimeUntilExpiry(
          TokenService.readJwtToken()
        )
        /*
          queue a callback that will happen 10 seconds before the token expires
          the callback is passed in as an argument so could be anything,
            in this app, the callback is for calling the refresh endpoint
        */
        _timeout = setTimeout(callback, msUntilExpiry - _TEN_SECONDS)
      },
      clearCallbackBeforeExpiry() {
        clearTimeout(_timeout)
      },
}

export default TokenService