const { Client, GatewayIntentBits } =require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages,  GatewayIntentBits.MessageContent], });


client.on("messageCreate",(message)=>{ 
    if(message.content.startsWith('create')){
        const url=message.content.split('create')[1];
        return message.reply({
            content:"generating Short Id for"+url,
        })
    }
    if(message.author.bot) return;
message.reply({
    content:"Hi from anirban",
});
});

client.on('interactionCreate',(interaction)=>{
    console.log(interaction);
    interaction.reply("Pong!!");

})

