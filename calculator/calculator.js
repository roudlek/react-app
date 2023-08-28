var side1 = document.getElementById("side1");

function putSelectedNumber(n){
    const number = document.getElementById("number" + n).textContent;
    console.log(n);
    side1.textContent += n; 
    console.log(side1.textContent);
}

function removeLastNumber(){
    side1.textContent = side1.textContent.substring(0,side1.textContent.length - 1);
}

function operation(type){
    const operations = ['+','-','*','/'];
    var lastChar = side1.textContent[side1.textContent.length - 1];
    console.log(side1.textContent);
    console.log(lastChar);
    for(i = 0;i < operations.length; i++){
        if(type === operations[i] && lastChar !== type){
            side1.textContent += type;
        }
    }
}
function redoAll(){
    side1.textContent = "";
}