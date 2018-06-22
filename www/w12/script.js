var Database = [
    {
        username:"slut",
        password:"ohyes"
    },
    {
        username:"hoe",
        password:"ohyes"
    },
    {
        username:"beach",
        password:"ohyes"
    }
];

var newsFeed = [
    {
        username:"slut",
        timeline:"Good to see you slut"
    },
    {
        username:"hoe",
        timeline:"Good to see you hoe"
    },
    {
        username:"beach",
        timeline:"Good to see you bitch"
    }
]

var usernamePrompt = prompt("What is your username?")
var passwordPrompt = prompt("What is your password?")

function isUserValid(username,password){
    for(var i=0;i<Database.length;i++){
        if(username === Database[i].username &&
        password === Database[i].password){
            return true;
        }
    }
    return false;
}

function signin(username,password){
    if(isUserValid(username,password)){
        console.log(newsFeed);
        alert("congratulations motherfucker")
    }else{
        alert("Sorry,wrong username and password.")
    }
}

signin(usernamePrompt,passwordPrompt);