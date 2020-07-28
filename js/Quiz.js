function obento(language){
    var message = "" ;
    if(language == 1){
        message = "不正解です。";
    } else if (language == 2){
         message = "正解です！！！　「三度一致だから」です！";
    } else if (language == 3){
         message = "不正解です。";
    }else if (language == 4){
        message = "不正解です。";
    }else if (language == 5){
        message = "３回、同じだったということは？";
    }
    
    alert(message);
}

function tantei(language){
    var message = "" ;
    if(language == 1){
        message = "不正解です。";
    } else if (language == 2){
        message = "正解です！！！　「酢入り（推理）が好きだから」です！";
    } else if (language == 3){
         message = "不正解です。";

    }else if (language == 4){
        message = "名探偵は事件を○○するのが好き！";
    }
    
    alert(message);
}

function geinin(language){
    var message = "" ;
    if(language == 1){
        message = "不正解です。";
    } else if (language == 2){
        message = "不正解です。";
    } else if (language == 3){
         message = "正解です！！　「あたまがE（良い）だから」です！";

    }else if (language == 4){
        message = "でがわ…えがしら…やまさき…の誰？";
    }
    
    alert(message);
}



