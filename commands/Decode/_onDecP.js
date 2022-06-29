/*CMD
  command: /onDecP
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Decode
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(chat.chat_type!="private"){ return }
var j=JSON.parse(content)
var deco=j.Decoded
var enco=j.Encoded
Bot.sendMessage("*✅ Done* `"+enco+"` *Is Decoded As* `"+deco+"`",{is_reply:true});
