const functions = require('@google-cloud/functions-framework');

const TELEGRAM_TOKEN = '8611189372:AAG0wevn9brDwRO5us9i83HotA0MuoTuRFU'; 
const TELEGRAM_API = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

functions.http('bss-bizgroup-api', async (req, res) => {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  const message = req.body.message;
  if (!message || !message.text) return res.status(200).send('OK');

  const chatId = message.chat.id;
  const text = message.text.trim().toLowerCase();
  let replyText = "";

  // Logic for /start or any unknown text to show the menu
  if (text === "/start" || text === "menu" || text === "hi") {
    replyText = "Welcome to *BSS Business Group*.\n\nSelect an option:\n1️⃣ Register for Student Office\n2️⃣ View Marketplace\n3️⃣ System Status";
  } else if (text === "1") {
    replyText = "🛠️ *BSS REGISTRATION*\n\nPlease provide your *Full Name* and *Business Category* to begin.";
  } else if (text === "2") {
    replyText = "🛒 *LIVE MARKETPLACE*\n\n1. Healthy Broilers (₦4,500)\n2. Layers (₦3,200)\n\nReply with an item number to view details.";
  } else if (text === "3") {
    replyText = "📊 *SYSTEM DIAGNOSTICS*\n\n*Node ID:* BSS-ROOT-001\n*Status:* Active";
  } else {
    // If they type anything else, show the menu again so they aren't stuck
    replyText = "I didn't quite get that. Here is the menu:\n\n1️⃣ Register\n2️⃣ Market\n3️⃣ Status";
  }

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

  res.status(200).send('OK');
});
