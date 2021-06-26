const system = require("../system");

function f_HelplineLeave(dcclient, input){
let ret;
let locat;
  let raid = input.data.options[0].value.toString().trim().toUpperCase();

  if(system.dc.hlactive){
    switch(system.raid.raids[raid]) {
      case "LW":
        locat = system.raid.lw.indexOf(input.member.user.username);
        if(locat > -1) system.raid.lw.splice(locat, 1);
        ret = 0;
        break;
      case "GOS":
        locat = system.raid.gos.indexOf(input.member.user.username);
        if(locat > -1) system.raid.gos.splice(locat, 1);
        ret = 0;
        break;
      case "DSC":
        locat = system.raid.dsc.indexOf(input.member.user.username);
        if(locat > -1) system.raid.dsc.splice(locat, 1);
        ret = 0;
        break;
      case "VOG":
        locat = system.raid.vog.indexOf(input.member.user.username);
        if(locat > -1) system.raid.vog.splice(locat, 1);
        ret = 0;
        break;
      default:
        ret = -1;
        break;
    } 
  }
  return ret;
  }

  module.exports = {f_HelplineLeave};