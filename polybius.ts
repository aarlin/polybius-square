import * as _ from 'lodash'

function decodePolybius(input: string) {
    const alphabet = 'abcdefghiklmnopqrstuvwxyz'.split('');
    let polybiusSquare: string[][] = initializePolybiusSquare(alphabet)
    
    let firstPotentialDecode = ''

    let separatedInput = input.match(/..?/g)
    for(let grouping of separatedInput) {
        let [i, j] = grouping.split('')
        firstPotentialDecode += polybiusSquare[parseInt(i) - 1][parseInt(j) - 1]
    }

    return _.uniq(_.flatten([firstPotentialDecode, permutateDecode(firstPotentialDecode)]))

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

function permutateDecode(output: string) {
    let characters = output.split('');
    let permutations = [output]
    for(let index = 0; index < characters.length; index++) {
        let newOutput = ''
        switch (characters[index]) {
            case 'i':
                newOutput = output.substr(0, index) + 'j' + output.substring(index + 1)
                permutations.push(newOutput)
                break
            case 'j':
                newOutput = output.substr(0, index) + 'i' + output.substring(index + 1)
                permutations.push(newOutput)
                break
        }
    }
    return permutations
}

const decodedValue = decodePolybius('1114153115')
console.log(decodedValue)

const edgeCase = decodePolybius('24111325')
console.log(edgeCase)
