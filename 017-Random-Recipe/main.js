var app = new Vue({
  el: '#app',
  data: {
    meal: null
  },
  methods: {
    async getRandomMeal() {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        const data = await response.json();
        this.meal = data.meals[0];
      } catch (error) {
        console.error('Bir hata oluştu:', error);
      }
    }
  }
});
