// selected elements
var goodCheck = document.getElementsByClassName("good-Check")[0];
var cheapCheck = document.getElementsByClassName("cheap-Check")[0];
var fastCheck = document.getElementsByClassName("fast-Check")[0];
// functions
var goodHandler = function () {
    console.log("good-Clicked");
    if (cheapCheck.checked) {
        fastCheck.checked = false;
    }
};
var cheapHandler = function () {
    console.log("cheap-Clicked");
    if (fastCheck.checked) {
        goodCheck.checked = false;
    }
};
var fastHandler = function () {
    console.log("fast-Clicked");
    if (goodCheck.checked) {
        cheapCheck.checked = false;
    }
};
//event linsters
goodCheck.addEventListener("click", goodHandler);
cheapCheck.addEventListener("click", cheapHandler);
fastCheck.addEventListener("click", fastHandler);
