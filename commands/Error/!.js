/*CMD
  command: !
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Error

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if(chat.chat_type!="private"){ return }
Bot.sendMessage("*❌ We Are Really Sorry, But At This Moment We Don't Support Space In Encode And Decode\n\nAnd You Can't Decode Any Encoded Message*",{is_reply:true});
