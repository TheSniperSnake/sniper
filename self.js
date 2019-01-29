const Discord = require('discord.js');
const client = new Discord.Client();
const marque = "TSS";

const config = { 
  "token"  : "NTMyNjA2NTQ0OTk1NDE4MTI0.DzHSGw.91S4N298ulTWBBAAi0lnPXoTq1c", 
  "prefix" : "/" //Recommandé de laissé le /
};
const ownerID = "532606544995418124" //ton id pour pas que les autres pd ont accès aux commandes


client.login(config.token);
console.log("c'est l'heure des carabistouilles");




client.on('message', message => {
  const args = message.content.split(" ").slice(1);

    if (message.content === config.prefix + 'help'){ 
    if (message.author.id !== ownerID) {
    } else {
    message.delete().catch(O_o=>{});
    let help1 = new Discord.RichEmbed()
    .setTitle(`**${marque}**`)
    .setDescription(`Selfbot de la TSS dev par TheSniperSnake.`)
    .setColor('RANDOM')
    .addField("🔧 Modération", "**/ban {mention}** : Bannir un membre (necessite BAN MEMBERS en perms).\n**/kick {mention}** : Kick un membre (necessite KICK MEMBERS en perms).")
    .addField("😂 FUN", "**/vento ({text})** ; **/yaurarien ({text})** ; **/yarieneu ({text})** ; **/iss ({text})** ; **/victimed ({text})** ; **/deter ({text})** ; **/épilepsie ({text})** ; **/aok ({text})** ; **/tcon ({text})**")
    .addField("🔑 Utile", "**/infoself** : Give des informations sur le self et sa version et affiche les problèmes fréquemment rencontrés avec un commande (ne fonctionne pas avec les commandes de la catégorie FUN).\n**/pub_ldd** : Jolie invitation permanente de la LDD.\n**/userinfo ({mention})** : Donne des infos sur sois meme ou sur quelqu'un d'autre.\n**/pp ({mention})** : Donne sa photo de profile ou celles des autres.\n**/serveurinfo** : Donne des infos sur le serveur.\n**/carainvisible** : Affiche un caractère invisible.\n**/spp** : Afficher la pp du serveur.\n**/stream {text}** : Se mettre en Streaming avec le text ajouté.\n**/game {text}** : Se mettre en Jeu avec le text ajouté.\n**/watching {text}** : Se mettre en Regarde avec le text ajouté.\n**/joinedat ({mention})** : Affiche la date d'arrivé de soi ou de quelqu'un sur le serveur.")
    .setThumbnail("https://cdn.discordapp.com/attachments/529041928587575296/529762558392139778/ll.png")
    .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
    message.channel.send(help1).then(message => message.delete(60000)).catch(console.error);
    console.log('h')
  }
    }



// Modération

if (message.content.startsWith('/kick')) {
  if (message.author.id !== ownerID) {
  } else {
const member = message.mentions.users.first();
const moustapha = message.guild.member(member);
if (moustapha) {
moustapha.kick({
}).then(() => {
message.channel.sendMessage(`**Membre expulsé :** ${member.tag}`);
}).catch(err => {
message.channel.sendMessage('**Ce membre est trop fort pour moi**');
console.error(err);
console.info("k")
});
}
}}
       
if (message.content.startsWith('/ban')) {
  if (message.author.id !== ownerID) {
  } else {
const member = message.mentions.users.first();
const moustapha = message.guild.member(member);
if (moustapha) {
moustapha.ban({
}).then(() => {
message.channel.sendMessage(`**Membre banni :** ${member.tag}`);
}).catch(err => {
message.channel.sendMessage('**Ce membre est trop fort pour moi**');
console.error(err);
console.info("b")
});
}
}}



             
// Utilité

if (message.content.startsWith(config.prefix + "userinfo")){
  if (message.author.id !== ownerID) {
  } else {
    message.delete().catch(O_o=>{});
  let user = message.mentions.users.first() || message.author;
  let days = user.createdAt.getDate()
  let months = 1 + user.createdAt.getMonth()
  let years = user.createdAt.getFullYear()
  let hours = user.createdAt.getHours()
  let mins = user.createdAt.getMinutes()
  let embed = new Discord.RichEmbed()
  .setDescription(`**${marque}**`)
  .setAuthor(`${user.username}`, `${user.avatarURL}`)
  .setThumbnail(user.avatarURL)
  .setColor("#41f470")
  .addField("IDentifiant :", `• ${user.id}`)
  .addField("Pseudo :", `• ${user.tag}`)
  .addField("Avatar :", `${user.avatarURL}`)
  .addField('Date de création du compte :', `• ${days}/${months}/${years} à ${hours}:${mins}`)
  .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
  message.channel.send(embed).then(message => message.delete(60000)).catch(console.error);
  console.info("ui");
  
}}

if (message.content.startsWith(config.prefix + "joinedat")){
  if (message.author.id !== ownerID) {
  } else {
    let user = message.mentions.users.first() || message.author;
    let day = message.guild.joinedAt.getDate()
  let month = 1 + message.guild.joinedAt.getMonth()
  let year = message.guild.joinedAt.getFullYear()
  let hour = message.guild.joinedAt.getHours()
  let min = message.guild.joinedAt.getMinutes()
    let embed = new Discord.RichEmbed()
    .setDescription(`**${marque}**`)
    .setAuthor(`${user.username}`, `${user.avatarURL}`)
    .setThumbnail(user.avatarURL)
    .setColor("#41f470")
    .addField("Pseudo :", `• ${user.tag}`)
    .addField("Date d'arrivée dans le serveur :", `• ${day}/${month}/${year} à ${hour}:${min}`)
    .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
  message.channel.send(embed).then(message => message.delete(60000)).catch(console.error);
  console.info("ja");
  }}

if (message.content.startsWith(config.prefix + "stream")){
    if (message.author.id !== ownerID) {
    } else {
      let stream = args.join(' ');
    message.delete().catch(O_o=>{});
    client.user.setGame(stream, "https://www.twitch.tv/twitch");
    message.channel.sendMessage(`:white_check_mark: En streaming "${stream}"`).then(message => message.delete(2000)).catch(console.error);
    console.log(`stream ${stream}`)
    }}

    if (message.content.startsWith(config.prefix + "game")){
      if (message.author.id !== ownerID) {
      } else {
        message.delete().catch(O_o=>{});
      let game = args.join(" ")
      client.user.setActivity(game, {type: "PLAYING"});
      message.channel.sendMessage(`:white_check_mark: En jeu "${game}"`).then(message => message.delete(2000)).catch(console.error);
      console.log(`game ${game}`)
        }}

        if (message.content.startsWith(config.prefix + "watch")){
          if (message.author.id !== ownerID) {
          } else {
            message.delete().catch(O_o=>{});
          let watch = args.join(" ")
          client.user.setActivity(watch, {type: "WATCHING"});
          message.channel.sendMessage(`:white_check_mark: Regarde "${watch}"`).then(message => message.delete(2000)).catch(console.error);
          console.log(`watching ${watch}`)
            }}

          

if (message.content === config.prefix + "pub_ldd"){
  if (message.author.id !== ownerID) {
  } else {
    message.delete().catch(O_o=>{});
    let embed = new Discord.RichEmbed()
    .setDescription(`**${marque}**`)
    .setColor('#41f470')
    .addField(`▇▓░ L' élite De Discord. ░▓▇`, `:shield: Protection anti-taupes.
    :bomb: Raid, dox et destruction de serv à coup de bot.
    :white_check_mark: Serveur propre et organisé.
    :globe_with_meridians: Echange entre les kheys.
    :scales: No abus de pouvoir.
    Rejoins: :arrow_forward: https://discord.gg/duwsCn8`)
    .setThumbnail("https://cdn.discordapp.com/attachments/529041928587575296/529762558392139778/ll.png")
    .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
    message.channel.send(embed).then(message => message.delete(60000)).catch(console.error);
console.log('ldd');
}}

if (message.content === config.prefix + "infoself"){
  if (message.author.id !== ownerID) {
  } else {
  message.delete().catch(O_o=>{});
    let embed = new Discord.RichEmbed()
        .setColor('#41f470')
        .addField("Infos sur le selfbot:", "Self développé par 󠀀󠀀󠀀T̷̲́Ḙ̵̅M̴̫̽M̵̪͂E̷͙̾H̶͚̊ء󠀀󠀀󠀀#1500 <@506062622152458245> avec l'aide de Fritures le 1er janvier 2019.\nDisponnible pour les @membres de la LDD. Toutes contrefaçons et/ou propagation du programme chez des non-membres de la LDD ainsi que modification du code (hormis placé son token, ID, prefix) par son utilisateur sera punis.")
    .addField("Version", "V1.2")
    .addField("Problèmes rencontrés", "**game**: Le seul problème c'est que le statut n'arrive pas à s'update car vous êtes déja entrain de jouer à un jeu. Dans ce cas il faut aller dans ses Game Activity et désactiver le Display.\n**stream**: (pareil que au dessus)\n**watch**: (pareil que au dessus)\n**userinfo**: 0 problème\n**kick:** 0 prob\n**ban**: 0 prob\n**pub_ldd**: cette commande affiche le lien du serveur BARRAGE. Si le lien est invalide c'est que vous êtes bannis (peu de chance que ça arrive)\n**pp**: 0 prob\n**spp**: ne pas utiliser cette commande en dehors d'un serveur, ça peut déboucher sur une erreur du script nécessitant le redemarage du self\n**ping**: peut laguer quelques fois\n**carainvisible**: 0 prob\n**serveurinfo**: ne pas utiliser cette commande en dehors d'un serveur, ça peut déboucher sur une erreur du script nécessitant le redemarage du self\n**joinedat**: rien à part qu'il ne faut pas utiliser cette commande hors d'un serveur.")
    .setThumbnail("https://cdn.discordapp.com/avatars/506062622152458245/a_045e3a6335fa76e8c2a741aca194e8b0.gif")
    .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
    message.channel.send(embed).then(message => message.delete(60000)).catch(console.error);
    console.log('is');}}

if (message.content.startsWith(config.prefix + 'pp')){
    if (message.author.id !== ownerID) {
    } else {
    message.delete().catch(O_o=>{});
    let user = message.mentions.users.first() || message.author;
    let embed = new Discord.RichEmbed()
    .setDescription(`**${marque}**`)
    .setColor('#41f470')
    .addField(`Avatar de ${user.username}`, `${user.avatarURL}?size=2048`)
    .setImage(`${user.avatarURL}?size=2048`)
    .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
    message.channel.send(embed).then(message => message.delete(60000)).catch(console.error);
    console.info("pp")
  }}

  if (message.content.startsWith(config.prefix + 'spp')){
    if (message.author.id !== ownerID) {
    } else {
    message.delete().catch(O_o=>{});
    let embed = new Discord.RichEmbed()
    .setDescription(`**${marque}**`)
    .setColor('#41f470')
    .addField(`Avatar du serveur:`, `${message.guild.iconURL}?size=2048`)
    .setImage(`${message.guild.iconURL}?size=2048`)
    .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
    message.channel.send(embed).then(message => message.delete(60000)).catch(console.error);
    console.info("spp")
  }}

  if(message.content === config.prefix + "ping") {
      if (message.author.id !== ownerID) {
      } else {
    message.delete().catch(O_o=>{});
    message.channel.send(`${client.pings[0]}ms`).then(message => message.delete(60000));
    console.info("p")
  }}

  if(message.content === config.prefix + "carainvisible"){
    if (message.author.id !== ownerID) {
    } else {
    message.delete().catch(O_o=>{});
    message.channel.sendMessage("󠂪󠂪 ")
    console.info("ci")
    }}

    if(message.content.startsWith(config.prefix + "serveurinfo")){
      if (message.author.id !== ownerID) {
      } else {
        message.delete().catch(O_o=>{});
      let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
    let day = message.guild.createdAt.getDate()
    let month = 1 + message.guild.createdAt.getMonth()
    let year = message.guild.createdAt.getFullYear()
    let hour = message.guild.createdAt.getHours()
    let min = message.guild.createdAt.getMinutes()
      let serverinfo = new Discord.RichEmbed()
      .setColor("#41f470")
      .setDescription(`**${marque}**`)
      .setThumbnail(message.guild.iconURL)
      .addField("Fondateur :", `• ${message.guild.owner}`)
      .addField("ID :", `• ${message.guild.id}`, true)
      .addField("Membre(s) :", `• ${message.guild.memberCount}`)
      .addField("Connecté(s) :", `• ${online.size}`)
      .addField("Icone", `${message.guild.iconURL}`)
      message.channel.send(serverinfo).then(message => message.delete(60000)).catch(console.error);
      let serverinfo2 = new Discord.RichEmbed()
      .setColor("#41f470")
      .addField("Bot(s) :", `• ${message.guild.members.filter(m => m.user.bot).size}`)
      .addField("Humain(s) :", `• ${message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size}`)
      .addField("Rôle(s) :", `• ${message.guild.roles.size}`)
      .addField("Channel(s) :", `• ${message.guild.channels.size}`)
      .addField("Région :", `• ${message.guild.region}`)
      .addField("Date de création du serveur :",`• ${day}/${month}/${year} à ${hour}:${min}`)
      .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
      message.channel.send(serverinfo2).then(message => message.delete(60000)).catch(console.error);
      console.info("si");
    }}

// FUN
const gpalu = args.join(' ');
const iss = args.join(' ');
const yaurarien = args.join(' ');
const yarieneu = args.join(" ");
const vento = args.join(' ');
const victimed = args.join(' ');
const deter = args.join(' ');
const épilepsie = args.join(' ');
const tcon = args.join(' ');
const aok = args.join(' ');

  if(message.content.startsWith(config.prefix + "gpalu")){
    if (message.author.id !== ownerID) {
    } else {
    message.delete().catch(O_o=>{});
    let embed = new Discord.RichEmbed()
     .setDescription(`**${marque}**`)
     .addField("😂 G PA LU", `${gpalu}`)
     .setImage("https://media.tenor.com/images/bd17d0bbdde4a9b6956f1a5815b58461/tenor.gif")
    .setColor("#41c4f4")
    .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
    message.channel.send(embed).then(message => message.delete(60000)).catch(console.error);
    }}

    if(message.content.startsWith(config.prefix + "iss")){
        if (message.author.id !== ownerID) {
        } else {
        message.delete().catch(O_o=>{});
        let embed = new Discord.RichEmbed()
        .setDescription(`**${marque}**`)
        .addField("😂 ISSOU", `${iss}`)
        .setImage("https://cdn.discordapp.com/attachments/529041820613607426/529365417110798359/images.png")
       .setColor("#41c4f4")
       .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
       message.channel.send(embed).then(message => message.delete(60000)).catch(console.error);
       }}

       if(message.content.startsWith(config.prefix + "yaurarien")){
        if (message.author.id !== ownerID) {
        } else {
        message.delete().catch(O_o=>{});
        let embed = new Discord.RichEmbed()
        .setDescription(`**${marque}**`)
        .addField("😂 YAURARIEN", `${yaurarien}`)
        .setImage("https://cdn.discordapp.com/attachments/529042285875298317/529368083505217547/1530491535-sans-titre-4.png")
       .setColor("#41c4f4")
       .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
       message.channel.send(embed).then(message => message.delete(60000)).catch(console.error);
       }}
       
       if(message.content.startsWith(config.prefix + "yarieneu")){
        if (message.author.id !== ownerID) {
        } else {
        message.delete().catch(O_o=>{});
        let embed = new Discord.RichEmbed()
        .setDescription(`**${marque}**`)
        .addField("😂 YARIENEU", `${yarieneu}`)
        .setImage("https://cdn.discordapp.com/attachments/529042285875298317/529369104549806130/44992-full.png")
       .setColor("#41c4f4")
       .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
       message.channel.send(embed).then(message => message.delete(60000)).catch(console.error);
       }}

       if(message.content.startsWith(config.prefix + "vento")){
        if (message.author.id !== ownerID) {
        } else {
        message.delete().catch(O_o=>{});
        let embed = new Discord.RichEmbed()
        .setDescription(`**${marque}**`)
        .addField("😂 PREND TA VENTOLINE", `${vento}`)
        .setImage("https://cdn.discordapp.com/attachments/527610019714301952/529369047033315337/JPEG_20181231_011718.jpg")
       .setColor("#41c4f4")
       .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
       message.channel.send(embed).then(message => message.delete(60000)).catch(console.error);
       }}

       if(message.content.startsWith(config.prefix + "victimed")){
        if (message.author.id !== ownerID) {
        } else {
        message.delete().catch(O_o=>{});
        let embed = new Discord.RichEmbed()
        .setDescription(`**${marque}**`)
        .addField("😂 GROSSE VICTIME", `${victimed}`)
        .setImage("https://cdn.discordapp.com/attachments/529042849581367296/529417127963394049/inconnu.gif")
       .setColor("#41c4f4")
       .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
       message.channel.send(embed).then(message => message.delete(60000)).catch(console.error);
       }}

       if(message.content.startsWith(config.prefix + "deter")){
        if (message.author.id !== ownerID) {
        } else {
        message.delete().catch(O_o=>{});
        let embed = new Discord.RichEmbed()
        .setDescription(`**${marque}**`)
        .addField("😂 ALERTE DARON DETER", `${deter}`)
       .setImage("https://cdn.discordapp.com/attachments/529042849581367296/529418535143866398/4637B2C86015EC2DC99E5E98E960EDA7D2E917EC.png")
       .setColor("#41c4f4")
       .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
       message.channel.send(embed).then(message => message.delete(60000)).catch(console.error);
       }}

       if(message.content.startsWith(config.prefix + "épilepsie")){
          if (message.author.id !== ownerID) {
          } else {
          message.delete().catch(O_o=>{});
          let embed = new Discord.RichEmbed()
          .setDescription(`**${marque}**`)
          .addField("😂 ES-TU EPILEPTIQUE??", `${épilepsie}`)
          .setImage("http://aws-cf.imdoc.fr/prod/photos/2/4/8/4909248/5370331/big-53703314d1.gif?v=18")
          .setColor("#41c4f4")
          .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
          message.channel.send(embed).then(message => message.delete(60000)).catch(console.error);
          }}

          if(message.content.startsWith(config.prefix + "tcon")){
            if (message.author.id !== ownerID) {
            } else {
            message.delete().catch(O_o=>{});
            let embed = new Discord.RichEmbed()
            .setDescription(`**${marque}**`)
            .addField("😂 tcon", `${tcon}`)
            .setImage("https://img.buzzfeed.com/buzzfeed-static/static/2015-02/16/6/enhanced/webdr12/anigif_enhanced-2720-1424084401-2.gif")
            .setColor("#41c4f4")
            .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
            message.channel.send(embed).then(message => message.delete(60000)).catch(console.error);
            }}
  
            if(message.content.startsWith(config.prefix + "aok")){
              if (message.author.id !== ownerID) {
              } else {
              message.delete().catch(O_o=>{});
              let embed = new Discord.RichEmbed()
              .setDescription(`**${marque}**`)
              .addField("😂 Ha ok.", `${aok}`)
              .setImage("https://media.tenor.co/images/6f19044d0d018bc75a2ad279cbba4e7c/tenor.gif")
              .setColor("#41c4f4")
              .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
              message.channel.send(embed).then(message => message.delete(60000)).catch(console.error);
              }}

// BIG CHUNGUS
//⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀             ⠀                                 //⣿⣧⠀⠀⠀⢰⡿⡇
//⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀                                                //⢸⣿⡟⡆⠀⠀⣿⡇⢻⠀⠀⠀⠀
//⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀                                               //⢸⣿⠀⣿⠀⢰⣿⡇⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀                                               //⢸⣿⡄⢸⠀⢸⣿⡇⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠀
//⠀⠀⠀⠀                                                         //⠘⣿⡇⢸⡄⠸⣿⡇⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀
//⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⠀                                                 //⢿⣿⢸⡅⠀⣿⢠⡏⠀⠀
//⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀                                                //⠈⣿⣿⣥⣾⣿⣿⠀⠀⠀
//⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀                                              //⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                                                              //⢸⣿⣿⣿⡿⡿⣿⣿⡿⡅
                                                              //⢸⠉⠀⠉⡙⢔⠛⣟⢋⠦⢵⠀
//⠀⠀⠀⠀⠀⠀ ⠀⠀⠀                                                   //⣾⣄⠀⠀⠁⣿⣯⡥⠃⠀⢳⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                                                            //⣴⣿⡇⠀⠀⠀⠐⠠⠊⢀⠀⢸⠀⠀⠀⠀⠀
//⠀⠀ ⠀⠀                                                  //⢀⣴⣿⣿⣿⡿⠀⠀⠀⠀⠀⠈⠁⠀⠀⠘⣿⣄⠀⠀⠀⠀⠀ ⠀
//⠀          ⠀                                       //⣠⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣷⡀⠀⠀⠀ ⠀⠀⠀
                 //                                ⣾⣿⣿⣿⣿⣿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣧⠀⠀ ⠀⠀⠀
                //                           ⡜⣭⠤⢍⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀ ⠁⡅ ⣀⠝⠀⠀
//⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  //                         ⠄⠠⠀⠀⠰⡅ ⠀⠀⠀                     ⠰ ⠔⠠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                //                      ⠀⠁⠔⠠⡕⠀ ⠀⠀⠀                          ⠈⢿⣿⣦
                  //                     ⠀⣿⣷⣶⠒⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀          ⣿⣿⣦
                 //⠀⠀⠀⠀ ⠀⠀⠀⠀            ⠘⣿⣿⡇                              ⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                 //                       ⢤⣤⣽⣿⣿⣦⣀⢀⡠⢤⡤⠄⠀⠒⠀⠁⠀⢘⠔⠀⠀     ⡤⣿ ⣿ ⠋
                  //                       ⡐⠈⠁⠈⠛⣛⠿⠟⠑⠈⠀⠀⠀⠀ ⠿⠟⠑⠈⡐⠈⠁⠈⠛⣛⠿⠟⠑⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀


    
})