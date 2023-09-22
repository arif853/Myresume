function chatBotOpen() {

    
    var BotBody = document.querySelector(".bot-body");
    var inputText = document.querySelector(".text");

    var displaySetting = BotBody.style.display ;
    

    if (displaySetting == 'block' ) {
        // clock is visible. hide it
        BotBody.style.display = 'none';
        inputText.value = "";
    }
    else {
    // clock is hidden. show it
    BotBody.style.display = 'block';
    }
  }

function start(){

    let res_msg =  document.createElement('div');
    res_msg.innerHTML = "Hello Myself Aco, How can I help you?";
    res_msg.setAttribute("class","left");

    document.getElementById('chat-body').appendChild(res_msg);

}

document.getElementById('send').addEventListener("click", function (e)
{
    e.preventDefault();
    console.log('Cliked');
    chatText()
    
});
document.getElementById('text').addEventListener("keypress", function (e)
{
    if(e.key == "Enter"){
        e.preventDefault();
        console.log('Cliked');
        chatText()
    }
});

function chatText(){
    var req = document.getElementById('text').value;

    if (req == undefined || req == ""){

    }
    else
    {
        let res = "";

        var greeting = ["hi","Hi", "Hello", "hello"]
        if(req == "Hi" || req == "hi" || req == "Hello" || req == "hello" || req == "Hey" || req == "hey"){
            res = "Hello there.";
        }
        else if(req == "Bye"|| req == "bye" || req == "See you later"|| req == "see you later" || req == "Goodbye" || req == "goodbye" || req == "Nice chatting to you")
        {
                res = "Bye! Come back again soon.";
        }
        else if(req == "Thanks"||req == "thanks" || req == "Thank you" || req == "thank you"|| req == "That's helpful"){
            res = "Happy to help!";
        }
        else if(req == "why"|| req == "how" || req == "when" || req == "I" || req == "you"){
            res = "Can't Understand Your Question";
        }
        else{
            res = "I can't understand..."
        }
        console.log(req);
        console.log(res);
        
        let msg_req =  document.createElement('div');
        let msg_res =  document.createElement('div');

        let Con1 =  document.createElement('div');
        let Con2 =  document.createElement('div');

        Con1.setAttribute("class", "msgCon1");
        Con2.setAttribute("class", "msgCon2");

        msg_req.innerHTML = req;
        msg_res.innerHTML = res;

        msg_req.setAttribute("class","right");
        msg_res.setAttribute("class","left");

        let message = document.getElementById('chat-body');

        message .appendChild(Con1);
        message .appendChild(Con2);

        Con1.appendChild(msg_req);
        Con2.appendChild(msg_res);

        document.getElementById('text').value = "";

        function scroll(){
            var scrollMsg = document.getElementById('chat-body');
            scrollMsg.scrollTop = scrollMsg.scrollHeight;
        }
        scroll();
    }
}