/*eslint-disable */
/*jslint devel: true */

/*Beat Saber Game */

/* Boolean om aan te geven of blokje kapot is */

var destroyedOne = 'false';
var destroyedTwo = 'false';
var destroyedThree = 'false';

/* Game Done Tekst */

var paragraph = document.createElement("p");
var node = document.createTextNode("Good Job!");
var body = document.getElementById("bodyClass");

/* Class toevoegen om blok te deleten en te checken of spel klaar is, als alle blokjes kapot zijn ook cursor terug naar normaal */

function addClassesOne() {
    "use strict";
    if (destroyedOne === 'false' && document.getElementById("bodyClass").classList.contains("saberGrabbed")) {
        document.getElementById("blockEen").classList.add("blockOneDestroy");
        document.getElementById("blockTwee").classList.add("blockTwoDestroy");
        destroyedOne = 'true';
        if (destroyedOne === 'true' && destroyedTwo === 'true' && destroyedThree === 'true') {
            document.getElementById("bodyClass").classList.remove("saberGrabbed");
            document.getElementById("saberImage").classList.add("gameDone");
            paragraph.appendChild(node);
            body.appendChild(paragraph);
        }
    }
    
}
function addClassesTwo() {
    "use strict";
    if (destroyedTwo === 'false' && document.getElementById("bodyClass").classList.contains("saberGrabbed")) {
        document.getElementById("blockThree").classList.add("blockThreeDestroy");
        document.getElementById("blockFour").classList.add("blockFourDestroy");
        destroyedTwo = 'true';
        if (destroyedOne === 'true' && destroyedTwo === 'true' && destroyedThree === 'true') {
            document.getElementById("bodyClass").classList.remove("saberGrabbed");
            document.getElementById("saberImage").classList.add("gameDone");
            paragraph.appendChild(node);
            body.appendChild(paragraph);
        }
    }
       
}
function addClassesThree() {
    "use strict";
    if (destroyedThree === 'false' && document.getElementById("bodyClass").classList.contains("saberGrabbed")) { document.getElementById("blockFive").classList.add("blockFiveDestroy");
        document.getElementById("blockSix").classList.add("blockSixDestroy");
        destroyedThree = 'true';
        if (destroyedOne === 'true' && destroyedTwo === 'true' && destroyedThree === 'true') {
            document.getElementById("bodyClass").classList.remove("saberGrabbed");
            document.getElementById("saberImage").classList.add("gameDone");
            paragraph.appendChild(node);
            body.appendChild(paragraph);
        }
                              }
}

/* Cursor aanpassen naar saber */

function saberGrabbing() {
    "use strict";
    if (destroyedOne === 'false' && destroyedTwo === 'false' && destroyedThree === 'false') {
        document.getElementById("bodyClass").classList.add("saberGrabbed");
        document.getElementById("grabText").classList.remove("animation");
        
    }
    
}

/* Alle event listeners*/

document.getElementById("blockTwee").addEventListener("mouseover", addClassesOne);
document.getElementById("blockEen").addEventListener("mouseover", addClassesOne);
document.getElementById("blockThree").addEventListener("mouseover", addClassesTwo);
document.getElementById("blockFour").addEventListener("mouseover", addClassesTwo);
document.getElementById("blockFive").addEventListener("mouseover", addClassesThree);
document.getElementById("blockSix").addEventListener("mouseover", addClassesThree);
document.getElementById("saberImage").addEventListener("mouseover", saberGrabbing);


