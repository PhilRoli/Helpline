const system = require("../system");

function f_HelplineJoin(dcclient, input) {
  let ret=-1;
  let raid = input.data.options[0].value.toString().trim().toUpperCase();

  if(system.dc.hlactive){
    switch(system.raid.raids[raid]) {
      case "LW":
        if(system.raid.lw.indexOf(input.member.user.username) == -1){
          system.raid.lw.push(input.member.user.username.toString());
          ret = 0;
        }
        break;
      case "GOS":
        if(system.raid.gos.indexOf(input.member.user.username) == -1){
          system.raid.gos.push(input.member.user.username.toString());
          ret = 0;
        }
        break;
      case "DSC":
        if(system.raid.dsc.indexOf(input.member.user.username) == -1){
          system.raid.dsc.push(input.member.user.username.toString());
          ret = 0;
        }
        break;
      case "VOG":
        if(system.raid.vog.indexOf(input.member.user.username) == -1){
          system.raid.vog.push(input.member.user.username.toString());
          ret = 0;
        }
        break;
      default:
        ret = -1;
        break;
    } 
  }
  return ret;
  }

  module.exports = {f_HelplineJoin};