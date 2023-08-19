        let IP = '';
        $.getJSON("https://api.ipify.org?format=json", function(data) {
        $(".IP").text(data.ip);
        IP = data.ip;
        })
        
        const button = document.querySelector("button");
        button.addEventListener("click",()=>{
            document.cookie=`IP = ${IP}; path=/info.html`
            window.location.href='http://127.0.0.1:5500/info.html'
        })