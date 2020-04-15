// Discord bot implements
const Discord = require("discord.js");
const client = new Discord.Client();
const request = require("request");
const Handler = require('./handler.js');

client.login(process.env.DISCORD_BOT_TOKEN);

client.on("message", async msg => {
  if (msg.author.bot) {
    return;
  }
  Handler.call(msg);
});

client.on("guildMemberAdd", member => {
  const guild = member.guild;
  guild.channels
    .find("name", "雑談")
    .send(
      `<@!${
      member.user.id
      }> さん、よろしくお願いします！\nまずは ${guild.channels.find(
        "name",
        "luck-hit-心得🔰"
      )} をよく読んでから ${guild.channels.find(
        "name",
        "自己紹介"
      )} で自己紹介して、フレンドコードを ${guild.channels.find(
        "name",
        "フレコ置き場"
      )} に貼ってください\n\n${
      guild.name
      }のみんなが歓迎していますよ〜`
    )
    .then(sentMessage => sentMessage.react("👍"));
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});