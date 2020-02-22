//import TokenService from '../services/token-service'
import config from '../config'

const ProductApiService = {
  getProducts() {
    return fetch(`${config.API_ENDPOINT}/shop`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  getSaleProducts() {
    return fetch(`${config.API_ENDPOINT}/shop/sale`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )  
  },
  getProduct(itemId) {
    return fetch(`${config.API_ENDPOINT}/shop/${itemId}`, {
      headers: {
      //  'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

 /* getProductId(articleId) {
    return fetch(`${config.API_ENDPOINT}/articles/${articleId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getArticleComments(articleId) {
    return fetch(`${config.API_ENDPOINT}/articles/${articleId}/comments`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postComment(articleId, text) {
    return fetch(`${config.API_ENDPOINT}/comments`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        article_id: articleId,
        text,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  } */
}

export default ProductApiService
