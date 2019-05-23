const Discord = require('discord.js'); const client = new Discord.Client(); client.on('ready', () => { console.log(`Logged in as ${client.user.tag}!`); }); client.on('message', msg => { if (msg.content === 'h!ping') { msg.reply("Pong! Took "+Math.floor(client.ping())+"ms");} });


client.on('message', msg=>{
if (msg.content === 'h!boom'){
msg.channel.send("Bam");}

else if (msg.content === 'h!amaze me'){
msg.channel.send("You are amazed");}

else if (msg.content === 'h!hey'){
msg.channel.send("Hey there");}

else if (msg.content === 'h!info surreal'){
msg.channel.send("Surreal is a coder who thinks he is best coder but it isn't true. But he is funny. He is blogger");}

else if (msg.content === 'h!info surreal blog'){
msg.channel.send("One of the most amazing blog I have ever read. Here\'s a link for the blog\: \n https://surreal30.blogspot.com/");}

else if (msg.content === 'h!joke'){
msg.reply("See your face");}

else if (msg.content === 'h!lame'){
msg.channel.send("insert expression less emoji here -_-");}

else if (msg.content === 'h!info surreal instagram'){
msg.channel.send("Here\'s the link \: https://www.instagram.com/surreal_30/");}

else if (msg.content === 'h!logo surreal'){
msg.channel.send(surreal_logo.jpg);}


else if (msg.content === 'h!result'){
msg.reply("Aayega toh Modi hi!");}  
  
});
client.login(process.env.BOT_TOKEN);
