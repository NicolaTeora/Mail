//dichiarazione variabili ed array
let userEmail;
const userEmailElement = document.getElementById('user_email');
const submit = document.getElementById('submit');
const listEmail = ['nikxo@boolean.com', 'class117@boolean.com', 'pincopallo@email.it'];

//creo l'evento per generare il controllo
submit.addEventListener("click", function(){
    userEmail = userEmailElement.value;
    //console.log(userEmail);

    let correct = false;

    for (i = 0; i < listEmail.length; i++){
        if ( userEmail == listEmail[i]){
            correct = true;            
            console.log(correct);
        };  
    };

    if ( correct == true) {
        alert('Identità Confermata! Benvenuto!');    
    } else {
        alert('ATTENZIONE!! Accesso Negato!');
    }

});

  document.getElementById('suggestion').innerHTML = `
    <p>${listEmail}</p>`;