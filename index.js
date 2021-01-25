const config = require('./config');
const TelegramBot = require('node-telegram-bot-api')

const express = require('express')
const bodyParser = require('body-parser');
 
const app = express();
 
app.use(bodyParser.json());
 
app.listen(process.env.PORT);
 
app.post('/' + bot.token, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

let bot;

const token = process.env.BOT_ID;
if (process.env.NODE_ENV === 'production') {
   bot = new TelegramBot(token);
   bot.setWebHook(process.env.HEROKU_URL + bot.token);
} else {
   bot = new TelegramBot(token, { polling: true });
}

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