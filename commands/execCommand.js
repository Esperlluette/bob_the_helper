const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('execCommand')
    .setDescription('Éxecute une commande sur un serveur distant'),
	async execute(interaction) {
        await console.log(interaction);
    },
};