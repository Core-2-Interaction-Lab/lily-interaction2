let img = [];
img[0] = "Feb.jpg";
img[1] = "Feb2.jpg";
img[2] = "Feb3.jpg";


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