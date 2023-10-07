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

const webHookUrl = `https://duckcoders.onrender.com/bot${TOKEN}`;

bot.setWebHook(webHookUrl);

bot.on("message", (msg) => {
  const {
    chat: { id },
    from: { first_name },
  } = msg;
  bot.sendMessage(id, "My name is bot Mr. McDuck");

  const userName =
    msg.from.first_name || msg.chat.first_name || "Неизвестный юзер";

  const welcomeMessage = `Привет, ${userName}! Добро пожаловать в моё гнездо! Может жареных яиц?:)`;
  bot.sendMessage(id, welcomeMessage);
});
