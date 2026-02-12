const favMovie = "RRR";
let guess = prompt("Guess The Movie");
while( (guess !== favMovie) && (guess !== "quit") )
{
    guess = prompt("Wrong guess...please try again..:)")
}
if(guess === favMovie)
{
    console.log("Congrats!!");
}
else {
    console.log("You Quit");
}
