module.exports = {
    name: "ping",
    permission: ['ADMINISTRATOR', 'KICK_MEMBERS'],
    description: 'Commande ping!',
    run: (client, message, args) => {
        message.channel.send('pong!');
    },
    runSlash: (client, interaction) => {
        interaction.reply('pong!');
    }
};