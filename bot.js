// Loading dependencies (https://github.com/mullwar/telebot)
const TeleBot = require('telebot');
const bot = new TeleBot('BOT_API_TOKEN') 


function forwarder() {

    // Connect to this bot's Telegram API
    bot.connect()

    // When bot receive a text message
    bot.on('text', (msg) => {  
        // If sender ID is DANIEL_LARIMER_TELEGRAM_ID
        if(msg.from && msg.from.id == DANIEL_LARIMER_TELEGRAM_ID) {
            // Forward message to TARGET_TELEGRAM_ID
            bot.forwardMessage(TARGET_TELEGRAM_ID, msg.chat.id, msg.message_id)
            // Log Success
            .then((res) => {console.log("Message successfuly forwarded")})
            // Log Error
            .catch((err) => {console.log(JSON.stringify(err, null, 2))})
        }
    }

}

forwarder()
