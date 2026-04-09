const functions = require('@google-cloud/functions-framework');
const admin = require('firebase-admin');
const cors = require('cors')({ origin: true });

if (!admin.apps.length) { admin.initializeApp(); }
const db = admin.firestore();

functions.http('bss-bizgroup-api', (req, res) => {
  cors(req, res, async () => {
    const { method, path, body } = req;

    try {
      if (method === 'POST' && path === '/api/simulate') {
        const cmd = (body.command || "").toLowerCase();
        let reply = "";

        // Number-driven simulation logic
        if (cmd === "1") {
          reply = "🛠️ **REGISTRATION PORTAL**<br>Please type your Full Name to begin the onboarding process.";
        } else if (cmd === "2") {
          reply = "🛒 **LIVE MARKETPLACE**<br>Syncing listings... Broilers (₦4,500), Layers (₦3,200).";
        } else if (cmd === "3") {
          reply = "📊 **SYSTEM DIAGNOSTICS**<br>Uptime: 99.9%<br>Node: 480387776403<br>Database: Connected.";
        } else {
          reply = "Command not recognized. Select **1**, **2**, or **3**. Type **0** for Main Menu.";
        }
        
        return res.status(200).send({ reply });
      }
      res.status(404).send({ error: "Not Found" });
    } catch (e) {
      res.status(500).send({ reply: "⚠️ Internal Cloud Error. Check Firestore connectivity." });
    }
  });
});
