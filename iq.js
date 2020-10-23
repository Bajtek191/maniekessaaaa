var fortunes = [
    "**Twoje IQ wynosi: 100**",
    "**Twoje IQ wynosi: 101**",
    "**Twoje IQ wynosi: 102**",
    "**Twoje IQ wynosi: 103**",
    "**Twoje IQ wynosi: 104**",
    "**Twoje IQ wynosi: 105**",
    "**Twoje IQ wynosi: 106**",
    "**Twoje IQ wynosi: 107**",
    "**Twoje IQ wynosi: 108**",
    "**Twoje IQ wynosi: 109**",
    "**Twoje IQ wynosi: 110**",
    "**Twoje IQ wynosi: 112**",
    "**Twoje IQ wynosi: 113**",
    "**Twoje IQ wynosi: 114**",
    "**Twoje IQ wynosi: 115**",
    "**Twoje IQ wynosi: 116**",
    "**Twoje IQ wynosi: 117**",
    "**Twoje IQ wynosi: 118**",
    "**Twoje IQ wynosi: 119**",
    "**Twoje IQ wynosi: 120**",
    "**Twoje IQ wynosi: 121**",

];

module.exports = {
    name: "iq",
    description: "Pokazuje ile masz iq",


    run(msg) {
        const { channel } = msg
        var wynik = msg.channel.send(fortunes[Math.floor(Math.random() * 21)]);
        msg.channel.send  
    },
}