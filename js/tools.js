function isGameFinished() {
    for (var i = 0; i < 8; i++) {
        if (parseInt($("#" + i).attr("ind")) != i) {
            return false;
        }
    }
    return true;
}
function getRandomArray() {
    var arr = [];
    while (arr.length < 8) {
        var randomnumber = Math.floor((Math.random() * 8));
        var found = false;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == randomnumber) {
                found = true;
                break
            }
        }
        if (!found)arr[arr.length] = randomnumber;

    }
    return arr;
}

function getCanvas(id) {
    var canvas = $("#" + id)[0];
    if (canvas.getContext) {
        return canvas.getContext("2d");
    }
    return undefined;
}