const functions = require('@google-cloud/functions-framework');

const TELEGRAM_TOKEN = '8611189372:AAG0wevn9brDwRO5us9i83HotA0MuoTuRFU'; 
const TELEGRAM_API = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

// CHANGED: The name here MUST match the Cloud Function name
functions.http('bss_business_group', async (req, res) => {
  // ... rest of your code stays the same
