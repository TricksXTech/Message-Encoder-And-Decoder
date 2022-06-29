/*CMD
  command: /onEncP
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Encode
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(chat.chat_type!="private"){ return }
var j=JSON.parse(content)
var enco=j.Encoded
var deco=j.Decoded
Bot.sendMessage("*✅ Done* `"+deco+"` *Is Encoded As* `"+enco+"`",{is_reply:true});
