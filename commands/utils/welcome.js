const { MessageEmbed, MessageActionRow, MessageButton, MessageAttachment } = require("discord.js");
//const dwamLogo = new MessageAttachment('./img/dwamlogo.png');
//const dwamPersos = new MessageAttachment('./img/dwampersos.png');

const buttons = new MessageActionRow()
    .addComponents(
        new MessageButton()
        .setCustomId('accept-button')
        .setLabel('Je me suis inscrit(e) sur le site DWAM et j\'accepte le règlement.')
        .setStyle('SUCCESS'), 

    )

const welcomeEmbed = new MessageEmbed()
        .setTitle('Bienvenue 👋')
        .setColor('#e9873e')
        .setThumbnail('attachment://dwamlogo.png')
        .setImage('attachment://dwampersos.png')
        .setDescription("Tu n'a pas encore accès à tous les contenus du Discord.\
        \n\
        \n\
        Pour remédier à cela et pouvoir valider ta venue dans la famille DWAM, choisis ta formule d'abonnement en cliquant sur ce lien ! 👥\
        \n\
        \n\
        --------------------------------------------------------\n\
        | 👉 https://drinkwithamarketer.com/discord-dwam/ 👈 |")
        

module.exports = {
    name: "welcome",
    permission: ['ADMINISTRATOR'],
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'welcome',
    examples: ['welcome'],
    description: "Permet d'accepeter le règlement",
    async run(client, message, args) {
        await message.channel.send({ embeds: [welcomeEmbed], components: [buttons], files: ['./img/dwamlogo.png', './img/dwampersos.png'] });
    },
    async runInteraction(client, interaction) {
        await interaction.reply({ embeds: [welcomeEmbed], components: [buttons], files: ['./img/dwamlogo.png', './img/dwampersos.png'] });
    },
};

