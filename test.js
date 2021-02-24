function validatePassword(password){
    var regEx = /[^a-zA-Z0-9@$#%&*^\-_+]/g;
    var result = password.match(regEx);
    console.log(result)
    if(!result && password.length<=16 && password.length>=6){
        return "correct";
    }
    else{
        return "wrong";
    }
}
console.log(validatePassword("Indian  @81881"))