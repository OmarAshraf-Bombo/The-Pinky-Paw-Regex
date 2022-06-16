let allInputs = document.querySelectorAll("input");

allInputs.forEach((input) => {
  // Styling On Focus & Blur
  input.onfocus = () => {
    input.style.backgroundColor = "rgb(63 67 73 / 55%)";
  };
  input.onblur = () => {
    input.style.backgroundColor = "rgb(63, 67, 73)";
  };

  // Testing Regular Expressions & Adding Border Color Based On True or False
  input.addEventListener("keyup", (e) => {
    if (!e.target.value) {
      input.parentElement.style.border = "none";
      input.parentElement.parentElement.lastElementChild.style.fontSize = "0px";
    } else if (myRegExps[e.target.attributes.name.value].test(e.target.value)) {
      input.parentElement.style.border = "1px solid green";
      input.parentElement.parentElement.lastElementChild.style.fontSize = "0px";
    } else if (
      !myRegExps[e.target.attributes.name.value].test(e.target.value)
    ) {
      input.parentElement.style.border = "1px solid red";
      input.parentElement.parentElement.lastElementChild.style.fontSize =
        "14px";
    }
  });
});

let myRegExps = {
  username: /^[a-z\d]{4,12}$/g,
  email: /^([\w-\.]+)@([a-z\d-]{1,15})\.([a-z]){2,8}(\.[a-z]{2,8})?$/g,
  password: /^([A-Z])([\w@-]){7,15}$/g,
  telephone: /^(0)(1|5)([\d]{8,9})$/g,
};

//UserName >>>>>>> Must Be 4 to 12 (Small Caps Letters And/Or Numbers)

//Email >>>>>>> (YourName) @ (Domain) . (Extension) (.OptionalExtenison)
/*
  YourName: Any Letters, Numbers, Dashes or Dots.
  Then an @ Symbol
  Then Domain: Any Small Caps Letters, Numbers Or Hyphens Between 1 & 15 Charachters
  Then a . Symbol
  Then Extension: Any Small Caps Letters Between 2 & 8 Charachters
  Then and Optional Extension Which Starts With a Dot Then Small Casps Letters Between 2 & 8 Charachters
  */

// Password >>>>>>> Must Start With Capital Letter -- Then 7 to 15 More Charachters Which My Include All Alphanumeric and (@ - _) Symbold
// Telephone >>>>>>> Must Start With 0 -- Second Digit Must Be 1 or 5 -- Then 8 or 9 More Digits

document.querySelector("button").onclick = () => {
  // Check if All Borders Are Green (Which Means All RegExp Tests is True)
  let myInputsArray = Array.from(allInputs);
  let checkArray = [];
  myInputsArray.forEach((input) => {
    input.parentElement.style.border == "1px solid green"
      ? checkArray.push(true)
      : checkArray.push(false);
  });
  if (!checkArray.includes(false)) {
    allInputs.forEach((input) => {
      input.parentElement.style.display = "none";
      document.querySelector("h1").innerText = "Thank You";
      document.querySelector("h5").style.display = "none";
      document.querySelector("button").innerHTML = "ACCOUNT CREATED";
      document.querySelector("button").style.pointerEvents = "none";
      document.querySelector("audio").play();
    });

    setInterval(createHearts, 500);
  }
};

// Heart Falls
const createHearts = () => {
  let heart = document.createElement("div");
  heart.innerHTML = "💖";
  let randomXPosition = `${Math.floor(Math.random() * 100)}%`;
  let randomDuration = `${Math.floor(Math.random() * 10)}s`;
  heart.classList.add("heart");
  heart.style.left = randomXPosition;
  heart.style.top = "-0%";
  document.body.appendChild(heart);

  heart.style.animationDuration = randomDuration;

  setTimeout(() => {
    heart.remove();
  }, 2500);
};

// Footer Year Updated Automatically
document.querySelector("#date").innerHTML = new Date().getFullYear();
