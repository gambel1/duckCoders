require("dotenv").config();

const TelegramBot = require("node-telegram-bot-api");
const { TOKEN } = process.env;
const { PORT } = process.env;

const bot = new TelegramBot(TOKEN, {
  webHook: {
    port: PORT,
    autoOpen: false,
  },
});

bot.openWebHook();

const webHookUrl = `https://duckprojectrender.onrender.com/bot${TOKEN}`;

bot.setWebHook(webHookUrl);

bot.on("message", (msg) => {
  const {
    chat: { id, first_name },
  } = msg;
  bot.sendMessage(id, "I am a bot Mr. McDuck");

  const welcomeMessage = `Привет, ${first_name}! Добро пожаловать в моё гнездо!`;

  bot.sendMessage(id, welcomeMessage);
});
