// displaying the first block of questions

document.getElementsByClassName("container")[0].style.display = "block";

// Defining the next function

function next(id) {
    document.getElementsByClassName("container")[id-1].style.display = "none";
    document.getElementsByClassName("container")[id].style.display = "block";
}

// Function for previous button
function previous(id) {
    document.getElementsByClassName("container")[id].style.display = "none";
    document.getElementsByClassName("container")[id-1].style.display = "block";
}


// Getting the final result

function result() {
    var score = 0;
    if (document.getElementById("correct1").checked) {
        score++;
    }
    if (document.getElementById("correct2").checked) {
        score++;
    }
    if (document.getElementById("correct3").checked) {
        score++;
    }
    if (document.getElementById("correct4").checked) {
        score++;
    }
    alert('your score is: '+score);
}

