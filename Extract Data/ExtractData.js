let form=document.querySelector("form");
form.addEventListener("submit" , function(event) {
    event.preventDefault();
    let user=document.querySelector("#user");
    let pass=document.querySelector("#pass");
    console.log("Username:",user.value); //this.elements[0]
    console.log("Password:",pass.value); //this.elements[1]

    //here this means form indirectly
    //this.elements==form.elements[0]

    alert(`Hi ${user.value}, Your Password is set to ${pass.value}`);
})
