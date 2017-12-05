function makeLine(length) {
    var line = "";
    for (var j = 1; j <= 1; j++) {
        line += "* * * * *";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(length) {
    var triangle = "";
    for (var i = 1; i <= length; i++) {
        triangle += makeLine(i);
    }
    return triangle;
}

console.log(buildTriangle(5));