import config from '../config'

const CartApiService = {
createCart(cart, userId){
    return fetch(`${config.API_ENDPOINT}/cart`, {
        method: 'POST',
        headers: {
            //admin auth
            'content-type' : 'application/json'
        },
        body: JSON.stringify({
        cart,
        userId
        })
      })
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    }, 

}

export default CartApiService