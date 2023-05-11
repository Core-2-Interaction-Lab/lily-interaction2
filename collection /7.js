let img = [];
img[0] = "Nov.jpg";
img[1] = "Nov2.jpg";
img[2] = "Nov3.jpg";


let i = 0

let container = document.querySelector(".container");

container.addEventListener("click", function(){
    let phone = document.querySelector(".smaller");

    if (i>2){
        i = 0;
        phone.src = img[i];
    } else {
        phone.src = img[i++];
    }

})