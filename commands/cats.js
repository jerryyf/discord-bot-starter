const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cats')
		.setDescription('Gets ready for some cats'),
	async execute(interaction) {
		await interaction.reply('Sure! You have 2 cats.');
	},
};
