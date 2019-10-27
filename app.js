'use strict';
const alexia = require('alexia');
const app = alexia.createApp();

app.onStart(() => {
    return {
        text: `<speak>
                    Bem vindo ao racatom uni la salle
                    <audio src="soundbank://soundlibrary/cartoon/amzn_sfx_boing_long_1x_01"/>
                    Diga algo
                </speak>`,
        card: {
            title: 'Bem vindo',
            content: 'Bora cantar? 👨‍🎤 🎉'
        },
        ssml: true,
        end: false
    };
});

app.intent('HelloIntent', 'Hello', () => {
    return {text:'Entendi nada ha ha ha',end:false};
});

app.intent('vai','vai', ()=>{
    return {
        text: "até breve, fui",
        end:true
    };
});


app.builtInIntent('cancel', 'Cancel it', () => 'Cancel it is');
app.builtInIntent('help', ['Help me please', 'Could you help me'], () => 'I shall help you');
app.builtInIntent('next', () => 'Your next item in basket is: Amazon Echo Device');
app.builtInIntent('no', () => 'No');
app.builtInIntent('pause', () => 'Pause');
app.builtInIntent('previous', () => 'Previous');
app.builtInIntent('repeat', () => 'Repeat');
app.builtInIntent('resume', () => 'Resume');
app.builtInIntent('startOver', () => 'Start Over');
app.builtInIntent('stop', () => 'Stop');
app.builtInIntent('yes', () => 'Yes');


//module.exports = app;
app.createServer().start();


// const options = {
//     path: '/', // defaults to: '/'
//     port: 8888 // defaults to: process.env.PORT or 8888
// };
// const server = app.createServer(options);