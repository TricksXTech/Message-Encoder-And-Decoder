/*CMD
  command: /decode
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Decode
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(chat.chat_type!="private"){
if(!params){ return }
var url = encodeURI("https://v1-api.txt-dev.tk/ead/decode/?dec="+params+"")
HTTP.get({
url:url,
success:"/onDecP2"
})
return }
