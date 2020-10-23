const { Client, RichEmbed } = require('discord.js')

module.exports = {
    name: "infobot",
    description: "Podaje informacje na temat bota",

    run(msg) {
        const { channel } = msg
        const embed = new RichEmbed()
      
        .setTitle("INFO O BOCIE")
        .setDescription("***Bota stworzył t!k3r#6757. WERSJA BOTA TO v1.11.2-New***")
        .setColor(0xFF7F00)
      
      msg.channel.send(embed)
      msg.delete()
    },
}