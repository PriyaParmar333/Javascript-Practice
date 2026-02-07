let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click" , function(event) {
    let item=document.createElement("li");
    item.innerText=inp.value; //

    let delbtn=document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("Delete");

    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value=""; //to reset the task
});

ul.addEventListener("click", function(event)
 {
    if(event.target.nodeName == "BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log("Delete");
    }
       

});

// let delbtns=document.querySelectorAll(".delete");
// for(delbtn of delbtns)
// {
//     delbtns=addEventListener("click" , function() {
//         let par=this.parentElement;
//         console.log("Task Deleted");
//         par.remove(); //this will only work for existing element not for added element during runtime.
//     });//for that we will be using event delegation,which will be applied for parent element,in ths case we will apply to ul.
// }
