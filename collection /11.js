let img = [];
img[0] = "Mar1.jpg";
img[1] = "Mar2 2.jpg";
img[2] = "Mar4.jpg";
img[3] = "Mar2 1.jpg";


let i = 0

let container = document.querySelector(".container");

container.addEventListener("click", function(){
    let phone = document.querySelector(".smaller");

    if (i>3){
        i = 0;
        phone.src = img[i];
    } else {
        phone.src = img[i++];
    }

})