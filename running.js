let imageRefs = [
    "images/running1.PNG",
    "images/running2.jpg",
    "images/running3.JPEG",
    "images/running4.JPEG",
    "images/running5.PNG",
];

let changeImageButton = document.getElementById("change_image_button");

let currentImageIndex = 0;

changeImageButton.onclick = function() {
    currentImageIndex++;
    if(currentImageIndex >= imageRefs.length){
        currentImageIndex = 0;
    }
    document.getElementById("runningImages").src = imageRefs[currentImageIndex];
    
}



