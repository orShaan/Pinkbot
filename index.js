const dbd = require("dbd.js")

const bot = new dbd.Bot({
  mobile: false, // you can change it to "true" if you want a mobile status
  token: "BOT_TOKEN", // change BOT_TOKEN with your bot token
  prefix: ['$getServerVar[prefix]', '<@!$clientID>', '<@$clientID>'] // you may change the bot's main prefix in vars.js
})

bot.onMessage({
  guildOnly: false // commands will work in dms. set "true" for commands to work in guilds only
})

bot.status({
    text: `with $serverCount servers`, // put any text
    type: "PLAYING", // LISTENING, PLAYING, WATCHING, COMPETING
    status: "online", // online, dnd, idle, invisible
    time: 75 // amount of times where you can change the bot status (if have multiple statuses)
    })

bot.status({
    text: `In Bedwars Solo`,
    type: "COMPETING",
    status: "online", 
    time: 75 
    })
    
bot.status({
    text: `Music`, 
    type: "LISTENING", 
    status: "online", 
    time: 75
    })

bot.status({
    text: `How I Was Made By TotalPink`, 
    type: "WATCHING", 
    status: "online", 
    time: 75
    })

    // FOR STREAMING STATUS USE THIS
    // bot.status({
    // text: "text", 
    // type: "STREAMING", 
    // url: "enter url/link"
    //   })
    // remove `//` in each side

// dbd.js 2.2.6 version    

    bot.musicStartCommand({
      channel: "$channelID",
      code: `$sendMessage[{description:▶ Now playing - **[$songInfo[title]\\]($songInfo[url])**}{color:RANDOM}{thumbnail:$songInfo[thumbnail]}{timestamp:ms};no]`
      })

// for dbd.js latest version
// remove all `//`
// delete the code above

// bot.musicStartCommand({
//  channel: "$channelID",
//  code: `$sendMessage[{description:▶ Now playing - **[$songInfo[title]]($songInfo[url])**}{color:RANDOM}{thumbnail:$songInfo[thumbnail]}{timestamp:ms};no]`
//  })

      bot.musicEndCommand({
        channel: "$channelID",
        code: `$sendMessage[{description:⏹ There's no one playing music anymore. I'm leaving the Voice Channel!}{color:RANDOM}{delete:10s};no]`
        })

    bot.variables(require('./commands/vars.js'))

    bot.loadCommands('./commands')
