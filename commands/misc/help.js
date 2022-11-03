const WebTorrent = require("webtorrent");
const config = require("../../config.json");
const Discord = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const client = new WebTorrent();
module.exports = {
    // The data needed to register slash commands to Discord.
    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription(
            "Here is a list of all my commands"
        ),
    async execute(interaction) {
      const embed = new Discord.MessageEmbed()
      .setTitle("Help.")
      .setColor('#9F2B68')
      .setDescription("*Usage: !leech magnet_url")
      interaction.reply({ embeds: [embed] });

    },
};
