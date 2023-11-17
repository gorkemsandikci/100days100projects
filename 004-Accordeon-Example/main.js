document.addEventListener("DOMContentLoaded", function() {
    const app = new Vue({
      el: '#app',
      data: {
        faqList: [
          {
            id: 1,
            question: 'Question: How can I reset my password?',
            answer: 'Answer: To reset your password, go to the login page and click on the "Forgot Password" link. Follow the instructions sent to your email to create a new password for your account.',
            isOpen: false
          },
          {
            id: 2,
            question: 'Question: What payment methods do you accept?',
            answer: 'Answer: We accept various payment methods including credit cards (Visa, MasterCard), PayPal, and bank transfers. During the checkout process, you can choose the payment option that suits you best.',
            isOpen: false
          },
          {
            id: 3,
            question: 'Question: Can I return a product if I amm not satisfied?',
            answer: 'Answer: Yes, we have a hassle-free return policy. If you are not satisfied with your purchase, you can return the product within 30 days of receiving it. Please visit our "Returns and Exchanges" page for detailed instructions on how to initiate a return.',
            isOpen: false
          }
        ]
      },
      methods: {
        toggleAccordion(id) {
          this.faqList.forEach(faq => {
            if (faq.id === id) {
              faq.isOpen = !faq.isOpen;
            } else {
              faq.isOpen = false;
            }
          });
        }
      }
    });
  });
document.addEventListener("DOMContentLoaded", function() {
  const appwatch = new Vue({
    el: '#app-watch',
    data: {
      currentTime: ''
    },
    mounted() {
      this.updateCurrentTime();
      setInterval(() => this.updateCurrentTime(), 1000);
    },
    methods: {
      updateCurrentTime() {
        const now = new Date();
        this.currentTime = now.toLocaleTimeString();
      }
    }
  });
});