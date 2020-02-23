export default {
  PORT: process.env.PORT || 8080,
    API_ENDPOINT: process.env.REACT_APP_API_ENDPOINT || 'https://pacific-shelf-62562.herokuapp.com/api',
    TOKEN_KEY: process.env.REACT_APP_TOKEN_KEY || 'estore-auth-token',
    CART_STORAGE: process.env.REACT_APP_CART_STORAGE || 'estore-cart'
  }
  