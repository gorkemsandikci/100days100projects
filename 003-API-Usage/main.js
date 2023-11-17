const app = new Vue({
    el: '#app',
    data: {
      title: 'API Usage',
      items: []
    },
    created() {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
          this.items = data;
        })
        .catch(error => console.error(error));
    }
  });
  