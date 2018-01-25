// Loading dependencies, see: https://github.com/mullwar/telebot
const TeleBot = require('telebot')
const bot = new TeleBot('BOT_API_TOKEN')

watch = () => {

    // When bot receive any message
    bot.on('text', function(msg) {  
    
        // If message is sent by Daniel-Larimer
        if (msg.from.id == DANIEL_LARIMER_TELEGRAM_ID) {  
        
            // Send a copy of the message to EOS-Dan-Msg-Only_CHANNEL
            return bot.sendMessage(TARGET_TELEGRAM_ID, msg.text) 
            
        }
        
    })
    
    bot.connect()
    
}

watch()
