
var app = new Vue({
    el: '#app',
    data: {
      fonts: [
          "Arial",
          "Verdana",
          "Tahoma",
          "Courier New",
          "Georgia",
          "Times New Roman",
          "Helvetica",
          "Trebuchet MS",
          "Impact",
          "Comic Sans MS",
          "Lucida Sans Unicode",
          "Arial Black",
          "Tahoma",
          "Palatino Linotype",
          "Book Antiqua",
          "Arial Narrow",
          "Lucida Console",
          "Gill Sans",
          "Candara",
          "Franklin Gothic Medium",
          "Cambria",
          "MS Sans Serif",
          "MS Serif",
          "Verdana",
          "Century Gothic",
          "Lucida Sans",
          "Lucida Grande",
          "Geneva",
          "Geneva",
          "Verdana",
          "Lucida Grande",
          "Trebuchet MS",
          "Helvetica",
          "Helvetica Neue",
          "Tahoma",
          "Georgia",
          "Times",
          "Times New Roman",
          "Courier",
          "Courier New",
          "Lucidatypewriter",
          "Monaco",
          "Copperplate",
          "Papyrus",
          "Brush Script MT",
          "Edwardian Script ITC",
          "Segoe UI",
          "Candara",
          "Palatino",
          "Baskerville",
          "Garamond",
          "Futura",
          "Century",
          "Bookman"
        ],
        colors: [
          "red",
          "green",
          "blue",
          "purple",
          "orange",
          "pink",
          "brown",
          "gray",
          "black"
        ],
        currentFontIndex: 0,
        currentFont: 'Arial',
        currentColorIndex: 0,
        currentColor: 'black'
      },
      created() {
        this.startFontAndColorChange();
      },
      methods: {
        startFontAndColorChange() {
          setInterval(() => {
            this.currentFontIndex = (this.currentFontIndex + 1) % this.fonts.length;
            this.currentFont = this.fonts[this.currentFontIndex];
    
            this.currentColorIndex = (this.currentColorIndex + 1) % this.colors.length;
            this.currentColor = this.colors[this.currentColorIndex];
          }, 1000); // Her saniye değişim
        }
      }
    });