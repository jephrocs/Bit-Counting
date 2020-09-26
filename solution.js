var countBits = function (n) {
    let one = 0
    const bin = n.toString(2)
    for (var i = 0; i < bin.length; i++) {
        if (bin[i] == 1) one++
    } return one
};