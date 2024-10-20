console.log("js added");
btnMore = document.getElementById("btn");
hiddenImages=document.querySelectorAll(".hidden");


btnMore.addEventListener('click',function(){
    btnMore.style.background="red";
    hiddenImages.forEach(images => {
        images.classList.remove(".hidden");
    });
})