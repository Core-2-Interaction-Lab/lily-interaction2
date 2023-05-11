let img = [];
img[0] = "October.jpg";
img[1] = "Oct3.jpg";
img[2] = "Sept3.jpg";


let i = 0

let container = document.querySelector(".container");

container.addEventListener("click", function(){
    let phone = document.querySelector(".smaller");

    if (i>1){
        i = 0;
        phone.src = img[i];
    } else {
        phone.src = img[i++];
    }

})