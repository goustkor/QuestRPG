module.exports = async (client, member) => {
	
	const embedPublic = {
	  "color": 8311585,
	  "timestamp": new Date(),
	  "footer": {
		"icon_url": client.user.avatarURL,
		"text": "#welcome_message_date"
	  },
	  "author": {
		"name": member.user.username,
		"icon_url": member.user.avatarURL
	  },
	  "fields": [
		{
		  "name": "#welcome_message_title",
		  "value": "#welcome_message_public"
		}
	  ]
	};

	const embedPrivate = {
	  "color": 8311585,
	  "timestamp": new Date(),
	  "footer": {
		"icon_url": client.user.avatarURL,
		"text": "#welcome_message_date"
	  },
	  "author": {
		"name": member.user.username,
		"icon_url": member.user.avatarURL
	  },
	  "fields": [
		{
		  "name": "#Welcome_message_private_field_1_title",
		  "value": "#welcome_message_private_field_1_content"
		}
	  ]
	};
	//member.guild.channels.find("name","general").send({embedPublic});
	//client.send({embedPrivate});
	client.users.get(member.user.id).send({embed: embedPrivate});
	//console.log(member);
}