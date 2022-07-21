// create icon variable
var icon = document.getElementById('shuffle-icon');
console.log(icon);
icon.addEventListener('click', function () {
    var empty = [];
    var changePosition = document.querySelectorAll('#same');
    var array = ['J', 'V', 'A', 'L', 'S'];

    for (let index = 0; index < array.length; index++) {
        while (empty.length <= array.length) {
            var randomNumber = Math.floor(Math.random() * array.length);
            if (!(empty.includes(array[randomNumber]))) {
                empty[index] = array[randomNumber];
                break;
            }
        }
        changePosition[index].innerHTML = empty[index];
    }
});


