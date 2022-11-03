const WebTorrent = require("webtorrent");
const config = require("../../config.json");
const { SlashCommandBuilder } = require("@discordjs/builders");
const client = new WebTorrent();
const Discord = require("discord.js");
const wait = require('node:timers/promises').setTimeout;
module.exports = {
    // The data needed to register slash commands to Discord.
    data: new SlashCommandBuilder()
        .setName("leech")
        .setDescription(
            "Leech a torrent file from magnet link"
        )
        .addStringOption((option) =>
            option
            .setName("link")
            .setDescription("magnet link")
            .setRequired(true)
        ),
    async execute(interaction) {
        const magnetURL = interaction.options.getString("link");
        client.add(magnetURL, { path: "./dev/" }, async function (torrent) {
          interaction.reply("Downloading: " + torrent.infoHash);
          torrent.on("error", function (err) {
            console.log(err);
            });
            torrent.on("download", async function (bytes) {
                await wait(1000);
                const embed = new Discord.MessageEmbed()
                .setTitle("Leech.")
                .setColor('#9F2B68')
                .setDescription("Torrent name: " + torrent.name + "\n Downloaded: " + torrent.length + " bytes. " + "\n Time remaining: " + Math.round(torrent.timeRemaining / 100) + " seconds.")
                interaction.editReply({ embeds: [embed] });
                }
            );
          torrent.on("done", async function () {});
            await wait(1000);
            const embed = new Discord.MessageEmbed()
            .setTitle("Leech.")
            .setColor('#9F2B68')
            .setDescription("Downloaded: " + torrent.length + " bytes. " + "Time remaining: " + torrent.timeRemaining + " seconds.")
            interaction.editReply({ embeds: [embed] });
            console.log(torrent.info.files.length)
            /*await wait(500)
            interaction.editReply("Download finished");
              console.log(torrent.progress)*/
        });

    },
};