var database = [
    {
        username: "nolbu",
        password: "supersecret"
    },
    {
        username: "Sally",
        password: "123"
    },
    {
        username: "Ingrid",
        password: "777"
    }    
];

var newFeed = [
    { 
        username: 'Bobby',
        timeline: "So tired form all that learning"
    },
    {
        username: "Sally",
        timeline: "Javascript is sooo coool!"
    }
];

var userNamePrompt = prompt("What's your user name?");
var passwordPrompt = prompt("What's your passwrod?");

function isUserValid(username, password){
    for(var i=0 ; i<database.length; i++){
        if(username === database[i].username && password === database[i].password){
            return true;
        }        
    }
    return false;
}

function signIn(user, pass){

    if(isUserValid(user, pass)){
        console.log(newFeed);
    } else {
        alert("Sorry, wrong username and password");
    }

}

signIn(userNamePrompt, passwordPrompt);

