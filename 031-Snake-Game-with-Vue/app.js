new Vue({
    el: '#app',
    data: {
      board: [],
      snake: [{ row: 10, col: 10 }],
      food: { row: 5, col: 5 },
      direction: 'right'
    },
    created() {
      this.initializeBoard();
      this.startGame();
    },
    methods: {
      initializeBoard() {
        for (let i = 0; i < 20; i++) {
          const row = [];
          for (let j = 0; j < 20; j++) {
            row.push('');
          }
          this.board.push(row);
        }
      },
      startGame() {
        setInterval(this.moveSnake, 200);
        window.addEventListener('keydown', this.changeDirection);
      },
      moveSnake() {
        const head = Object.assign({}, this.snake[0]);
        switch (this.direction) {
          case 'up':
            head.col--;
            break;
          case 'down':
            head.col++;
            break;
          case 'left':
            head.row--;
            break;
          case 'right':
            head.row++;
            break;
        }

        if (head.row < 0 || head.row >= 20 || head.col < 0 || head.col >= 20) {
          alert('Game Over!');
          window.location.reload();
        }

        this.snake.unshift(head);

        if (head.row === this.food.row && head.col === this.food.col) {
          this.generateFood();
        } else {
          this.snake.pop();
        }

        this.updateBoard();
      },
      generateFood() {
        this.food.row = Math.floor(Math.random() * 20);
        this.food.col = Math.floor(Math.random() * 20);
      },
      updateBoard() {
        this.board = this.board.map(row => row.map(() => ''));
        this.snake.forEach(segment => {
          this.board[segment.row][segment.col] = 'snake';
        });
        this.board[this.food.row][this.food.col] = 'food';
      },
      changeDirection(event) {
        switch (event.keyCode) {
          case 37:
            if (this.direction !== 'right') {
              this.direction = 'left';
            }
            break;
          case 38:
            if (this.direction !== 'down') {
              this.direction = 'up';
            }
            break;
          case 39:
            if (this.direction !== 'left') {
              this.direction = 'right';
            }
            break;
          case 40:
            if (this.direction !== 'up') {
              this.direction = 'down';
            }
            break;
        }
      }
    }
  });