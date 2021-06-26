const Discord = require('discord.js');
const client = new Discord.Client();
const system = require('./system');
const setup = require('./func/setupslash');
const cmd_open = require('./func/cmd_open');
const cmd_close = require('./func/cmd_close');
const cmd_join = require('./func/cmd_join');
const cmd_list = require('./func/cmd_list');
const cmd_leave = require('./func/cmd_leave');
const cmd_done = require('./func/cmd_done');
require('dotenv').config();
let test;

client.login(process.env.TOKEN);

client.on('ready', () => {
	setup.f_setupslash(client);
});

client.ws.on('INTERACTION_CREATE', async (interaction) => {
	let output = 1;
	//console.log(interaction.data.name) <-- Command
	//console.log(interaction.data.options[].value) <-- para
	//console.log(interaction.member.user.username) <-- username
	if (interaction.channel_id == process.env.CHANNELID) {
		switch (interaction.data.name.toUpperCase()) {
			case 'OPEN':
				output = cmd_open.f_HelplineOpen(client, interaction);
				break;
			case 'CLOSE':
				output = cmd_close.f_HelplineClose(client, interaction);
				break;
			case 'JOIN':
				output = cmd_join.f_HelplineJoin(client, interaction);
				break;
			case 'LEAVE':
				output = cmd_leave.f_HelplineLeave(client, interaction);
				break;
			case 'LIST':
				output = 0;
				break;
			case 'DONE':
				output = cmd_done.f_HelplineDone(client, interaction);
				break;
		}

		//Response
		if (output == 0) {
			output = cmd_list.f_HelplineList();
			client.api.interactions(interaction.id, interaction.token).callback.post({
				data: {
					type: 4,
					data: {
						embeds: [ output ]
					}
				}
			});
		} else if (output != 0 && output != -1 && output != -2) {
			client.api.interactions(interaction.id, interaction.token).callback.post({
				data: {
					type: 4,
					data: {
						content: output
					}
				}
			});
		}
	}
});
