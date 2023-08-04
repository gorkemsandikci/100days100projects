const app = new Vue({
    el: '#app',
    data: {
      result: '0',
      buttons: ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'],
      operatorClicked: false
    },
    methods: {
      handleButtonClick(button) {
        if (button === '=') {
          this.calculate();
        } else if (button === 'C') {
          this.clear();
        } else {
          if (this.result === '0' || this.operatorClicked) {
            this.result = button;
            this.operatorClicked = false;
          } else {
            this.result += button;
          }
        }
      },
      calculate() {
        try {
          this.result = eval(this.result).toString();
        } catch (error) {
          this.result = 'Error';
        }
        this.operatorClicked = true;
      },
      clear() {
        this.result = '0';
        this.operatorClicked = false;
      }
    }
  });