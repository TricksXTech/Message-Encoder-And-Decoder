/*CMD
  command: /decP
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Decode
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(chat.chat_type!="private"){ return }
var url = encodeURI("https://v1-api.txt-dev.tk/ead/decode/?dec="+message+"")
HTTP.get({
url:url,
success:"/onDecP"
})
