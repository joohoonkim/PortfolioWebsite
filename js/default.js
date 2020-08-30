function openExperience(cardName) {
    var i;
    var x = document.getElementsByClassName("experience-tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(cardName).style.display = "block";

    checkOverflow();
}

function openProject(cardName) {
    var i;
    var x = document.getElementsByClassName("project-tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(cardName).style.display = "block";

    checkOverflow();
}

function checkOverflow(){
    if (document.getElementById("intro-section").offsetHeight < document.getElementById("intro-section").scrollHeight ||
    document.getElementById("intro-section").offsetWidth < document.getElementById("intro-section").scrollWidth){
        document.getElementById("intro-section").setAttribute("style","height:100%");
    } else {
        document.getElementById("intro-section").setAttribute("style","height:100vh");
    }

    if (document.getElementById("exp-section").offsetHeight < document.getElementById("exp-section").scrollHeight ||
    document.getElementById("exp-section").offsetWidth < document.getElementById("exp-section").scrollWidth){
        document.getElementById("exp-section").setAttribute("style","height:100%");
    } else {
        document.getElementById("exp-section").setAttribute("style","height:100vh");
    }
    
    if (document.getElementById("proj-section").offsetHeight < document.getElementById("proj-section").scrollHeight ||
    document.getElementById("proj-section").offsetWidth < document.getElementById("proj-section").scrollWidth){
        document.getElementById("proj-section").setAttribute("style","height:100%");
    } else {
        document.getElementById("proj-section").setAttribute("style","height:100vh");
    }
}

window.onresize = checkOverflow;
checkOverflow();