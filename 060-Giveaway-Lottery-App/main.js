new Vue({
    el: '#app',
    data() {
      return {
        spinning: false,
        lotteryText: '0'.repeat(6),
        digitCount: 6
      };
    },
    methods: {
      startLottery() {
        this.spinning = true;
        this.rotateLotteryText();
      },
      rotateLotteryText() {
        const interval = setInterval(() => {
          const randomNumber = Math.floor(Math.random() * 10);
          this.lotteryText = this.lotteryText.substr(1) + randomNumber.toString();
        }, 100);

        setTimeout(() => {
          clearInterval(interval);
          this.spinning = false;
        }, 3000);
      }
    },
    watch: {
      digitCount(newCount) {
        this.lotteryText = '0'.repeat(newCount);
      }
    }
  });