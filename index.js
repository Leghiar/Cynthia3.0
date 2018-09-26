const Discord = require('discord.js');
const bot = new Discord.Client();


var prefix = "#"

var colors = require('colors');

var colors = require('colors/safe');

bot.login(process.env.TOKEN)

bot.on('ready', function ()  {
  bot.user.setActivity("Command: #help");
  console.log('Connected'.green);
});

bot.on('message', function(message) {
  if (message.content.startsWith(prefix + 'info')) {
  message.delete;
  message.channel.send("", {
      embed: {
          color : 0xE15306,
  author :{name: message.author.name},
          description : "",
          title : "Information serveur",
          fields : [
              {
   name : '**Nom du serveur**',
   value : message.guild.name,
   inline : true
            },{
   name : '**Propriétaire**',
   value : message.guild.owner.user.tag,
   inline : true
 },{
    name :'**Niveau de Vérification**',
    value : message.guild.verificationLevel,
    inline : true
 },{
    name : '**Région**',
    value : message.guild.region,
    inline : true
 },{
   name : '**Nombre de Membres**',
   value : message.guild.memberCount,
   inline : true
 },{
   name : '**Humain**',
   value : message.guild.members.filter(m => m.user).size,
   inline : true
 },{
   name : '**Bot**',
   value : message.guild.members.filter(m => m.user.bot).size,
   inline : true
 }],
},
footer : {
   text : 'Leghiar'
          }
    });
}
})

bot.on('message', msg => {
  if (msg.content === prefix + 'help') {
    msg.channel.send('__Liste des commandes :__ \n #info \n #tt \n #fabriquant \n #çava?');
                                 }
	                    });

bot.on('message', msg => {
  if (msg.content === prefix + 'tt') {
  msg.channel.sendMessage('Création du bot le __07/06/2018__');
  console.log('Commande effectuée'.cyan);
                                       }
                     });

bot.on('message', msg => {
 if (msg.content === prefix + 'fabriquant') {
 msg.reply('__Ce bot a été créé par Leghiar (Karnak)__');
 console.log('Commande effectuée'.america);
                                                            }
                                          });


bot.on('message', msg => {
  if (msg.content === prefix + 'çava?') {
    msg.channel.send('oui mais on est trop dans mon ally sa me soule...');
                                 }
	                    });

bot.on('message', msg => {
  if (msg.content === prefix + 'faistoisoigner') {
    msg.channel.send('Avec des antibio');
                                 }
                            });
