const Discord = require('discord.js')
const bot = new Discord.Client()
const config = require('./config.json')
let prefix = '!'

bot.on('ready', () => {
    console.log('A bot elindult!')
})

bot.login(config.token)