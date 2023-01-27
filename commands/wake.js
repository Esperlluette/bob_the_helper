const { SlashCommandBuilder } = require('discord.js');
const { URL, serverIP, serverPORT } = require('../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('wake')
		.setDescription('réveille un serveur'),
	async execute(interaction) {
		await interaction.reply(`Server ${URL ," ",  serverIP ," ", serverPORT} reveillé`);
	},
};