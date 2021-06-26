async function f_setupslash(dcclient) {

  dcclient.api.applications(dcclient.user.id).guilds(process.env.SERVERID).commands.post({data: {
    name: 'open',
    description: 'Raidhelpline öffnen - Admin Only - nur in #raid-helpline verfügbar',
    options: [{
      type: 4,
      name: "guides",
      description: "Wie viele Spieler Guiden.",
      required: true
    }]
  }})

  await new Promise(r => setTimeout(r, 2000));

  dcclient.api.applications(dcclient.user.id).guilds(process.env.SERVERID).commands.post({data: {
    name: 'list',
    description: 'Zeigt die aktiven Raidlisten - nur in #raid-helpline verfügbar'
  }})

  await new Promise(r => setTimeout(r, 2000));

  dcclient.api.applications(dcclient.user.id).guilds(process.env.SERVERID).commands.post({data: {
    name: 'close',
    description: 'Schließe die RaidHelpline - Admin Only - nur in #raid-helpline verfügbar',
  }})

  await new Promise(r => setTimeout(r, 2000));

  dcclient.api.applications(dcclient.user.id).guilds(process.env.SERVERID).commands.post({data: {
    name: 'join',
    description: 'Tritt der RaidHelpline bei - nur in #raid-helpline verfügbar',
    options: [{
      type: 3,
      name: "raid",
      description: "zB. \"Letzer Wunsch\" oder \"TSK\"",
      required: true
    }]
  }})

  await new Promise(r => setTimeout(r, 2000));

  dcclient.api.applications(dcclient.user.id).guilds(process.env.SERVERID).commands.post({data: {
    name: 'leave',
    description: 'Verlasse die RaidHelpline - nur in #raid-helpline verfügbar',
      options: [{
      type: 3,
      name: "raid",
      description: "zB. \"Letzer Wunsch\" oder \"TSK\"",
      required: true
    }]
  }})

  await new Promise(r => setTimeout(r, 2000));

  dcclient.api.applications(dcclient.user.id).guilds(process.env.SERVERID).commands.post({data: {
    name: 'done',
    description: 'Entferne Spieler von der Liste - Admin Only - nur in #raid-helpline verfügbar',
      options: [{
      type: 3,
      name: "guided1",
      description: "Guided Nr. 1",
      required: true},
      {
      type: 3,
      name: "guided2",
      description: "opt. Guided Nr. 2",
      required: false},
      {
      type: 3,
      name: "guided3",
      description: "opt. Guided Nr. 3",
      required: false}]
  }})

  console.log("All commands up and ready!");
}

module.exports = {f_setupslash};