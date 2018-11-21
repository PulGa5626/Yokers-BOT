const Discord = require("discord.js");
const client = new Discord.Client();
const datos = require("./datos.json")
let prefix = datos.prefix
client.on("ready", () => {
   console.log("Encendido");
});
client.on("message", (message) => {
if(message.content.startsWith("Soy nuevo")){
    message.channel.send("Bienvenido al servidor")
}
if(message.content.startsWith(prefix+"redes")){
    message.channel.send("Pudes darte una vuelta por el canal de texto REDES")
}
if(message.content.startsWith(prefix+"Pulga")){
    const embed =new Discord.RichEmbed()
    .setTitle("Lider del clan YOKERS")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor(0x00FFFF)
    .setDescription("Soy el lider del clan competitivo YOKERS, solo respondo por discord")
    .setFooter("Todas nuestras redes se encuentran en el canal de texto Redes", client.user.avatarURL)
    .setImage(message.author.avatarURL)
    .setThumbnail(message.author.avatarURL)
    .setTimestamp()
    .setURL("https://www.facebook.com/YokerSquad/")
    
    message.channel.send(embed)
}
});
client.login(datos.token);
