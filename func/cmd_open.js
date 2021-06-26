const system = require("../system");

function f_HelplineOpen(dcclient, input) {
  let ret = 0;
  input.member.roles.forEach((x) => { 
    system.dc.roleID.forEach((y) => {
      if( x == y) {
        ret = 1;
      }
    })
  })
  

  if(ret == 1){
    if (system.dc.hlactive == false){
      system.raid.carrys = input.data.options[0].value.toString().trim();
      system.dc.hlactive = true;
      ret = "Die Raid-Helpline ist ab jetzt geöffnet!";
    }
    else ret = "Die Raid-Helpline ist bereits offen."
  }
  else ret = undefined;
  return ret; 
}

module.exports = {f_HelplineOpen};