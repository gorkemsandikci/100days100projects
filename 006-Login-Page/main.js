const app = new Vue({
    el: '#app',
    data: {
      username: '',
      password: ''
    },
    methods: {
      login() {
        if (this.username === 'username' && this.password === 'password') {
          alert('Logged in!');
        } else {
          alert('Username or password wrong!');
        }
      }
    }
  });