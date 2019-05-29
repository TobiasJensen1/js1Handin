require('crypto').randomBytes(SIZE, function(err, buffer) {
    let secureHex = buffer.toString('hex');

    console.log(secureHex);
});
