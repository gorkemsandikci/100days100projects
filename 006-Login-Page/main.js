const app = new Vue({
    el: '#app',
    data: {
      username: '',
      password: ''
    },
    methods: {
      login() {
        // Kullanıcı adı ve şifreyi burada doğrulayabilirsiniz
        if (this.username === 'kullanici' && this.password === 'sifre') {
          alert('Giriş başarılı!');
        } else {
          alert('Kullanıcı adı veya şifre hatalı!');
        }
      }
    }
  });