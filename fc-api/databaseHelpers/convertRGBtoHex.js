

const convertRGBToHex = (rgbString) => {
    let finalString = "#"
    let index = rgbString.indexOf('(') + 1
    let split = rgbString.slice(index, -1).split(',')
    
    for(let number of split){
        let tempStr = parseInt(number).toString(16)
        tempStr = tempStr === "0" ?  "00" : tempStr
        finalString = finalString + tempStr
    }

    return finalString
}


module.exports = {
    convertRGBToHex
}