
function getRandomCode() {
    var codes = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "1234567890"];
    var code = "";
    for (var i = 0; i < 10; i++) {
        code += codes[Math.floor(Math.random() * codes.length)];
    }
    return code;
}

getRandomCode();