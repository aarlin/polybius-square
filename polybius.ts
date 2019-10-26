function decodePolybius(input: string) {
    const firstAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const secondAlphabet = 'abcdefghjklmnopqrstuvwxyz'.split('');
    let polybiusSquareWithLetterI: string[][] = initializePolybiusSquare(firstAlphabet)
    let polybiusSquareWithLetterJ: string[][] = initializePolybiusSquare(secondAlphabet)
    
    let firstPotentialDecode = ''
    let secondPotentialDecode = ''

    let separatedInput = input.match(/..?/g)
    for(let grouping of separatedInput) {
        let [i, j] = grouping.split('')
        firstPotentialDecode += polybiusSquareWithLetterI[parseInt(i) - 1][parseInt(j) - 1]
        secondPotentialDecode += polybiusSquareWithLetterJ[parseInt(i) - 1][parseInt(j) - 1]
    }

    return [firstPotentialDecode, secondPotentialDecode]

}

function initializePolybiusSquare(alphabet: string[]) {
    let polybiusSquare: string[][] = [[]];
    let index = 0;
    for(let i = 0; i < 5; i++) {
        polybiusSquare[i] = []
        for(let j = 0; j < 5; j++) {
            polybiusSquare[i][j] = alphabet[index]
            index++
        }
    }
    return polybiusSquare
}

const decodedValue = decodePolybius('1114153115')
console.log(decodedValue)
