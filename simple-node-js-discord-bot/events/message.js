module.exports = (client, message) => {
    if (message.author.bot || message.channel.type === 'dm') return;
    const prefix = client.prefix;
    if (message.content.indexOf(prefix) !== 0) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));
    const user = message.author;
    if (cmd) cmd.run(client, message, args , user );
};