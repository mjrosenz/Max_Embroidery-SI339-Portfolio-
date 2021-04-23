document.querySelector("#img1").addEventListener
("click", function() {
    if (document.querySelector("#drop1").innerHTML.style.display == "none") {
    document.querySelector("#drop1").innerHTML.style.display = "inherit"
    }
    else{
    document.querySelector("#drop1").innerHTML.style.display = "none"
    }
 });