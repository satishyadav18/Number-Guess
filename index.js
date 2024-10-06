const min = 1;
const max = 100;
const ans = Math.floor(Math.random() * (max - min + 1)) + 1;
let attempts = 0;
let running = true;

document.getElementById("customPromptOverlay").style.display = "flex";

function handleGuess() {
    let guess = document.getElementById("customPromptInput").value;
    guess = Number(guess);

    if (isNaN(guess)) {
        alert("Please enter a valid number");
    } else if (guess < min || guess > max) {
        alert(`Please enter a number between ${min} and ${max}`);
    } else {
        attempts++;
        if (guess > ans) {
            alert("TOO HIGH! PLEASE TRY AGAIN");
        } else if (guess < ans) {
            alert("TOO LOW! PLEASE TRY AGAIN");
        } else {
            alert(`CORRECT! The answer was ${ans}. It took you ${attempts} attempts`);
            document.getElementById("customPromptOverlay").style.display = "none"; // Hide the prompt when the answer is correct
        }
    }
}

document.getElementById("confirmBtn").addEventListener("click", handleGuess);

document.getElementById("customPromptInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        handleGuess();
    }
});







// const min = 1;
// const max = 100;
// const ans = Math.floor(Math.random() * (max - min + 1)) + 1;

// // console.log(ans);

// let attempts = 0;
// let guess;
// let running = true;

// while(running){
//     guess = window.prompt(`Guess a number between ${min} - ${max}`);
//     guess = Number(guess);

//     if(isNaN(guess)){
//         window.alert("Please enter a valid number");
//     }
//     else if(guess < min || guess > max){
//         window.alert("Please enter a valid number");
//     }
//     else{
//         attempts++;
//         if(guess > ans){
//             window.alert("TOO HIGH! PLEASE TRY AGAIN");
//         }
//         else if(guess < ans){
//             window.alert("TOO LOW! PLEASE TRY AGAIN");
//         }
//         else{
//             window.alert(`CORRECT! The answer was ${ans}. It took you ${attempts} attempts`);
//             running = false;
//         }
//     }
// }

