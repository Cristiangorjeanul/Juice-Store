
document.addEventListener('DOMContentLoaded', function () {

  //Button
  var button = document.querySelector('.like-btn');
  var counter = 1;
  button.addEventListener('click', function () {
    document.querySelector('.like-btn span').innerText = counter;
    counter++;
  });


}); 