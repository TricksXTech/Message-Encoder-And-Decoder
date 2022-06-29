/*CMD
  command: 🔓 Decode
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Decode
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(chat.chat_type!="private"){ return }
Bot.sendMessage("🔰 Enter Your Message To Decode");
Bot.runCommand("/decP",{is_reply:true});
