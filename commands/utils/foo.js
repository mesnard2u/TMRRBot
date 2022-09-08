const { MessageActionRow, MessageButton } = require("discord.js");

const buttons = new MessageActionRow()
    .addComponents(
        new MessageButton()
        .setCustomId('primary-button')
        .setLabel('Primary')
        .setStyle('PRIMARY'),

        new MessageButton()
        .setCustomId('secondary-button')
        .setLabel('Secondary')
        .setStyle('SECONDARY'),

        new MessageButton()
        .setCustomId('success-button')
        .setLabel('Success')
        .setStyle('SUCCESS'),

        new MessageButton()
        .setCustomId('danger-button')
        .setLabel('Danger')
        .setStyle('DANGER'),

        new MessageButton()
        .setURL('https://google.com')
        .setLabel('Link')
        .setStyle('LINK'),
    )


module.exports = {
    name: "foo",
    permission: ['ADMINISTRATOR'],
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'foo',
    examples: ['foo'],
    description: "foo",
    async run(client, message, args) {
        await message.channel.send({ content: 'Cliquez sur les boutons', components: [buttons] });
    },
    async runInteraction(client, interaction) {
        await interaction.reply({ content: 'Cliquez sur les boutons', components: [buttons] });
    },
};

