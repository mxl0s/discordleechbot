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
            .setDescription("*Usage for L7:*\n.L7 TARGET TIME METHOD\n*Usage for L4:*\n.L4 TARGET PORT TIME METHOD")
		message.channel.send({ embeds: [attackembed] });
    }
}
