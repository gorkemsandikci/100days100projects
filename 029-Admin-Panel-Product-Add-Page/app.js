new Vue({
    el: '#app',
    data: {
        productName: '',
        productPrice: '',
        productDescription: '',
        addedProduct: ''
    },
    methods: {
        addProduct() {
            if (this.productName && this.productPrice && this.productDescription) {
                // Simulate adding the product to a database
                this.addedProduct = this.productName;
                this.clearForm();
            } else {
                alert('Please fill in all fields.');
            }
        },
        clearForm() {
            this.productName = '';
            this.productPrice = '';
            this.productDescription = '';
        }
    }
});