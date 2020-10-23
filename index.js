const { Client, RichEmbed } = require('discord.js')

const { token } = require("./config.js")

const commandHandler = require("./handlers/command.handler")
const apiHandler = require("./handlers/api.handler")
const eventHandler = require("./handlers/event.handler")

const client = new Client()

commandHandler(client)
apiHandler(client)
eventHandler(client)

client.on('ready', () => {
  client.user.setActivity(` Witam!! `, {type: "STREAMING", url: "https://www.twitch.tv/baajtekk"})
  console.log(`${client.user.tag} Ło kurwa nii es !Help`)
});


const config = require("./config.js")

client.login(token)

