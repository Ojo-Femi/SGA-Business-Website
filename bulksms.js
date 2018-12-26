const credentials = {
    apiKey: process.env.AFRICAS_TALKING,
    username: 'sandbox'
}

// Initialize the SDK
const AfricasTalking = require('africastalking')(credentials);

// Get the SMS service
const sms = AfricasTalking.SMS;

function sendMessage(){
    const options = {
        // Set the numbers you want to send to in international format
        to: ['+2349097563523', '+2348159796698'],
        // Set your message
        message: "I'm an Ojo-Femi and its ok, I sleep all day, work all night work all day yet again"
    }

    // That’s it, hit send and we’ll take care of the rest
    sms.send(options).then( response => {
        console.log(response);
    }).catch( error => {
        console.log(error);
    });
}

sendMessage();