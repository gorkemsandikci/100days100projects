new Vue({
    el: '#app',
    data: {
        selectedDate: ''
    },
    methods: {
        submitForm() {
            if (this.selectedDate) {
                alert('Date selected: ' + this.selectedDate);
            } else {
                alert('Please select a date.');
            }
        }
    }
});
