let lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numberCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*'];

let lengthValueInput = document.getElementById("length-value");
let createPassword = document.getElementById("create-password");
let passwordElOne = document.getElementById("pass-el-one");
let passwordElTwo = document.getElementById("pass-el-two");
let passwordElThree = document.getElementById("pass-el-three");
let passwordElFour = document.getElementById("pass-el-four");

function randomPassword() {
    let length = parseInt(lengthValueInput.value);


      if (length < 10) {
        passwordElOne.textContent = "Password is too short! Please enter a length of at least 10 characters.";
        passwordElTwo.textContent = "Password is too short! Please enter a length of at least 10 characters.";
        passwordElThree.textContent = "Password is too short! Please enter a length of at least 10 characters.";
        passwordElFour.textContent = "Password is too short! Please enter a length of at least 10 characters.";
        return;
      }
        if (length > 30) {
        passwordElOne.textContent = "Password is too long! Please enter a length of maximum 30 characters.";
        passwordElTwo.textContent = "Password is too long! Please enter a length of maximum 30 characters.";
        passwordElThree.textContent = "Password is too long! Please enter a length of maximum 30 characters.";
        passwordElFour.textContent = "Password is too long! Please enter a length of maximum 30 characters.";
        return; 
    }

    let includeLowercase = true; 
    let includeUppercase = true; 
    let includeNumbers = true; 
    let includeSpecial = true; 
    
    let allChars = [];
    if (includeLowercase) allChars = allChars.concat(lowercaseCharacters);
    if (includeUppercase) allChars = allChars.concat(uppercaseCharacters);
    if (includeNumbers) allChars = allChars.concat(numberCharacters);
    if (includeSpecial) allChars = allChars.concat(specialCharacters);

    let passwordOne = '';
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * allChars.length);
        passwordOne += allChars[randomIndex];
    }
    let passwordTwo = '';
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * allChars.length);
        passwordTwo += allChars[randomIndex];
    }
    let passwordThree = '';
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * allChars.length);
        passwordThree += allChars[randomIndex];
    }
    let passwordFour = '';
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * allChars.length);
        passwordFour += allChars[randomIndex];
    }

    // Display the generated password in HTML elements
    passwordElOne.textContent = passwordOne;
    passwordElTwo.textContent = passwordTwo;
    passwordElThree.textContent = passwordThree;
    passwordElFour.textContent = passwordFour;
}

// Call the randomPassword function when the button is clicked
createPassword.addEventListener("click", randomPassword);

//ability to copy to clipboard
// Copy generated password to clipboard
function copyToClipboard(e) {
    console.log("Clicked on password element");
    let password = e.target.textContent;
    navigator.clipboard.writeText(password).then(() => {
        console.log("Password copied to clipboard successfully");
    }).catch(err => {
        console.error('Could not copy text: ', err);
    });
}

// Attach click event listeners to password elements for copying to clipboard
passwordElOne.addEventListener("click", function(e) {
    console.log("Clicked on password element one");
    copyToClipboard(e);
});
// Attach click event listeners to password elements for copying to clipboard
// Attach click event listeners to password elements for copying to clipboard
passwordElOne.addEventListener("click", copyToClipboard);
passwordElTwo.addEventListener("click", copyToClipboard);
passwordElThree.addEventListener("click", copyToClipboard);
passwordElFour.addEventListener("click", copyToClipboard);
