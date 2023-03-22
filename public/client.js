// const { sendMessage } = require("react-chat-engine");

const socket= io()

let textarea=document.querySelector('#textarea')
let messagearea=document.querySelector('.message_area')


let name1;

do{
name1=prompt('Enter Name For Chatting:-')
}while(!name1)

const text=document.querySelector('#text');
text.innerText=name1;

// textarea.addEventListener('keyup', (e) =>{
//     if(e.key==='Enter'){

//     const res1=textarea.value;
//     if(res1===""){}
//     else{
//         sendMess(e.target.value);
//     }
    
      
//     }
// })



function sendMess(message){
    let msg={
       user: name1,
       message: message.trim()
    }

    appendMessage(msg,'outgoing')
    scrollTo();
   
  textarea.value="";
   song();
    // sending server//
    socket.emit('message', msg)
}

function appendMessage(msg,type){
 let mainDiv=document.createElement('div')
 let className=type
 mainDiv.classList.add(className,'message')
 var dit = new Date().toLocaleTimeString() // for now

 let markup= `
  
 <p>${msg.message}

 <p style="margin-top:3px"></p>
 <p style="color:black;font-size:13px;margin-left:30px;
 position:relative">
  ${dit}
 </p>
   
 </p>
 <h4>You.</h4>
 `
 mainDiv.innerHTML=markup
 messagearea.appendChild(mainDiv)

}

function appendMessage1(msg,type){
    let mainDiv=document.createElement('div')
    let className=type
    mainDiv.classList.add(className,'message')
    var dit = new Date().toLocaleTimeString() // for now

    let markup= `
     
    <h4>${msg.user}.</h4>
    <p>${msg.message}
    <p style="margin-top:3px"></p>
 <p style="color:black;font-size:13px;margin-left:30px;
 position:relative">
  ${dit}
 </p>
    </p>
    
    `
    mainDiv.innerHTML=markup
    messagearea.appendChild(mainDiv)
   
   }

   function song(){
    var audio =new Audio('Tink_sound(256k).mp3')
    audio.play();
   }
// recive
socket.on('message',(msg) =>{
    appendMessage1(msg,'incoming')
    scrollTo();
    song();
})

function scrollTo(){
    messagearea.scrollTop=messagearea.scrollHeight

}

function img(){
    const res=textarea.value;
    if(res===""){}
    else{
        sendMess(res);
    }
}

document.getElementById('out').addEventListener('click',()=>{
    window.location.href="/login.html";
})
