var myImages = document.querySelectorAll('img');
//button finden
var myButtonHide = document.querySelector('button#btnHide');
var myButtonShow = document.querySelector('button#btnShow');

//In der Funktion 
function imagesHide() {
//Durchlaufe das Array myImages mit einer Schleife 
    for (var i = 0; i < myImages.length; i++) {
        console.log(myImages[i]);//myImages[0]....myImages[1]....myImages[2]....
        myImages[i].classList.add('d-none');
    }
//Jedes Bild in diesem Array bekommt die Klasse "d-none"
//classList add() CSS Klasse "d-none"
}

function imagesShow() {
    for (var i = 0; i < myImages.length; i++) {
        myImages[i].classList.remove('d-none');
    }
}

//button klickbar und eine Funktion aufrufen
myButtonHide.onclick = imagesHide;
myButtonShow.onclick = imagesShow;