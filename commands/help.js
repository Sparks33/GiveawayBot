const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (client, message, args) => {
  if (message.author.bot) return;
  let prefix = config.prefix;
  if (!message.content.startsWith(prefix)) return;

  let help = new Discord.MessageEmbed()
    .setTitle("Command List & Guide for the Bot")
    .setDescription(
      "Below are Commands you can do with Bot, Right now there is only 6 commands available, more commands will be added soon."
    )
    .addField(
      "🎁 Giveaway 🎁",
      "start [channel-name] [Time] [winners] [Prize]\nreroll [prize name]\nend [prize name]"
    )
    .addField(
      "Examples",
      "g!start #giveaway 5m 1 Testing\ng!end Testing\ng!reroll Testing"
    )
    .addField("Utility", "ping, invite", true)
    .addField("ℹ Information ℹ", "stats", true)
    .addField(
      "Check out",
      "[This Channel](https://www.youtube.com/channel/UCF9E-xef9jL9QgziZRDHKKQ) to make your own giveaway bot"
    )
    .setTimestamp()
    .setFooter(
      `Requested By ${message.author.tag}`,
      client.user.displayAvatarURL()
    );

  await message.reply(help);
};

module.exports.help = {
  name: "help",
};
