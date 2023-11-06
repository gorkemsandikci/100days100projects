new Vue({
    el: '#app',
    data: {
        targetNumber: Math.floor(Math.random() * 100) + 1,
        guess: null,
        message: '',
        isDarkMode: false, // Add a data property for dark mode
    },
    methods: {
        checkGuess: function () {
            if (this.guess == this.targetNumber) {
                this.message = `Congratulations! You guessed the correct number: ${this.targetNumber}`;
            } else if (this.guess < this.targetNumber) {
                this.message = `Try a higher number.`;
            } else {
                this.message = 'Try a lower number.';
            }
        },
        toggleDarkMode: function () {
            this.isDarkMode = !this.isDarkMode;
        },
    },
});
