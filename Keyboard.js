let inp = document.querySelector("input");

inp.addEventListener("keydown", function(event) {
    console.log("key: ", event.code); //arrowup(U),arrowdown(D),arrowleft(L),arrowright(R)
    // console.log("code: ", event.code);
    // console.log("key was pressed..");
    if(event.code == "ArrowUp"|| "KeyU" || "Keyu"){
        console.log("Charcter moves forward");
    }
    else if(event.code == "ArrowDown")
    {
        console.log("character moves backward");
    }
    else if(event.code == "ArrowLeft")
    {
        console.log("character moves left");
    }
    else if(event.code == "ArrowRight")
    {
        console.log("character moves right");
    }
});