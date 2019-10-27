"use strict";
exports.__esModule = true;
var _ = require("lodash");
function decodePolybius(input) {
    var alphabet = 'abcdefghiklmnopqrstuvwxyz'.split('');
    var polybiusSquare = initializePolybiusSquare(alphabet);
    var firstPotentialDecode = '';
    var separatedInput = input.match(/..?/g);
    for (var _i = 0, separatedInput_1 = separatedInput; _i < separatedInput_1.length; _i++) {
        var grouping = separatedInput_1[_i];
        var _a = grouping.split(''), i = _a[0], j = _a[1];
        firstPotentialDecode += polybiusSquare[parseInt(i) - 1][parseInt(j) - 1];
    }
    return _.uniq(_.flatten([firstPotentialDecode, permutateDecode(firstPotentialDecode)]));
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
function permutateDecode(output) {
    var characters = output.split('');
    var permutations = [output];
    for (var index = 0; index < characters.length; index++) {
        var newOutput = '';
        switch (characters[index]) {
            case 'i':
                newOutput = output.substr(0, index) + 'j' + output.substring(index + 1);
                permutations.push(newOutput);
                break;
            case 'j':
                newOutput = output.substr(0, index) + 'i' + output.substring(index + 1);
                permutations.push(newOutput);
                break;
        }
    }
    return permutations;
}
var decodedValue = decodePolybius('1114153115');
console.log(decodedValue);
var edgeCase = decodePolybius('24111325');
console.log(edgeCase);
