document.addEventListener('DOMContentLoaded', function () {

    var bottle1 = document.querySelector('.bottle1');
    var bottle2 = document.querySelector('.bottle2');
    var counter = 1;
    
    bottle1.addEventListener('click', function () {
        document.querySelector('h3 span').innerText = counter;
        document.querySelector('h3 span').style.color = "#ff0000"
        document.querySelector('h3 span').style.backgroundColor = "#00ff7f"
        counter++;
    });

    bottle2.addEventListener('click', function () {
        document.querySelector('h3 span').innerText = counter;
        document.querySelector('h3 span').style.color = "#ff0000"
        document.querySelector('h3 span').style.backgroundColor = "#00ff7f"
        counter++;
    });

}); 