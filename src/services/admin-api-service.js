import config from '../config'

const AdminApiService = {
  getProducts() {
    return fetch(`${config.API_ENDPOINT}/admin`, {
      headers: {
          //admin auth
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  createProduct(product) {
    return fetch(`${config.API_ENDPOINT}/admin`, {
      method: 'POST',
      headers: {
          //admin auth
          'content-type' : 'application/json'
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
        featured: product.featured,
      })
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }, 
  updateProduct(product, id) {
    return fetch(`${config.API_ENDPOINT}/admin/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type' : 'application/json'
          //admin auth
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
        featured: product.featured,
      })
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
deleteProduct(id) {
  return fetch(`${config.API_ENDPOINT}/admin/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type' : 'application/json'
        //admin auth
    },
  })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
},
refreshProducts() {
  this.getProducts()
}
}

export default AdminApiService