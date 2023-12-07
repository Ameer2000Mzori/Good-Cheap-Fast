// selected elements
const goodCheck: any = document.getElementsByClassName("good-Check")[0];
const cheapCheck: any = document.getElementsByClassName("cheap-Check")[0];
const fastCheck: any = document.getElementsByClassName("fast-Check")[0];

// functions
const goodHandler = () => {
  console.log("good-Clicked");
  if (cheapCheck.checked) {
    fastCheck.checked = false;
  }
};

const cheapHandler = () => {
  console.log("cheap-Clicked");
  if (fastCheck.checked) {
    goodCheck.checked = false;
  }
};

const fastHandler = () => {
  console.log("fast-Clicked");
  if (goodCheck.checked) {
    cheapCheck.checked = false;
  }
};

//event linsters
goodCheck.addEventListener("click", goodHandler);
cheapCheck.addEventListener("click", cheapHandler);
fastCheck.addEventListener("click", fastHandler);
