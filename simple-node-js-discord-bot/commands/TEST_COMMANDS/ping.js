const Discord = module.require("discord.js");
module.exports.run = async (client, message, args ,user) => {
   message.reply("Pong!");
};
module.exports.help = {
  name: "ping" 
};
