const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');
const WebTorrent = require('webtorrent-hybrid')

const client = new WebTorrent()
module.exports = {
    config: {
        name: 'leech',
    },
    async run (bot,message,args) {
const magnetURL = args[0];
client.add(magnetURL, { path: '/etc/shareddrive/torrentbot/' }, function (torrent) {
    // metadata getter
    message.channel.send('Downloading:', torrent.infoHash)
    torrent.on('done', function () {
        message.channel.send('Download finished')
        })
    });
}};