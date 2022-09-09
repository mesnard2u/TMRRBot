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
        .setDescription("S\’il y avait une charte du bon DWAMeur ce serait celle-ci (en entrant sur ce serveur tu consens au joli blabla ci-dessous)\n\
       \n 1️⃣ Sois courtois et respectueux, même quand tu blagues\
       \n 2️⃣ Utilise les canaux appropriés\
       \n 3️⃣ Écris en français ou en anglais. Les autres langues sont cools mais moins de monde les comprendra\
       \n 4️⃣ Ton pseudo doit comporter ton prénom\
       \n 5️⃣ Si tu assistes aux events, ton image sera utilisé sur les supports de communication de DWAM\
       \n\
        \n⚠️ Pas de sujets religieux ou politiques, spams, insultes, arnaques, ou trucs douteux (corne de rhinocéros ou iPhone 13 à 1€ sur Wish)\
        \n🚫 Le non-respect de ces règles entraînera ton expulsion ou ton bannissement du serveur (selon la gravité ou le caractère récidiviste 🚔).\
        \n\
        \nSi tu veux en savoir plus sur l’initiative Drink With A Marketer\
        \n✘ | Site : https://drinkwithamarketer.com/\
        \n✘ | Instagram : http://instagram.com/drinkwithamarketer\
        \n✘ | Facebook : https://www.facebook.com/drinkwithamarketer/\
        \n✘ | Page LinkedIn: https://www.linkedin.com/company/18570297/\
        \n \
        \nSi tu souhaites devenir un partenaire de Drink With A Marketer\
        \n🤗 Envoie un MP à Marie-Rébecca <@709997749747187823>\
        \n\
        \nSi tu as des questions ou que tu as besoin d’aide\
        \n🆘 Envoie un MP à Marie-Rébecca <@709997749747187823> \
        \n\
        \nLe serveur DWAM, tout comme les events, est constitué de personnes positives, de bienveillance et d'entraide 🙏🏻\
        \n⚪ Si tu veux diffuser une offre d’emploi ou de stage, va sur le canal <#1014445588525359165>\
        \n⚪ Si tu veux discuter en tête à tête avec un DWAMeur, va sur le canal vocal <#1014457518686220318>\
        \n⚪ Si tu veux te présenter, va sur les canaux <#1014436206538391643> et <#1014438693366419458>\
        \n⚪ Si tu veux trouver les prochains évènements, va sur les canaux <#1014443294786330694>  <#1014443513326346291> <#1014444441970421800> <#1014444919613558864>\
        \n⚪ Si tu veux diffuser un évènement, fais le sur <#1014444919613558864> \
        \n⚪ Si tu as besoin d’un service, va dans <#1014447131614003231>\
        \n⚪ Si tu veux faire de l’auto-promo, va dans <#1014447845358706688> (et nul part ailleurs)\
        \n⚪ Si ce dont tu veux parler ne rentre dans aucun canal, va dans <#1014445016678141972> \
        \n⚪ Si tu veux beaucoup de notifications le jour de ton anniversaire, va renseigner ta date de naissance dans <#1014445016678141972>\
        \n\
        \n\
        Pour avoir accès au serveur, il te suffit de te **connecter sur le site DWAM** via le lien ci-dessous, puis accepter le règlement en cliquant sur le gros bouton vert 😉\
        \n\
        \n -----------------------------------------------------------\
        \n👉 **https://drinkwithamarketer.com/discord-dwam/** 👈 \
        \n -----------------------------------------------------------\ ")
        

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

