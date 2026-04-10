const functions = require('@google-cloud/functions-framework');

// Your secure token from @BotFather
const TELEGRAM_TOKEN = '8611189372:AAG0wevn9brDwRO5us9i83HotA0MuoTuRFU'; 
const TELEGRAM_API = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

functions.http('bss-bizgroup-api', async (req, res) => {
  // 1. Ensure the request is coming from Telegram (POST)
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const message = req.body.message;
  
  // Ignore updates that aren't text messages
  if (!message || !message.text) {
    return res.status(200).send('OK');
  }

  const chatId = message.chat.id;
  const text = message.text.trim();
  let replyText = "";

  // 2. Your BSS Business Simulation Logic
  if (text === "1") {
    replyText = "🛠️ *BSS REGISTRATION*\n\nWelcome! Please provide your *Full Name* and *Business Category* to begin the onboarding process.";
  } else if (text === "2") {
    replyText = "🛒 *LIVE MARKETPLACE*\n\n1. Healthy Broilers (₦4,500)\n2. Layers (₦3,200)\n3. Feed (₦12,000)\n\nReply with an item number to view details.";
  } else if (text === "3") {
    replyText = "📊 *SYSTEM DIAGNOSTICS*\n\n*Node ID:* BSS-ROOT-001\n*Cloud Status:* Active\n*Database:* Firebase-Sync-Enabled";
  } else {
    // Default Main Menu
    replyText = "Welcome to *BSS Business Group*.\n\nPlease select an option:\n\n1️⃣ Register for Student Office\n2️⃣ View Marketplace\n3️⃣ System Status";
  }

  // 3. Send the reply back to the user's Telegram chat
  try {
    await fetch(TELEGRAM_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: replyText,
        parse_mode: 'Markdown'
      })
    });
  } catch (error) {
    console.error('Telegram API Error:', error);
  }

  // Always tell Telegram you received the message
  res.status(200).send('OK');
});
