module.exports = {
    name: "primary-button",
    async runInteraction(client, interaction) {
        await interaction.guild.scheduledEvents.fetchSubscribers({id: '1017074677149073518', withmember: true });
    }

};