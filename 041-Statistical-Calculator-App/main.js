
new Vue({
    el: '#app',
    data: {
      inputNumbers: '',
      numbers: [],
      mean: 0,
      median: 0,
      mode: 0,
      showResults: false
    },
    methods: {
      calculateStatistics() {
        // Split the input string into an array of numbers
        this.numbers = this.inputNumbers.split(',').map(Number);

        // Calculate mean
        this.mean = this.numbers.reduce((a, b) => a + b, 0) / this.numbers.length;

        // Calculate median
        const sortedNumbers = [...this.numbers].sort((a, b) => a - b);
        const middle = Math.floor(sortedNumbers.length / 2);
        if (sortedNumbers.length % 2 === 0) {
          this.median = (sortedNumbers[middle - 1] + sortedNumbers[middle]) / 2;
        } else {
          this.median = sortedNumbers[middle];
        }

        // Calculate mode
        const frequency = {};
        let maxFrequency = 0;
        for (const number of this.numbers) {
          frequency[number] = (frequency[number] || 0) + 1;
          if (frequency[number] > maxFrequency) {
            maxFrequency = frequency[number];
            this.mode = number;
          }
        }

        this.showResults = true;
      }
    }
  });