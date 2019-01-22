var catTitles = ["Poussy", "Kinda"];
var catTitlesDisplays = document.getElementsByClassName("catTitle");
for(var i = 0; i < catTitlesDisplays.length; i++){
    catTitlesDisplays[i].innerText = catTitles[i];
}


var catImgs = document.getElementsByClassName("catImg");
var counterDisplays = document.getElementsByClassName("nClicks");
var counters = [];
for(var counterDisplay of counterDisplays){
    counters.push(Number(counterDisplay.innerText));
}
var callbacks = [];
for(var j = 0; j < catImgs.length; j++){
    var callback = function(){
        console.log(j);
        console.log(counters);
        console.log(counterDisplays);
        counters[j]++;
        counterDisplays[j].innerText = counters[j];
    };
    catImgs[j].addEventListener("click", callback);
}
