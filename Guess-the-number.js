let number = Math.trunc(Math.random()*10);

while (true) {
    let myGuess = window.prompt("What's your guess?");

    if (myGuess > number) {
        console.log("Your guess is too high.");
    }
    else if (myGuess < number) {
        console.log("Your guess is too low.");
    }
    else {
        console.log("Your guess is correct!!");
        break;
    }
}
