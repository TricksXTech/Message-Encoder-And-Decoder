/*CMD
  command: /encode
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Encode
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(chat.chat_type!="private"){
if(!params){ return }
var url = encodeURI("https://v1-api.txt-dev.tk/ead/encode/?enc="+params+"")
HTTP.get({
url:url,
success:"/onEncP2"
})
return }
