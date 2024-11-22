const max=prompt("Enter the maximum number");
console.log(max);

const random = Math.floor(Math.random() * max)+1;

let guess= prompt("enter your guess");

while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }
    if(guess == random){
        console.log("You are right! congrats! random number was",random);
        break;
    }else if(guess<random){
       guess= prompt("Your guess was too small, plz try again!");
    }else if(guess>random){
        guess= prompt("Your guess was too large, plz try again!");
    }
    
    
}
