const btns = document.querySelectorAll(".btn");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector('.close');
const overlay = document.querySelector(".overlay");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function (){
        modal.style.opacity = 1;
        modal.style.visibility = "visible"

        overlay.style.opacity = 1;
        overlay.style.visibility = "visible"
    })
}

overlay.addEventListener('click', function (){
        modal.style.opacity = 0;
        modal.style.visibility = "hidden"

        overlay.style.opacity = 0;
        overlay.style.visibility = "hidden"
})


closeBtn.addEventListener('click', function (){
    modal.style.opacity = 0;
    modal.style.visibility = "hidden"

    overlay.style.opacity = 0;
    overlay.style.visibility = "hidden"
})
