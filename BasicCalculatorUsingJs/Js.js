function funPlus() {
    var val1Str = document.getElementById("a").value;
    var val2Str = document.getElementById("b").value;
    var val1 = parseFloat(val1Str);
    var val2 = parseFloat(val2Str);
    var result = val1 + val2;
    document.getElementById("output").innerText = val1Str.concat(" + ", val2Str, " = ", result.toString());
}

function funMul() {
    var val1Str = document.getElementById("a").value;
    var val2Str = document.getElementById("b").value;
    var val1 = parseFloat(val1Str);
    var val2 = parseFloat(val2Str);
    var result = val1 * val2;
    document.getElementById("output").innerText = val1Str.concat(" * ", val2Str, " = ", result.toString());
}

function funDiv() {
    var val1Str = document.getElementById("a").value;
    var val2Str = document.getElementById("b").value;
    var val1 = parseFloat(val1Str);
    var val2 = parseFloat(val2Str);
    var result = val1 / val2;
    document.getElementById("output").innerText = val1Str.concat(" / ", val2Str, " = ", result.toString());
}

//following method clears the input and output fields
function funClear() {
    document.getElementById("output").innerText = "";
    document.getElementById("a").innerText = "";
    document.getElementById("b").innerText = "";
}