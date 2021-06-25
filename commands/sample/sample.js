const Discord = module.require("discord.js");
module.exports.run = async (client, message, args ,user) => {
   // For test use: (your prefix)+sample
   message.reply(`Prefix: ${client.prefix}`); // This line return a Bot prefix
   message.reply(`ID: ${message.channel.id}`); // This line return the channel id in which the message was sent
   message.reply(`Second: ${args[0]}`); // This line return the second word from the message
   message.reply(`Author: ${user}`); // This line return the author
};
module.exports.help = {
  name: "sample"  //  Place sample we write the name command without prefix
};
