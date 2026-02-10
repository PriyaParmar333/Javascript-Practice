// let smallImg = document.getElementsByClassName("oldImg");
// for(let i=0; i<smallImg.length; i++)
// {
//     smallImg[i].src="assets/spiderman_img.png";
//     console.log(`Value of image no. ${i} is changed`);
// }

// to change the color of all the links inside the box class for achors then the code is 
let link=document.querySelectorAll(".box a");
for(let i=0;i<link.length;i++)
{
    link[i].style.color="purple";
}