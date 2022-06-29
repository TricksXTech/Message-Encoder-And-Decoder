/*CMD
  command: /onDecP2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Decode
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(chat.chat_type!="private"){
var j=JSON.parse(content)
var deco=j.Decoded
var enco=j.Encoded
Bot.sendMessage("*✅ Done* `"+enco+"` *Is Decoded As* `"+deco+"`",{is_reply:true});
return }
