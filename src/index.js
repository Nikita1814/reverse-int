module.exports = function reverse(n) {
    let nStr = Math.abs(n).toString();
    let reverseArr = [];
    for (i = nStr.length; i >= 0; i--) {
        reverseArr.push(nStr[i]);
    }
    return +reverseArr.join("");
};

