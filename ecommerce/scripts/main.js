var productListPage = new Vue({
    el: '#product-list-page',
    data: {
        productList: [],
        cartCount: 0,
    },
    // when the page loads, this function is called automatically
    async mounted() {
        // first check if we already have localStorage
        var productCart = localStorage.getItem('productCart');
        
        // if there is no product cart, set an empty product cart
        if (productCart === null) {
            localStorage.setItem('productCart', '[]');
        } else {
            // otherwise, do nothing
        }

        // get data from our backend, all products
        var response = await axios.get('php/products.php');

        // set the data to "productList" property
        this.productList = response.data;
    },
    methods: {
        addToCart(product) {
            // increase the cart count
            this.cartCount = this.cartCount + 1;
            
            // fist, get the data from our localstorage
            var productCart = localStorage.getItem('productCart');
            productCart = JSON.parse(productCart);
            
            // add the product to the variable
            productCart.push(product);

            // save the new prodcut list variable to localstorage
            localStorage.setItem('productCart', JSON.stringify(productCart));
        }
    }
});