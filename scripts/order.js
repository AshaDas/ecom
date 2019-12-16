var productListPage = new Vue({
    el: '#address-page',
    data: {
        name: '',
        address: '',
        orders: [],
    },
    // when the page loads, this function is called automatically
    mounted() {
        // get orders from localstorage localStorage
        var productCart = localStorage.getItem('productCart');

        // if there is no product cart, set an empty product cart
        if (productCart === null) {
            localStorage.setItem('productCart', '[]');
        } else {
            // parse the value
            productCart = JSON.parse(productCart);

            // set it to orders variable
            this.orders = productCart;
        }
    },
    methods: {
        async saveOrderToBackend() {
            var formData = new FormData();
            formData.append('name', this.name);
            formData.append('address', this.address);
            formData.append('orders', JSON.stringify(this.orders));

            // make POST api call
            var response = await axios.post('php/order.php', formData);

            // clear the localstorage
            localStorage.clear();
        }
    }
});