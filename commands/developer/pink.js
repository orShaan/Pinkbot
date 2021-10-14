module.exports = ({
    name: "pink",
    aliases: ['e'],
    description: "pink-command",
    usage: "pink <code/function>",
    category: "developer",
    code: `$pink[$message]
    $onlyIf[$message[1]!=;{description: Add a message!}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;{description: Please do this in a guild!}{color:RANDOM}]
    $onlyForIDs[$botOwnerID;{description:❌ You are not my Developer}{color:RANDOM}]`
})
