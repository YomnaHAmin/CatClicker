/* Cat Clicker Premium */

var catsList = document.getElementsByTagName("ul")[0];
var catTitleDisplay = document.getElementById("catTitle");
var catImg = document.getElementById("catImg");
var catCountDisplay = document.getElementById("nClicks");

var catTitles = ["Pousy", "Kinda", "Emilly", "Classy", "Tayla", "Belly"];
var nCats = catTitles.length;

function clickImg(liCopy) {
    catImg.addEventListener('click', function () {
        console.log(liCopy);
        liCopy.dataset.count++;
        catCountDisplay.innerHTML = liCopy.dataset.count;
    });
}
for(var i = 0; i < nCats; i++){
    var li = document.createElement("li");
    li.innerHTML = catTitles[i];
    li.dataset.title = catTitles[i];
    li.dataset.imgurl = "cat"+Number(i+1)+".png";
    li.dataset.count = 0;
    li.addEventListener('click', function () {
        var me = this;
        catImg.removeEventListener('click', clickImg, false);
        console.log(this.dataset);
        catTitleDisplay.innerHTML = this.dataset.title;
        catImg.src = this.dataset.imgurl;
        catImg.style.visibility = "visible";
        catCountDisplay.innerHTML = this.dataset.count;
    });

    clickImg(li);

    catsList.appendChild(li);
}







/* DUO Cat Clicker */
// var cats = [];
// var catTitles = ["Poussy", "Kinda"];
// var catTitlesDisplays = document.getElementsByClassName("catTitle");
// var catImgs = document.getElementsByClassName("catImg");
// var counterDisplays = document.getElementsByClassName("nClicks");
//
// var nCats = catImgs.length;
//
//
// for(var i = 0; i < nCats; i++){
//     var cat = {
//         title: catTitles[i],
//         titleDisplay: catTitlesDisplays[i],
//         img: catImgs[i],
//         counter: 0,
//         counterDisplay: counterDisplays[i]
//     };
//
//     cat.titleDisplay.innerHTML = cat.title;
//
//     cat.img.addEventListener("click", (function (catCopy) {
//         return function(){
//             catCopy.counter++;
//             catCopy.counterDisplay.innerHTML = catCopy.counter;
//         }
//     })(cat));
//
//     cats.push(cat);
// }


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
