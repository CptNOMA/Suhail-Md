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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_33_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNixcbiAgICAgICAgODgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDMxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAzMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjcsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDgyLFxuICAgICAgICAxODIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjI5LFxuICAgICAgICA2NixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMCxcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjE0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDksXG4gICAgICAgIDQzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NixcbiAgICAgICAgNzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzksXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDk3LFxuICAgICAgICA5MyxcbiAgICAgICAgOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjEwLFxuICAgICAgICA5NixcbiAgICAgICAgMTk3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTMxLFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjksXG4gICAgICAgIDExNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDg0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDksXG4gICAgICAgIDgyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzYsXG4gICAgICAgIDQ5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDksXG4gICAgICAgIDM3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU2LFxuICAgICAgICA2LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDcyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjE4LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OSxcbiAgICAgICAgODMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTI5LFxuICAgICAgICA0MixcbiAgICAgICAgMjgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDgyLFxuICAgICAgICA3NCxcbiAgICAgICAgODYsXG4gICAgICAgIDU4LFxuICAgICAgICA2NixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTzVjMEVBYjgwdXQvamdoY1kzZEVFMHJnUDMzSXVnUThZNWVjd1kzb2dKQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTY1NzgxNDU5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGQUZFODVBQjNEQTZBRDUyNzYyNDQ3NzYwN0M3NTRFMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIxMDg3ODFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiN3lxd2wwaVhRU1d5aHpJUVBtM1JaQVwiLFxuICBcInBob25lSWRcIjogXCI4N2I3ZTljNC1mOTcxLTQxY2MtYjY3Ni0yODU5MjcyNjUxMzBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOSxcbiAgICAgIDEsXG4gICAgICAxNTUsXG4gICAgICA2MyxcbiAgICAgIDEyMCxcbiAgICAgIDE4NSxcbiAgICAgIDE2NSxcbiAgICAgIDEwMCxcbiAgICAgIDEyMixcbiAgICAgIDIyMixcbiAgICAgIDI0MCxcbiAgICAgIDI0NyxcbiAgICAgIDc1LFxuICAgICAgMjAzLFxuICAgICAgMjI2LFxuICAgICAgMjM0LFxuICAgICAgMjM0LFxuICAgICAgMTMsXG4gICAgICAyLFxuICAgICAgMTM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNSxcbiAgICAgIDUzLFxuICAgICAgNDMsXG4gICAgICAyNixcbiAgICAgIDIwMyxcbiAgICAgIDExMyxcbiAgICAgIDM1LFxuICAgICAgNTcsXG4gICAgICAxODYsXG4gICAgICAxNyxcbiAgICAgIDIxOCxcbiAgICAgIDI0OSxcbiAgICAgIDE4NCxcbiAgICAgIDE2MCxcbiAgICAgIDEyNSxcbiAgICAgIDIzOCxcbiAgICAgIDQ2LFxuICAgICAgMjUxLFxuICAgICAgNTQsXG4gICAgICAyNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOEQxOUI0QUpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNjU3ODE0NTk6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTc0NjAzNzA4MTcwMzczOjhAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTk9NQeKbj++4j/Cfj4BcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJK3kxcG9FRU9hV2xiVUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImY2UGphYmFQRkwwa2J0YUEwMnVQL1pmVHRDNzc1eThLN3JNTlRZWVdmRUk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWDdXcGkyZ0tXK3ZjZVArcllTbHdtcFVNcUlpUnpZSk5sOERDTXBkdFBRWk5adlJ5SjlpbTBWMlFzUUJXdXpicmFlNGY5SXhCTE1lcEdnR1dRS3NzQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicVkrNmd4WlBGbElsZkFEN2pMNXc1Y2Z6b0NNMjg5a3NOVnk3M1hQdlVkRnBPYkp6cUl4eW1VeDdPVVRmUDRKZ2h3V25zK2lRZG9KSkQ2ekFVR1MxQUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE2NTc4MTQ1OTo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMTA4Nzc3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQmdnXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCZ2cuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI5VTAwaUpEZ1lBZkllYllvZnFQZi9MVU9qNzRJN3JkWWxnOU1Jc3U3NUxJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExMjk2ODMyMTUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
