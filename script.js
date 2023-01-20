function changeBg(value){
    document.body.style.backgroundColor=value;
    let txt=document.getElementsByClassName("text");
    if(value=="#000000"||value=="#5b0892"){
        for(let elm of txt){
            elm.style.color= "white";
        }}
        else{
            for(let elm of txt){
                elm.style.color= "black";
            }
        }
    }
