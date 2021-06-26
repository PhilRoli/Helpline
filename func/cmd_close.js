const system = require("../system");

function f_HelplineClose(dcclient, input) {
  let ret = 0;
  input.member.roles.forEach((x) => { 
    system.dc.roleID.forEach((y) => {
      if( x == y) {
        ret = 1;
      }
    })
  })
  

  if(ret == 1){
    if(system.dc.hlactive == true){
      system.dc.hlactive = false;
      ret = "Die Raid-Helpline ist ab jetzt geschlossen. Vielen Dank an alle Guides und bis zum nächsten mal!"
    }
    else ret = "Die Raid-Helpline ist bereits geschlossen.";
  }
  else ret = undefined;
  return ret; 
}

module.exports = {f_HelplineClose};