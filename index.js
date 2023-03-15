function switchOn(){
    output.innerHTML = '<img src="/download-removebg-preview (14).png" alt="">'  
    button.innerHTML = '<button class="btn btn-outline-dark fs-5 mt-3" id="btn" onclick="switchOff()">OFF</button>'
    body.style.backgroundColor = 'black' 
}

function switchOff(){
output.innerHTML = '<img src="/download-removebg-preview (13).png" alt="">'
button.innerHTML = '<button class="btn btn-outline-dark fs-5 mt-3" id="btn" onclick="switchOn()">ON</button>'
body.style.backgroundColor = 'white'
}