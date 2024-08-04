const{ REST,Routes} =require("discord.js");
const commands=
[{
    name:"create",
    description:"Create a new short url",
},
];

// const rest =   new REST({ version: '10' }).setToken();

try {
  console.log('Started refreshing application (/) commands.');

   rest.put(Routes.applicationCommands("1269498324919128155"), { body: commands, });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}