var imgBox = document.querySelector(".imb-box");
var imgWrap = document.querySelector(".img-wrap");
var originalImg = document.getElementById("originalImg");
var line = document.getElementById("line");

originalImg.style.width = imgBox.offsetWidth + "px";
var lefSpace = imgBox.offsetLeft;

imgBox.onmousemove = function (e) {
  var boxWidth = e.pageX - lefSpace + "px";
  imgWrap.style.width = boxWidth;
  line.style.left = boxWidth;
};