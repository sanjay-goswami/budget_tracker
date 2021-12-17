const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000
const {OAuth2Client} = require('google-auth-library');
const Client_ID = '318686411318-8ne96sin1p0chpk0o41vij5587v3glgl.apps.googleusercontent.com'
const client =new OAuth2Client(Client_ID);


verify = async ()=>{
    const ticket = await client.verifyIdToken({
        idToken:token,
        audeience : Client_ID
    });
    const payload = ticket.getPayload();
    const userid = payload['sub'];
}
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/',require('./routers'));
app.get('/',(req,res)=>{
    res.render('login');
})
app.post('/tokenSignIN',async (req,res)=>{
    let token = req.body.token;
    verify = async ()=>{
    const ticket = await client.verifyIdToken({
        idToken:token,
        audeience : Client_ID
    });
    const payload = ticket.getPayload();
    const userid = payload['sub'];
    // console.log(userid);
    console.log(payload);
}
verify().catch(console.error);

    res.json({user:token});
})
app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    console.log(`server is running on ${port}`);
})