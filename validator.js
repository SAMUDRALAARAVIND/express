const nodemailer = require("nodemailer");


//------------------------------------------signup form validator starts here----------------------------------------
class validator{
    constructor(e,u,p){
        this.email = e;
        this.username = u;
        this.password = p;
    }
    //return 0 if validation is success else return 1
    validateEmail(){
        var regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regEx.test(this.email);
    }
     validatePassword(){
        var regEx = /[^a-zA-Z0-9@$#%&*^\-_+]/g;
        var result = this.password.match(regEx);
        if(!result && this.password.length<=16 && this.password.length>=6){
            return true;
        }
        else{
            return false;
        }
    }
     validateUsername(){
        var regExp = /[^a-zA-Z0-9@$#%&*^\-_+]/g;
        var result = this.username.match(regExp);
        if(!result && this.username.length>=3 && this.username.length<=50){
            return true;
        }
        else{
            return false;
        }
    }
     validateForm(){
        var errorArray = [];
        if(!this.validateEmail()) //validateEmail will return true if email is valid
           errorArray.push("e");
        if(!this.validatePassword)
           errorArray.push("p");
        if(!this.validateUsername()==1)
           errorArray.push("u");
       return errorArray;
    }
}
//#########################################signup form validation ends here########################################################




//--------------------------------------------email verification starts here-----------------------------------------------------
class emailSender{
    constructor(e){
        this.userEmail = e;
        this.code="";
    }
     createHtmlElement(){
        this.code = Math.floor(Math.random()*1000000+1);
        this.code = this.code.toString();
        var textHtml = `<h1 style="text-align:center;color:aqua;border:1px solid black">Get Post</h1>
        <h6 style="color:blue;">Thank you for Registrations!</h6>
        <p>The six digit passcode for your account validation is: <h5>${this.code}</h5></p>
        `;
        var transmitter = {
            service:"Gmail",
            auth:{
                user:"anonymousxyz1708@gmail.com",
                pass:"INDIAN@123"
            }
        }
        var receiver = {
            from:"samudralaaravind1708@gmail.com",
            to:this.userEmail,
            subject:'getpost email verification',
            html:textHtml
        }
        var result ="mowa";
        var transporter = nodemailer.createTransport(transmitter);
        transporter.sendMail(receiver,(err,info)=>{
            if(err) console.log(`Error occured ${err}`);
            else console.log("successfully sent mail");
        });

    }
     insertPasscode(){
        return `INSERT INTO passcode(email,code) VALUES('${this.userEmail}','${this.code}');`;

    }

}

//#########################################email verification ends here####################################################











module.exports = {validator,emailSender};