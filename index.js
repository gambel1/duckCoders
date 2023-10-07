require("dotenv").config();

const TelegramBot = require("node-telegram-bot-api");
const { TOKEN } = process.env;
const { NGROK_PORT } = process.env;
const { PORT } = process.env;

const bot = new TelegramBot(TOKEN, {
  webHook: {
    port: PORT,
    autoOpen: false,
  },
});

bot.openWebHook();

bot.setWebHook(`${NGROK_PORT}${"/bot"}${TOKEN}`);

bot.on("message", (msg) => {
  const {
    chat: { id, first_name },
  } = msg;
  bot.sendMessage(id, "Я бот Валера");

  const welcomeMessage = `Привет, ${first_name}! Добро пожаловать в моё окружение!`;

  bot.sendMessage(id, welcomeMessage);
});
