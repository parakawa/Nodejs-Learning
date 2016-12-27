var twilio = require("/twilio-node/lib");
var accountSid = 'ACc82cb9d8d150a80ef511a8dcb5dc5374'; // Your Account SID from www.twilio.com/console
var authToken = '463e1bbba7927d080261fc81bd0cd564';   // Your Auth Token from www.twilio.com/console
var client = new twilio.RestClient(accountSid, authToken);

client.messages.create({
    body: 'Hello from Node, Paty',
    to: '+511966965261',  // Text this number
    from: '+511966965261' // From a valid Twilio number
}, function(err, message) {
    console.log(message.sid);
});