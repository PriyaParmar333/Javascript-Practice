let btn=document.querySelector("button");
let url="https://dog.ceo/api/breeds/image/random"

btn.addEventListener("click" , async () => {
    let link=await getImage();
    let image=document.querySelector("#result");
    image.setAttribute("src", link);
    console.log(link);
});

async function getImage() {
    try{
        let res=await axios.get(url);
        return res.data.message;
    }
    catch(e) {
        console.log("error: ",e);
        return "/";
    }
}