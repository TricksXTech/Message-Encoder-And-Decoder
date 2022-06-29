/*CMD
  command: /encP
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Encode
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(chat.chat_type!="private"){ return }
var url = encodeURI("https://v1-api.txt-dev.tk/ead/encode/?enc="+message+"")
HTTP.get({
url:url,
success:"/onEncP"
})
