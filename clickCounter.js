var cats = [];
var catTitles = ["Poussy", "Kinda"];
var catTitlesDisplays = document.getElementsByClassName("catTitle");
var catImgs = document.getElementsByClassName("catImg");
var counterDisplays = document.getElementsByClassName("nClicks");

var nCats = catImgs.length;

function count(cat) {
    console.log("count");
    console.log(cat);
    cat.img.addEventListener("click", function () {
        cat.counter++;
        cat.counterDisplay.innerHTML = cat.counter;
    });
}

for(var i = 0; i < nCats; i++){
    var cat = {
        title: catTitles[i],
        titleDisplay: catTitlesDisplays[i],
        img: catImgs[i],
        counter: 0,
        counterDisplay: counterDisplays[i]
    };

    cat.titleDisplay.innerHTML = cat.title;

    count(cat);

    cats.push(cat);
}


/* This approach isn't valid as the callback for click always sees the last value of the loop variable (j or k) */
// var catTitles = ["Poussy", "Kinda"];
// var catTitlesDisplays = document.getElementsByClassName("catTitle");
// for(var i = 0; i < catTitlesDisplays.length; i++){
//     catTitlesDisplays[i].innerText = catTitles[i];
// }
//
//
// var catImgs = document.getElementsByClassName("catImg");
// var counterDisplays = document.getElementsByClassName("nClicks");
// var counters = [];
// for(var counterDisplay of counterDisplays){
//     counters.push(Number(counterDisplay.innerText));
// }
// var callbacks = [];
// for(var j = 0; j < catImgs.length; j++){
//     var callback = function(){
//         console.log(j);
//         console.log(counters);
//         console.log(counterDisplays);
//         counters[j]++;
//         counterDisplays[j].innerText = counters[j];
//     };
//     callbacks.push(callback);
// }
// for(var k = 0; k < catImgs.length; k++){
//     catImgs[k].addEventListener("click", callbacks[k]);
// }
