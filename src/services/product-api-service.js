import config from "../config";
import TokenService from "./token-service";

const ProductApiService = {
  getProducts() {
    return fetch(`${config.API_ENDPOINT}/shop`, {
      headers: {}
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  getSaleProducts() {
    return fetch(`${config.API_ENDPOINT}/shop/sale`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getProduct(itemId) {
    return fetch(`${config.API_ENDPOINT}/shop/${itemId}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default ProductApiService;
