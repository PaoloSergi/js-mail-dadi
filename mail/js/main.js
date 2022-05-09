const registeredUsersEmails = ["paolo88@email.com", "pina94@email.com", "giacomino@email.com", "stella@email.com", "maria-vittoria@email.com", "pincopallo@email.com", "francesca@email.com", "peppino@email.com", "carolina@email.com", "camilla@email.com"];

const inputEmail = document.querySelector('input[type=email]');
const loginButton = document.querySelector('input[type=submit]');

inputEmail.value = "";

loginButton.addEventListener("click",
    function(){
        let userEmail = inputEmail.value;
        let accessPermit = false;
        
        for (i=0; i<registeredUsersEmails.length; i++){
            if(userEmail === registeredUsersEmails[i]){
                accessPermit = true;
            }
        }

        if(accessPermit){
            document.querySelector(".welcomeBack").style.display = "block";
            document.querySelector(".login").style.display = "none";
        } else {
            document.querySelector(".notRegistered").style.display = "block";
            document.querySelector(".login").style.display = "none";
        }
    }
)