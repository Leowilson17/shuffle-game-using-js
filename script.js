// create icon variable
var icon = document.getElementById('shuffle-icon');
// console.log(icon);
var totalTries = 0;
icon.addEventListener('click', function () {
    var empty = [];
    var changePosition = document.querySelectorAll('#same');
    var array = ['R', 'A', 'N', 'E', 'C'];
    totalTries = totalTries + 1;
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

// Store check button
var checkBtn = document.getElementById('btn-1');
// store score btn
var scoreBtn = document.getElementById('score');
var empty = [];
var mark = 0;
checkBtn.addEventListener('click', function () {
    var ansArray = ['car', 'earn', 'crane', 'ear', 'near', 'are', 'ran', 'can', 'nan', 'area'];
    var inputBox = document.getElementById('box');
    // console.log(inputBox);
    var store = inputBox.value;
    inputBox.value = "";
    if (ansArray.includes(store)) {
        // check  repeated elements
        if (!(empty.includes(store))) {
            empty.push(store);
            var resultBox = document.getElementById('result');
            // console.log(resultBox);
            var para = document.createElement('p');
            // console.log(para);
            para.innerHTML = store;
            resultBox.appendChild(para);
            mark = mark + 2;
            scoreBtn.innerHTML = "Score :" + mark;
        }
        else {
            inputBox.value = "Already Exist";
        }
    }
    // console.log(empty);
});


// store submit button
var endGameBtn = document.getElementById('btn-2');
// console.log(endGameBtn);
endGameBtn.addEventListener('click', function (){
var triesDisplay = document.getElementById('tries');
// console.log(triesDisplay);
triesDisplay.innerHTML = 'Total Tries :' + totalTries;
});





