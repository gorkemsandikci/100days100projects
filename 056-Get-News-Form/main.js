new Vue({
    el: '#app',
    data: {
        formData: {
        website: '',
        url: '',
        titlePath: '',
        subTitlePath: '',
        descriptionPath: '',
        fullTextPath: '',
        imagePath: '',
        authorPath: ''
        }
    },
    methods: {
        submitForm() {
        console.log('Form submitted with data:', this.formData);
        }
    }
});