new Vue({
    el: '#app',
    data: {
        products: [
            { name: 'Product 1', price: 10 },
            { name: 'Product 2', price: 20 },
            { name: 'Product 3', price: 15 }
        ],
        cart: []
    },
    computed: {
        cartTotal: function() {
            return this.cart.reduce((total, cartItem) => {
                return total + (cartItem.product.price * cartItem.quantity);
            }, 0);
        }
    },
    methods: {
        addToCart: function(product) {
            const existingCartItem = this.cart.find(cartItem => cartItem.product === product);
            if (existingCartItem) {
                existingCartItem.quantity++;
            } else {
                this.cart.push({ product, quantity: 1 });
            }
        },
        removeFromCart: function(index) {
            this.cart.splice(index, 1);
        }
    }
});