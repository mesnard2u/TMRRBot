module.exports = {
    name: "accept-button",
    async runInteraction(client, interaction) {
        await interaction.member.roles.add('1022810813335097386');
        await interaction.member.roles.remove('1016288996546068491');
        await interaction.reply({ content: `Tu as maintenant accès au serveur ! Bienvenue dans la communauté DWAM 🥳`, ephemeral: true});
    }
};