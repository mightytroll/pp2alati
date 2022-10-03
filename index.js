function arrayToString(a) {
    return a.join(" ");
}

function arrayLog(a) {
    process.stdout.write(arrayToString(a));
    process.stdout.write("\n");
}

function intToBin(n, p = 8) {
    if (n < 0) {
        n = Math.pow(2, p) + n;
    }

    return Math.abs(n).toString(2).padStart(p, "0");
}

function binLog(n, p = 8) {
    process.stdout.write(intToBin(n, p));
    process.stdout.write("\n");
}

module.exports = {
    arrayToString,
    arrayLog,
    intToBin,
    binLog
};

