// No Idempotence
function notGood() {
    return Math.random();
}

notGood();

// Idempotence
Math.abs(Math.abs(-50))