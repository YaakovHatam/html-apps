function convertToC(fTempVal) {
    var cTempVal = (fTempVal - 32) * (5 / 9);
    return cTempVal;
}

function convertToF(cTempVal) {
    var fTempVal = (cTempVal * (9 / 5)) + 32;;
    return fTempVal;
}
