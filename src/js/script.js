let index = 0,
    interval = 1000;
let globalIndex = 0,
    last = {x:0,y:0}
const images = document.querySelectorAll(".image");
const infoBlock = document.querySelector(".info");
const activate = (image,x,y,index) =>{
    last = {x,y}
    image.style.left = `${x*0.6}px`
    image.style.top = `${y*2}px`
    image.dataset.status = "active";
    image.style.zIndex = index;

}
const distanceFromLast = (x,y)=>{
    console.log(Math.hypot(x- last.x , y - last.y))
    return Math.hypot(x- last.x , y - last.y)
}
infoBlock.onmouseover = e =>{
    if(distanceFromLast(e.clientX,e.clientY)>50){
        console.log(e)
        const lead  = images[globalIndex % (images.length-1)];
        activate(lead,e.clientX,e.clientY,globalIndex);
        globalIndex++;

    }

}
const rand=(min,max)=>
    Math.floor(Math.random() * (max - min + 1)) + min;
for(const star of document.getElementsByClassName("magic-star")){
    setInterval(()=>{
        star.style.setProperty("--star-left",`${rand(-20,100)}%`);
        star.style.setProperty("--star-top",`${rand(-20,100)}%`);
        star.style.setProperty("--size",`${rand(20,40)}px`)
        star.style.animation = "none";
        star.offsetHeight;
        star.style.animation = "";
    },interval)
}
const button = document.querySelector(".button");
const buttonClose = document.querySelector(".button-close");
const modal = document.querySelector(".modal")
button.onclick=e=>{
    modal.style.display = "block";
}
buttonClose.onclick=e=>{
    modal.style.display ="none";
}