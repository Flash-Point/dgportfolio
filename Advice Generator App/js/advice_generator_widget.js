document.getElementById('generator-button').addEventListener('click', () => {
    const adviceId = document.getElementById('adviceID');
    const adviceText = document.getElementById('advice-text');
    //create and send new advice xhr from adviceslip.com
    const xhr = new XMLHttpRequest();
    xhr.open('GET', "https://api.adviceslip.com/advice");
    xhr.send();
    xhr.responseType = 'json'; // ensure JSON response received

    xhr.onload = () => {
        //if the state of the client is 4 (DONE) and if the status code is 200 (successful)
        //update the text of the html elements with data received from the server
        if (xhr.readyState == 4 || xhr.status == 200) {
            const data = xhr.response;
            adviceId.innerHTML = data['slip']['id'];
            adviceText.innerHTML = data['slip']['advice'];
        } else {
            console.log(xhr.status);
        }
    }
});