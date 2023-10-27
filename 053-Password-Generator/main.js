new Vue({
  el: "#app",
  data: {
    passwordLength: 12,
    includeUppercase: true,
    includeLowercase: true,
    includeNumbers: true,
    includeSymbols: true,
    generatedPassword: "",
  },
  methods: {
    generatePassword() {
      const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
      const numberChars = "0123456789";
      const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

      let validChars = "";
      if (this.includeUppercase) validChars += uppercaseChars;
      if (this.includeLowercase) validChars += lowercaseChars;
      if (this.includeNumbers) validChars += numberChars;
      if (this.includeSymbols) validChars += symbolChars;

      let password = "";
      for (let i = 0; i < this.passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * validChars.length);
        password += validChars[randomIndex];
      }

      this.generatedPassword = password;
    },
  },
});
