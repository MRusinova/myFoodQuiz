// displaying the first block of questions

document.getElementsByClassName("container")[0].style.display = "block";

// Defining the next function

function next(id) {
    document.getElementsByClassName("container")[id-1].style.display = "none";
    document.getElementsByClassName("container")[id].style.display = "block";
}