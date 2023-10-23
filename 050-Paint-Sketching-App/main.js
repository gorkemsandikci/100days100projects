new Vue({
    el: '#app',
    data: {
        drawing: false,
        context: null,
        lastX: 0,
        lastY: 0,
        lineColor: '#000000', // Default line color is black
        lineWidth: 2, // Default line width
    },
    mounted() {
        this.context = this.$refs.canvas.getContext('2d');
        this.$refs.canvas.width = window.innerWidth;
        this.$refs.canvas.height = window.innerHeight;
    },
    methods: {
        startDrawing(e) {
            this.drawing = true;
            this.lastX = e.clientX - this.$refs.canvas.getBoundingClientRect().left;
            this.lastY = e.clientY - this.$refs.canvas.getBoundingClientRect().top;
        },
        draw(e) {
            if (!this.drawing) return;
            const x = e.clientX - this.$refs.canvas.getBoundingClientRect().left;
            const y = e.clientY - this.$refs.canvas.getBoundingClientRect().top;

            this.context.strokeStyle = this.lineColor;
            this.context.lineWidth = this.lineWidth;
            this.context.lineJoin = 'round';
            this.context.lineCap = 'round';

            this.context.beginPath();
            this.context.moveTo(this.lastX, this.lastY);
            this.context.lineTo(x, y);
            this.context.stroke();

            this.lastX = x;
            this.lastY = y;
        },
        stopDrawing() {
            this.drawing = false;
        },
    },
});