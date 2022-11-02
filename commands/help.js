const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: 'help',
    },
    async run (bot,message,args) {
		const attackembed = new Discord.MessageEmbed()
            .setTitle("Help.")
            .setColor('#9F2B68')
            .setDescription("*Usage: !leech magnet_url")
		message.channel.send({ embeds: [attackembed] });
    }
}
