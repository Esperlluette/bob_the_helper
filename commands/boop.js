const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('boop')
		.setDescription('Boop!'),
	async execute(interaction) {
		return interaction.reply('Boop!');
	},
};