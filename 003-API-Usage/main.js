const app = new Vue({
    el: '#app',
    data: {
      title: 'API Kullanarak Veri Çekme',
      items: []
    },
    created() {
      // API'dan verileri çekmek için fetch API'sini kullanalım
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
          // API'den gelen verileri items veri alanına ata
          this.items = data;
        })
        .catch(error => console.error(error));
    }
  });
  