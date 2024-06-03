"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const TOKEN = "7406750947:AAFryoDkeOTzhdNJGzue4N2I6gpFHW8EYaQ";
const bot = new node_telegram_bot_api_1.default(TOKEN, { polling: { autoStart: true } });
bot.setMyCommands([
    { command: "/start", description: "Start the bot 🎮" },
    { command: "/info", description: "Get Alireza Coin info 🧾" },
    { command: "/buy", description: "Buy Alireza Coin 💰" },
    { command: "/author", description: "Message to author of Alireza Coin 🧑‍💻" },
]);
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    console.log(msg.chat.username)
    const msgText = `Hello @${msg.chat.username} 👋\nClick play button and enjoy the game! 🎮\nAuthor:@Mogharrabiyan 🧑‍💻`;
    if (msgText)
        bot.sendPhoto(chatId, "AgACAgQAAxkBAANqZl3KXT17yzjUNjUgWOFIUUmpbKcAAu2-MRs-O3BSeYaNF511avYBAAMCAAN5AAM1BA", {
            caption: msgText,
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Info 🧾", callback_data: "info" },
                        {
                            text: "Buy 💰",
                            url: "https://app.uniswap.org/#/swap?outputCurrency=0x3c3993e918f5e5fb5ecc362d85b61f910ba8d1bf",
                        },
                    ],
                    [
                        {
                            text: "Price 💵",
                            url: "https://coinmarketcap.com/dexscan/arbitrum/0x7877a6292e3886a32ba0db055050f5805ae3c701",
                        },
                    ],
                    [{ text: "Play Alireza Coin 🎮", web_app: { url: "https://alirezacoin.neocities.org/" } }],
                ],
            },
        });
});
bot.onText(/\/info/, (msg) => {
    const chatId = msg.chat.id;
    const msgText = "Contract Address(arbitrum): `0x3c3993E918F5e5fB5eCC362d85b61F910Ba8D1Bf`\n\n" +
        "CoinMarketCap: https://coinmarketcap.com/dexscan/arbitrum/0x7877a6292e3886a32ba0db055050f5805ae3c701\n\n" +
        "Author: Alireza Mogharrabiyan";
    bot.sendMessage(chatId, msgText, { parse_mode: "Markdown", disable_web_page_preview: true });
});
bot.onText(/\/buy/, (msg) => {
    const chatId = msg.chat.id;
    const msgText = "You can buy Alireza Coin from Uniswap:\n\nhttps://app.uniswap.org/#/swap?outputCurrency=0x3c3993e918f5e5fb5ecc362d85b61f910ba8d1bf";
    bot.sendMessage(chatId, msgText);
});
bot.onText(/\/author/, (msg) => {
    const chatId = msg.chat.id;
    const msgText = "Hi I'm @Mogharrabiyan and I'm biggest trader in the Universe";
    bot.sendMessage(chatId, msgText);
});
bot.on("callback_query", (query) => {
    const chatId = query.message?.chat.id;
    let msgText;
    if (query.data === "info") {
        msgText =
            "Contract Address(arbitrum): `0x3c3993E918F5e5fB5eCC362d85b61F910Ba8D1Bf`\n\n" +
                "CoinMarketCap: https://coinmarketcap.com/dexscan/arbitrum/0x7877a6292e3886a32ba0db055050f5805ae3c701\n\n" +
                "Author: Alireza Mogharrabiyan";
        bot.sendMessage(chatId, msgText, { parse_mode: "Markdown", disable_web_page_preview: true });
    }
});
