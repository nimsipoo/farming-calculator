var number_1 = Number(document.getElementById("no").value);


function calculate() {
    number_1 = Number(document.getElementById("no").value);

    var area = number_1 * number_1;
    var perimeter = 4 * number_1;

    document.getElementById("lblArea").innerHTML = area;

    document.getElementById("lblPerimeter").innerHTML = perimeter;


}
