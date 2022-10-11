const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Affiche l\'aide'),
	async execute(interaction) {
		return interaction.reply('Liste des commandes :\n'+ 
        '- /beep | /boop : réponds avec boop ou beep. \n'+ 
        '- /ping | /pong : réponds avec pong ou ping. \n'+ 
        '');
	},
};