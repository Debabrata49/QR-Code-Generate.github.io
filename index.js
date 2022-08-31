let qr_code = document.querySelector("#submit");
let qr_img = document.querySelector("#code_img");
let loader = document.querySelector("#loading");
let input = document.querySelector("#input");



qr_code.addEventListener("click",()=>{
    if (input) {
        loader.style.display ="block";
    } else {
        document.getElementById('alert').innerHTML = "Please enter your text..";
        var content = document.getElementById('alert').innerHTML;
        
        alert(content);
    }
    

    code_img.onload = function(){
        loader.style.display = "none";
    }

    let qr_value = input.value; 
    if(!qr_value) return;
    let api =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qr_value}`;

    code_img.src = api;

})

