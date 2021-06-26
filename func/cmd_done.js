const system = require("../system");

function f_HelplineDone(dcclient, input){
  let ret = -2;
  input.member.roles.forEach((x) => { 
    system.dc.roleID.forEach((y) => {
      if( x == y) {
        ret = -1;
      }
    })
  })

  if (ret == -1){
    let playerid
    let player = [];
    let username;

    input.data.options.forEach((element) => { 
      player.push(element.value.toString());
      //playerid = playerid.value.toString().trim();
      //console.log(playerid)
      //username = await myCallbackFn(dcclient, playerid)
      //console.log(username)
      //if (username) player.push(username)
    })
    
    player.forEach((element) => { 

      locat = system.raid.lw.indexOf(element.toString())
      console.log(locat)
      if(locat > -1) {
        system.raid.lw.splice(locat, 1);
        ret = 0;
      }

      locat =  system.raid.gos.indexOf(element)
      if(locat > -1) {
        system.raid.gos.splice(locat, 1);
        ret = 0;
      }

      locat = system.raid.dsc.indexOf(element)
      if(locat > -1) {
        system.raid.dsc.splice(locat, 1);
        ret = 0;
      }

      locat = system.raid.vog.indexOf(element)
      if(locat > -1) {
        system.raid.vog.splice(locat, 1);
        ret = 0;
      }
      })
      console.log(system.raid.lw)
    }
  return ret;
}

async function myCallbackFn(dcclient,id){
    let response = await dcclient.guilds.cache.get(system.dc.guidlid).members.fetch(id.toString());
    let json = JSON.stringify(response);
    let myObj = JSON.parse(json);
    return (myObj["displayName"]);
}

module.exports = {f_HelplineDone};