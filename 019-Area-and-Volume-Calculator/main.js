var app = new Vue({
    el: '#app',
    data: {
      selectedUnit: 'cm',
      selectedShape: 'rectangle',
      length: 0,
      width: 0,
      radius: 0,
      radiusCylinder: 0,
      heightCylinder: 0,
      area: 0,
      volume: 0
    },
    methods: {
      calculateRectangleArea() {
        this.area = this.length * this.width;
      },
      calculateCircleArea() {
        this.area = Math.PI * Math.pow(this.radius, 2);
      },
      calculateCylinderVolume() {
        this.volume = Math.PI * Math.pow(this.radiusCylinder, 2) * this.heightCylinder;
      }
    }
  });
  