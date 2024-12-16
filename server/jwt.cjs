const crypto = require("crypto");

// Generate a random 256-bit (32-byte) secret
const jwtSecret = crypto.randomBytes(32).toString("hex");

console.log(jwtSecret);
