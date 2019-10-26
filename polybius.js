function decodePolybius(input) {
    var firstAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var secondAlphabet = 'abcdefghjklmnopqrstuvwxyz'.split('');
    var polybiusSquareWithLetterI = initializePolybiusSquare(firstAlphabet);
    var polybiusSquareWithLetterJ = initializePolybiusSquare(secondAlphabet);
    var firstPotentialDecode = '';
    var secondPotentialDecode = '';
    var separatedInput = input.match(/..?/g);
    for (var _i = 0, separatedInput_1 = separatedInput; _i < separatedInput_1.length; _i++) {
        var grouping = separatedInput_1[_i];
        var _a = grouping.split(''), i = _a[0], j = _a[1];
        firstPotentialDecode += polybiusSquareWithLetterI[parseInt(i) - 1][parseInt(j) - 1];
        secondPotentialDecode += polybiusSquareWithLetterJ[parseInt(i) - 1][parseInt(j) - 1];
    }
    return [firstPotentialDecode, secondPotentialDecode];
}
function initializePolybiusSquare(alphabet) {
    var polybiusSquare = [[]];
    var index = 0;
    for (var i = 0; i < 5; i++) {
        polybiusSquare[i] = [];
        for (var j = 0; j < 5; j++) {
            polybiusSquare[i][j] = alphabet[index];
            index++;
        }
    }
    return polybiusSquare;
}
var decode = decodePolybius('1114153115');
console.log(decode);
