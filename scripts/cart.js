var productListPage = new Vue({
    el: '#product-cart-page',
    data: {
        productCart: []
    },
    computed: {
        totalPrice() {
            var total = 0;

            this.productCart.forEach(function(product) {
                total = total + product.price;
            });

            return total;
        }
    },
    mounted() {
        // get the data from our localstorage
        var productCart = localStorage.getItem('productCart');
        productCart = JSON.parse(productCart);

        // add the cart to our data
        this.productCart = productCart;
    },
    methods: {
        buy() {
            // clear the localstorage
            localStorage.clear();
        }
    }
});