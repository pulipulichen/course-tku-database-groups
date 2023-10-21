const crypto = require('crypto');

function calcMD5Hash(input) {    

    // Create a new MD5 hash object
    const md5Hash = crypto.createHash('md5');

    // Update the hash with data to be hashed
    md5Hash.update(input, 'utf8');

    // Calculate the MD5 hash as a hexadecimal string
    const md5Hex = md5Hash.digest('hex');
    // console.log(md5Hex)
    // const numericValue = parseInt(md5Hex, 16);
    // console.log(numericValue)

    return md5Hex
}

function calcMD5HashNumber(md5Hash) {
    // Take the first 8 characters of the hash (or adjust as needed)
    const substring = md5Hash.substring(0, 8);

    // Convert the substring to an integer
    const intValue = parseInt(substring, 16);

    // Get a number between 0 and 9
    // const result = intValue % 10;
    return intValue + ''
}

function hashPW(input) {
    // var lenHalf = Math.round(input.length / 2)

    // var part1 = input.slice(0, lenHalf)
    // var part1Hash = calcMD5Hash(part1)

    // var part2 = input.slice(lenHalf)
    // var part2Hash = calcMD5Hash(part2)

    // return part1Hash.slice(0, 4) + part2Hash.slice(0, 4)

    var md5 = calcMD5HashNumber(calcMD5Hash(input))
    // console.log({md5}) //
    
    var output = ''
    var inputLen = input.length
    var md5len = md5.length
    for (var i = 0; i < 8; i++) {
        var pos = ((i+1) * inputLen) % md5len
        var char = md5[pos]

        if (i === 4) {
            output = output + '-'
        }
        output = output + char
    }

    return output
}

module.exports = hashPW