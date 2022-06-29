/*CMD
  command: 🔒 Encode
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Encode
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(chat.chat_type!="private"){ return }
Bot.sendMessage("🔰 Enter Your Message To Encode");
Bot.runCommand("/encP");
