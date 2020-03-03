import config from "../config";
import TokenService from "./token-service";

const AdminApiService = {
  getProducts() {
    return fetch(`${config.API_ENDPOINT}/admin`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  createProduct(product) {
    return fetch(`${config.API_ENDPOINT}/admin`, {
      method: "POST",
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
        "content-type": "application/json"
      },
      body: JSON.stringify({
        product_name: product.product_name,
        product_roast: product.product_roast,
        price: product.price,
        picture_main: product.picture_main,
        details: product.details,
        origin: product.origin,
        collection: product.collection,
        sale_price: product.salePrice,
        sale: product.sale,
        featured: product.featured
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  updateProduct(product, id) {
    return fetch(`${config.API_ENDPOINT}/admin/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        product_name: product.product_name,
        product_roast: product.product_roast,
        price: product.price,
        picture_main: product.picture_main,
        details: product.details,
        origin: product.origin,
        collection: product.collection,
        sale_price: product.salePrice,
        sale: product.sale,
        featured: product.featured
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  deleteProduct(id) {
    return fetch(`${config.API_ENDPOINT}/admin/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  refreshProducts() {
    this.getProducts();
  }
};

export default AdminApiService;
