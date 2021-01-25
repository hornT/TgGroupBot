const config = require('./config');
const TelegramBot = require('node-telegram-bot-api')

const bot = new TelegramBot(config.BOT_ID, {
    polling: true,
});

bot.onText(/\/all/, (msg, match) => {
    processComand(msg, match, config.BE_TEAM);
    processComand(msg, match, config.FE_TEAM);
    processComand(msg, match, config.QA_TEAM);
});

bot.onText(/\/be/, (msg, match) => {
    processComand(msg, match, config.BE_TEAM);
});

bot.onText(/\/fe/, (msg, match) => {
    processComand(msg, match, config.FE_TEAM);
});

bot.onText(/\/qa/, (msg, match) => {
    processComand(msg, match, config.QA_TEAM);
});

function processComand(msg, match, users){
    const chatId = msg.chat.id;
    const resp = match[1];
  
    console.log(`echo. chatid: ${chatId}, resp: ${resp} who: ${msg.from.username}`);

    bot.sendMessage(chatId, users);
}