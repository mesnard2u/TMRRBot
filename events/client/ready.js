module.exports = {
    name: "ready",
    once: true, 
    async execute(client) {
        console.log("Bot op !");

       // const devGuild = await client.guilds.cache.get('1014431366605180978');
       // devGuild.commands.set(client.commands.map(cmd => cmd));
       client.application.commands.set(client.commands.map(cmd => cmd));
    },
};