/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: /start
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(chat.chat_type!="private"){ return }
var button="🔒 Encode,🔓 Decode"
var msg="💗 This Is Message Encoder And Decoder Bot\n\n🔮 Made By : [TricksXTech](https://t.me/TXTsProjects)"
Bot.sendKeyboard(button,msg,{is_reply:true,disable_web_page_preview:true});
