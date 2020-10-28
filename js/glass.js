document.addEventListener('DOMContentLoaded', function () {

  var glass = document.querySelector(".glass");
  var colors = ["orange", "red", "yellow"];
  var index = 0;

  setInterval(function () {
      if (index === colors.length) index = 0;
      glass.style.backgroundColor = colors[index];
      index++;
  }, 1500);

});
