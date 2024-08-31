module.exports = function toReadable(number) {
    const belowTwenty = [
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 
        'seventeen', 'eighteen', 'nineteen'
    ];
    
    const belowHundred = [
        '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];
    
    const scales = ['hundred', 'thousand', 'million', 'billion'];

    if (number === 0) {
        return 'zero';
    }

    function funny(number) {
        if (number < 20) {
            return belowTwenty[number];
        } else if (number < 100) {
            return belowHundred[Math.floor(number / 10)] + 
                   (number % 10 === 0 ? '' : ' ' + belowTwenty[number % 10]);
        } else if (number < 1000) {
            return belowTwenty[Math.floor(number / 100)] + ' ' + scales[0] + 
                   (number % 100 === 0 ? '' : ' ' + funny(number % 100));
        } else if (number < 1e6) {
            return funny(Math.floor(number / 1000)) + ' ' + scales[1] + 
                   (number % 1000 === 0 ? '' : ' ' + funny(number % 1000));
        } else if (number < 1e9) {
            return funny(Math.floor(number / 1e6)) + ' ' + scales[2] + 
                   (number % 1e6 === 0 ? '' : ' ' + funny(number % 1e6));
        } else if (number < 1e12) {
            return funny(Math.floor(number / 1e9)) + ' ' + scales[3] + 
                   (number % 1e9 === 0 ? '' : ' ' + funny(number % 1e9));
        }
    }

    return funny(number);
}
