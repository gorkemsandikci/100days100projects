new Vue({
    el: '#app',
    data: {
        newTask: '',
        tasks: []
    },
    methods: {
        addTask: function() {
            if (this.newTask.trim() === '') return;
            this.tasks.push({ text: this.newTask, completed: false });
            this.newTask = '';
        },
        removeTask: function(index) {
            this.tasks.splice(index, 1);
        }
    }
});