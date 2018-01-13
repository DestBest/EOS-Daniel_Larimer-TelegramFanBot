// Loading dependencies (https://github.com/mullwar/telebot)
const TeleBot = require('telebot');
const bot = new TeleBot('BOT_API_KEY')

watch = () => {

    // When bot receive any message
    bot.on('text', function(msg) {  
    
        // If message is sent by Daniel Larimer
        if (msg.from.id == DANIEL-LARIMER_TELEGRAM_ID) {  
        
            // Send a copy of the message to 
            return bot.sendMessage(EOS-Dan-Msg-Only_CHANNEL_TELEGRAM_ID, msg.text) 
            
        }
        
    })
    
    bot.connect();
    
}

watch()
