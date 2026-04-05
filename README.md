# 🛡️ BSS BUSINESS GROUP | v1.0.0
### DEVELOPER: Taiwo Fashola (+234 811 842 8191)
### OWNER: BSS Market Group (Master Node)

---

## 🌐 PROJECT ENDPOINTS
| Service | Environment | URL Address |
| :--- | :--- | :--- |
| **Frontend** | Vercel (Live) | bss-business-group.vercel.app |
| **Backend** | Gemini Cloud | https://generativelanguage.googleapis.com/v1beta |
| **Database** | BSD Gemini | bss_bizgroup/prompt/v1.0.0 |

---

## 🛠️ CORE ARCHITECTURE
- **Simulation:** High-fidelity marketplace with WhatsApp-style group chat.
- **Sync Protocol:** POST_TRANSACTION Automated Sync.
- **Authentication:** STRICT_DB_LOOKUP (User ID/Username validation).
- **Security:** GOVT_PORTAL_INTEGRATED (NIN/Voters Card auto-verification).

## 🚀 ENVIRONMENT SETUP (Vercel)
To connect this repository to the **BSS Cloud**, ensure the following variables are set in your Vercel Dashboard:

1. `GOOGLE_GENERATIVE_AI_API_KEY`: [AIzaSyArwXobFT7hzfYcK_UODKfmg-oexDZYXm4]
2. `NEXT_PUBLIC_BSS_CLOUD_URL`: https://api.bss-bizgroup.com/v1.0.0
3. `BSS_DATABASE_NAME`: bss_bizgroup

---

## 📊 ACCESS HIERARCHY
- 🔴 **ADMIN:** Full system control & seller verification.
- 🟡 **MODERATOR:** Group oversight & transaction monitoring.
- 🟢 **VERIFIED SELLER:** Posting Adverts & Stock Management.
- 🔵 **REGISTERED BUYER:** Product requests & Private Messaging.
- ⚪ **GUEST:** Read-only (Limit: 5 interactions).

---

## 📂 PROJECT FOLDER STRUCTURE
- `/prompt`: Contains System Prompt v1.0.0 logic.
- `/src/api`: Connection logic for Google Gemini v1beta.
- `/src/components`: Number-driven menu UI elements.

---
**System Status:** PROMO MODE ACTIVE (Registration Fees: OFF)
**Last Updated:** 2026-04-05
