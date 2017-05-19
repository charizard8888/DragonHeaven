'use strict';

const color = require('../config/color');
const fs = require('fs');
const parseLog = function(line) {
	if(line.includes('|c|')) {
		let timestamp = line.split('|c|')[0].trim(), mes = line.split('|c|')[1];
		if(line.split('|c|').length > 2) {
			for(let i=2; i<line.split('|c|').length; i++) {
				mes = mes + line.split('|c|')[i];
			}
		}
		return `[${timestamp}] ${mes.replace('|',': ').trim()}`;
	}
	else if(line.includes('|j|')) {
		let timestamp = line.split('|j|')[0].trim(), user = line.split('|j|')[1];
		if(line.split('|j|').length > 2) {
			for(let i=2; i<line.split('|j|').length; i++) {
				user = user + line.split('|j|')[i];
			}
		}
		return `(${timestamp}) ${user.trim()} joined`;
	}
	else if(line.includes('|l|')) {
		let timestamp = line.split('|l|')[0].trim(), user = line.split('|l|')[1];
		if(line.split('|l|').length > 2) {
			for(let i=2; i<line.split('|l|').length; i++) {
				user = user + line.split('|l|')[i];
			}
		}
		return `(${timestamp}) ${user.trim()} left`;
	}
	else if(line.includes('|userstats|')) return "";
	return line;
};
exports.commands = {
	//Roomlog code by Spandan
	roomlog: function (target, room, user, connection) {
		if(!Config.logchat) return this.errorReply("Roomlogs are disabled for this server. (Did you mean: modlog?)");
		if(!this.can("modlog") || (room === 'theadminchat' && !this.can("cdeclare"))) return;
		let path = 'logs/chat/'+room, list = fs.readdirSync(path);
		let date = target.split('date,')[1], month = target.split('month,')[1];
		if(date && date !== "") {
			date = date.trim();
		}
		if(month && month !== "") {
			month = month.trim();
		}
		let func = target.split(",")[0];
		switch(func)
		{
			case undefined:
			case "":
				let text= `|uhtml|roomlog${user.userid}|<div class="infobox"><p style="margin: 2px 0 5px 0"> <strong style="font-size: 11pt">Roomlogs for ${room}</strong></p><div style="margin-top: 5px">`;
				for(let i=0; i<list.length-1; i++) {
					text = `${text}<button class="button" value="/roomlog month,${list[i]}" name="send" title="Roomlogs for ${list[i]}">${i+1}. <strong>${list[i]}</strong>`;
				}
				let today = fs.readFileSync(`logs/chat/${room.id}/today.txt`).toString().split('\n').map(parseLog);
				try {
                                        Tools.uploadToHastebin(today.join('\n'), function (r, link) {
                                                link = "https://hastebin.com/raw/"+link.split('/')[link.split('/').length-1];
                                                if (r) this.sendReplyBox(`<a href="${link}">Today's Roomlog</a>`);
                                                else return this.sendReplyBox("Hastebin is probably rekt; Please try again later.");
                                        }.bind(this));
                                }
                                catch (e) {
                                        return this.errorReply("Error Uploading file to hastebin; Hastebin is probably down, please try again later.");
                                }
				this.sendReply(text+"</div></div>");
				break;
			case "year":
				let tet= `|uhtmlchange|roomlog${user.userid}|<div class="infobox"><p style="margin: 2px 0 5px 0"> <strong style="font-size: 11pt">Roomlogs for ${room}</strong></p><div style="margin-top: 5px">`;
				for(let i=0; i<list.length-1; i++) {
					tet = `${tet}<button class="button" value="/roomlog month,${list[i]}" name="send" title="Roomlogs for ${list[i]}">${i+1}. <strong>${list[i]}</strong>`;
				}
				this.sendReply(tet+"</div></div>");
				break;
			case "month":
				try {
					let text = `|uhtmlchange|roomlog${user.userid}|<div class="infobox"><p style="margin: 2px 0 5px 0"> <strong style="font-size: 11pt">Roomlogs for ${room} - ${month}</strong></p><div style="margin-top: 5px">`;
					list = fs.readdirSync(`${path}/${month}`);
					for(let i=0; i<list.length-1; i++) {
						text = `${text}<button class="button" value="/roomlog date,${list[i].substring(0,10)}" name="send" title="Roomlog for ${list[i].substring(0,10)}">${i+1}. <strong>${list[i].substring(0,10)}</strong>`;
					}
					this.sendReply(`${text}</div><div style="margin-top: 7px ; padding-left: 12px"><button value="/roomlog year" name="send" title="Go Back to the month menu"><small>(Back)</small></button></div></div>`);
				}
				catch (e) {
					this.parse('/help roomlog');
				}
				break;
			case "date":
				let data = "";
				path = `logs/chat/${room}/${date.substring(0,7)}/${date}.txt`;
				try {
					data = fs.readFileSync(path).toString().split('\n');
				}
				catch (e) {
					return this.errorReply("Error: Invalid Date, or logs for that date do not exist.");
				}
				this.sendReply('|uhtmlchange|roomlog' + user.userid + '|<b><font color = "red" size=4>Uploading to hastebin........</font></b>');
				data = data.map(parseLog).join('\n');
				try {
					Tools.uploadToHastebin(data, function (r, link) {
						link = "https://hastebin.com/raw/"+link.split('/')[link.split('/').length-1];
						if (r) return this.sendReply(`|uhtmlchange|roomlog${user.userid}|<font size = 4 color = "green"><a href="${link}">Click here - Roomlog for ${date}</a></font><br /><div style="margin-top: 7px ; padding-left: 12px"><button value="/roomlog month,${date.substring(0,7)}" name="send" title="Go Back to the date menu"><small>(Back)</small></button></div>`);
						else this.sendReplyBox("An Error Occured.");
					}.bind(this));
				}
				catch (e) {
					this.errorReply("Error Uploading file to hastebin.");
				}
				break;
			default:
				this.parse('/help roomlog');
		}
	},
	roomloghelp: ["/roomlog - Generates a hastebin link to show the room logs for that date.",
		      "Requires: & ~"],
	reportbug: function(target, room, user, connection) {
		if(!target || target === ' ' || target === '') return this.parse('/help reportbug');
		if(!user.autoconfirmed || target.length < 10 || !target.includes(' ')) return;
		for (let roomid of ['development', 'theadminchat']) {
			let curRoom = Rooms(roomid);
			if (curRoom) curRoom.add(`|raw|<b>Bug Report from <font color="${color(user.userid)}">${Chat.escapeHTML(user.name)}</font></b><br /><ul>"${Chat.escapeHTML(target)}"</ul>`).update();
		}
		let d8 = new Date().toJSON();
		this.sendReply("Your report has been successfully sent to the developers. Thank you for your contribution! :)");
		fs.appendFileSync('logs/bugreports.txt', `\n[${d8.substring(0,10)} at ${d8.substring(11,d8.length-5)}] ${user.name} reported: '${target}'`);
	},
	reportbughelp: ["/reportbug <message> - Sends a bug report to server developers. Any kinds of spam will be autodeleted. You have to be an autoconfirmed user for this to work."],
	news: function (target, room, user, connection) {
		if (!target || target === ' ' || target === "view" || target === "show") return this.popupReply(`|html|${Chat.news()}`);
		if (!this.can('makechatroom')) return;
		if (toId(target) === 'current' || toId(target) === 'viewhtml') {
			return this.sendReplyBox(`<b>The source for the current news</b>:<br><br> ${Chat.escapeHTML(Chat.ServerNews || Chat.news())}`);
		}
		let str = '\n----------\n' + target + "\n";
		fs.appendFileSync('./logs/news.txt', str);
		delete Chat.ServerNews;
		Rooms.global.modlog(`${user.name} set news to "${target}"`);
		let modlogs = `|html|<font color = "${color(user.userid)}">${user.name}</font> has updated the news. <button name="send" value="/news view">Click here</button> to view the updated version`;
		['staff', 'upperstaff', 'theadminchat'].forEach(room => {
			Rooms(room).send(modlogs);
		});
		this.sendReply(`|html|Success!!!! <button name = "send" value = "/news view">Click here</button> to view the news.`);
	},
	newshelp: [
		"/news or /news view: View the server news.",
		"/news current or /news viewhtml: View the source for the the news. Requires: & ~",
		"/news <html>: Set server news. Requires: & ~",
	],
	donotclickthisbutton: function (target, room, user) {
		if (!target && !this.can('modlog')) return;
		if (!target) {
			this.room.add('|uhtml|donotclickthisbutton|<button name = "send" value = "/donotclickthisbutton dbksfgbksbhsdgbib"><font size = 5>DO NOT Click this Button.</font></button>');
			return;
		}
		if (target.trim() === 'dbksfgbksbhsdgbib') {
			this.room.add(`|uhtmlchange|donotclickthisbutton|<font color = "red"><b>${user.name} was asked to not click the button, but yet he did. What the hell</b></font>`);
		}
	},
	sayhtml: function (target, room, user) {
		if (!this.can('addhtmlbox')) return;
		if (!target) return this.parse('/help sayhtml');
		let d8 = new Date().toJSON();
		let mess = `<div class="chat chatmessage-${user.userid} mine"><small>[${d8.substring(11,d8.length-5)}] </small><b><font color="${color(user.userid)}"><small>${room.auth[user.userid] || user.group}</small><span class="username" data-name="${Chat.escapeHTML(user.name)}">${Chat.escapeHTML(user.name)}</span></font></b>:</strong> <em>${target}</em></div>`;
		room.add(`|html|${mess}`).update();
	},
	sayhtmlhelp: ["/sayhtml <html>: Say HTML. Requires: * & ~"],
};
