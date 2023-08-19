const arr = document.cookie.split('=');
let IP = arr[1];
let response = fetch(`https://ipinfo.io/${IP}/geo`);
response.then((response)=>{
    return response.json()
}).then((value2)=>{
    console.log(value2);
})

