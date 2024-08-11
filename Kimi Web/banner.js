function myFunction() {
    var x = document.getElementById("fircol");
    if (x.className === "topcol") {
        x.className += " responsive";
    } else {
        x.className = "topcol";
    }
} 