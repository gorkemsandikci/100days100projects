new Vue({
    el: '#app',
    data: {
      contacts: [
        { id: 1, name: 'Ahmet', avatar: 'avatar1.jpg', messages: [] },
        { id: 2, name: 'Mehmet', avatar: 'avatar2.jpg', messages: [] },
        { id: 3, name: 'Ayşe', avatar: 'avatar3.jpg', messages: [] }
      ],
      selectedContact: null,
      newMessage: ''
    },
    methods: {
      selectContact(contact) {
        this.selectedContact = contact;
      },
      sendMessage() {
        if (this.newMessage.trim() !== '' && this.selectedContact) {
          this.selectedContact.messages.push({ id: Date.now(), text: this.newMessage, user: true });
          this.newMessage = '';
          this.$nextTick(() => {
            this.$refs.chatBox.scrollTop = this.$refs.chatBox.scrollHeight;
          });
        }
      }
    }
  });