const Discord = require("discord.js")
const system = require("../system");

function f_HelplineList(){
  let lw = system.raid.lw;
  let gos = system.raid.gos;
  let dsc = system.raid.dsc;
  let vog = system.raid.vog;

  if(system.dc.hlactive){
    const list = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Helpline')
    .setDescription('Pro durchlauf helfen wir '+ (6-system.raid.carrys).toString()+ ' Spielern')
    .setThumbnail("https://i.imgur.com/7u5Chvu.jpg")

    if(lw.length > 0 && gos.length > 0){
      list.addFields(
            { name: 'Letzter Wunsch', value: lw, inline: true },
            { name: '\u200b', value: '\u200b', inline: true},
            { name: 'Garten der Erlösung', value: gos, inline: true }
            )
    }
    else if(lw.length > 0 && gos.length <= 0){
      list.addFields(
            { name: 'Letzter Wunsch', value: lw, inline: true },
            { name: '\u200b', value: '\u200b', inline: true},
            { name: '\u200b', value: '\u200b', inline: true}
            )
      }
    else if(lw.length  <= 0 && gos.length > 0){
      list.addFields(
            { name: 'Garten der Erlösung', value: gos, inline: true },
            { name: '\u200b', value: '\u200b', inline: true},
            { name: '\u200b', value: '\u200b', inline: true}
            )
    }

    if(dsc.length > 0 && vog.length > 0){
      list.addFields(
            { name: 'Tiefsteincrypta', value: dsc, inline: true },
            { name: '\u200b', value: '\u200b', inline: true},
            { name: 'Glässerne Kammer', value: vog, inline: true }
          )
    }
    else if(dsc.length > 0 && vog.length  <= 0){
      list.addFields(
            { name: 'Tiefsteincrypta', value: dsc, inline: true },
            { name: '\u200b', value: '\u200b', inline: true},
            { name: '\u200b', value: '\u200b', inline: true}
            )
    }
    else if(dsc.length <= 0 && vog.length > 0){
      list.addFields(
            { name: 'Gläserne Kammer', value: vog, inline: true },
            { name: '\u200b', value: '\u200b', inline: true},
            { name: '\u200b', value: '\u200b', inline: true}
            )
      }
    return list;
  }
}

module.exports = {f_HelplineList};