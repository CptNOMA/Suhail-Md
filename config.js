const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_33_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjIwLFxuICAgICAgICA3LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzcsXG4gICAgICAgIDMzLFxuICAgICAgICAxMCxcbiAgICAgICAgODYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI2LFxuICAgICAgICA1MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDY2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDM5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwLFxuICAgICAgICAzMCxcbiAgICAgICAgOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDQ2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDM4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTczLFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICA0OSxcbiAgICAgICAgODIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjksXG4gICAgICAgIDIxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNyxcbiAgICAgICAgMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzMsXG4gICAgICAgIDgxLFxuICAgICAgICA5MCxcbiAgICAgICAgMjQwLFxuICAgICAgICA1NixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODksXG4gICAgICAgIDYxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDMxLFxuICAgICAgICAyMixcbiAgICAgICAgMjIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDksXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgODUsXG4gICAgICAgIDI1LFxuICAgICAgICA2NixcbiAgICAgICAgMzAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDksXG4gICAgICAgIDI5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTYyLFxuICAgICAgICA4MixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODIsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODUsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA0LFxuICAgICAgICA0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyLFxuICAgICAgICA4MixcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzksXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDUzLFxuICAgICAgICA3MixcbiAgICAgICAgMTg5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTIwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjAxLFxuICAgICAgICA4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA0LFxuICAgICAgICA2NixcbiAgICAgICAgMjEyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUTBhUmhoWjI2VURiQzF0N0xoY0oxdkt2c1lEQTVxL0ZvUVR1dDByc3pjND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTY1NzgxNDU5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3QkNEMDE4MTg4REYzNTE2M0IwOEE1MEExMzczRDZFMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIxNzM2MjJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwia20xUkpURXJUY0trbWZCZ0U5RHFlQVwiLFxuICBcInBob25lSWRcIjogXCIzZjA2ZDUyNS1mZmUxLTRkY2EtOTQ0Ni0yMzdhZjNiZmY3ZjRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUyLFxuICAgICAgMTM0LFxuICAgICAgODgsXG4gICAgICAyMjksXG4gICAgICAxMjMsXG4gICAgICAyMzcsXG4gICAgICA1MSxcbiAgICAgIDUxLFxuICAgICAgMTk4LFxuICAgICAgNTksXG4gICAgICAyMixcbiAgICAgIDEyOSxcbiAgICAgIDU4LFxuICAgICAgMTAxLFxuICAgICAgMTA1LFxuICAgICAgMTE4LFxuICAgICAgMjUwLFxuICAgICAgMzIsXG4gICAgICAxNzAsXG4gICAgICAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY4LFxuICAgICAgMjcsXG4gICAgICAxNzAsXG4gICAgICAxMTYsXG4gICAgICAyNixcbiAgICAgIDc1LFxuICAgICAgMTgyLFxuICAgICAgMjI5LFxuICAgICAgMTQyLFxuICAgICAgMTUxLFxuICAgICAgMTY4LFxuICAgICAgMjI5LFxuICAgICAgMTA0LFxuICAgICAgMTM1LFxuICAgICAgMjMzLFxuICAgICAgMjAyLFxuICAgICAgNzIsXG4gICAgICAyNyxcbiAgICAgIDQ3LFxuICAgICAgMTgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjRGM1NCMllTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTY1NzgxNDU5OjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzQ2MDM3MDgxNzAzNzM6MTdAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTk9NQeKbj++4j/Cfj4BcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKV3kxcG9FRUs2Um1iVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImY2UGphYmFQRkwwa2J0YUEwMnVQL1pmVHRDNzc1eThLN3JNTlRZWVdmRUk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRnlyRVNmU0NWcHNpNXFPeisySllIUmEySzg2SkE5OGR3UWhKT3p2c2tCNjliRXBFaDdOUVUyVGhHZlQvdkpvTWdBTG0zbEtYNjFMQzhFUlBzd2J6RHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiN3AyTmlqR2pkTFJNSmxveGYvVmUxamlPS0lkRWh6TjYrbnc2UG9NaWlOZFhGbEQwS1hLdjFFV0FRODlCSDhXTXBJVWl5SUpEaDloTFhUdENHcHpKRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE2NTc4MTQ1OToxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjE3MzYxOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJnZ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQmdnLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOVUwMGlKRGdZQWZJZWJZb2ZxUGYvTFVPajc0STdyZFlsZzlNSXN1NzVMST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTI5NjgzMjE1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
