var numberOfDrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
         switch(buttonInnerHTML) {
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "s":       
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break; 
            case "j":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case "k":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case "l":
                var kickBass = new Audio("sounds/kick-bass.mp3");
                kickBass.play();
                break;
            default: console.log(buttonInnerHTML);
        }
         //Rajoutons une animation lorsque nous cliquons sur un des 7 buttons:
        buttonAnimation(buttonInnerHTML);
    });
   

}

// On veut pouvoir entrendre les instruments juste en 
// appuyant sur lkes touche du clavier
//On va donc ici ajouter un listener ont document entier 
// au lieu de chaque touche du clavier:
//Evenement à écouter s'appel keydown pour signifiant touche pressée ou touche  vers le bas
//On va rajouter à listener une function qui va reagir à l'evenement
//Aussi on a l'objet event qui est crééer lorsuqe le navigateur à 
//détecté l'evenement et celui ci va nous permettre de savoir quelle touche a été pressée
//On va donc le rajouter en paramettre a notre function
document.addEventListener("keydown",function(event){
    //On va creer ici une variable qui stock uniquement info touche passé
    var key =event.key;
    switch(key){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":       
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break; 
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        default: console.log(key);
    }
    //Rajoutons une animation lorsque nous pressons une touche:
    buttonAnimation(key);

})




function buttonAnimation(curentKey){
    var activeButton=document.querySelector("."+curentKey).classList.add("pressed");
    //On va suppriler l'animation apres  100ms
    setTimeout(function(){
        var disiableButton=document.querySelector("."+curentKey).classList.remove("pressed");
    },100);
}