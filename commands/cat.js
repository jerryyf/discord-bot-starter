const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cats')
		.setDescription('Gets ready for some cats'),
	async execute(interaction) {
		await interaction.reply('Sure! Yu have 2 cats.');
	},
};
