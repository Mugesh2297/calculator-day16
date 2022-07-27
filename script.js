let division = document.createElement('div');
division.setAttribute('class','div');
document.body.append(division);

let division1 = document.createElement('div');
division1.setAttribute('class','div1');
division.appendChild(division1);

let textbox = document.createElement('input');
textbox.setAttribute("type", "input");
textbox.setAttribute('id','id1');
textbox.placeholder="0";
division1.appendChild(textbox);

var result = document.getElementById('id1');
console.log(result);

let button1 = document.createElement('button');
button1.setAttribute('class','button1');
button1.setAttribute('id','clear');
var a = document.createTextNode("C");
button1.addEventListener('click', ()=>{
    result.value="";
    console.log("hello")
})
button1.appendChild(a);
division1.appendChild(button1);

let button2 = document.createElement('button');
button2.setAttribute('class','button1');
var b = document.createTextNode("DEL");
button2.setAttribute('id','del');
button2.addEventListener('click', ()=>{
    result.value=result.value.slice(0,-1);
    console.log("hello")
})
button2.appendChild(b);
division1.appendChild(button2);

let button3 = document.createElement('button');
button3.setAttribute('class','button1');
var c = document.createTextNode(".");
button3.addEventListener('click', ()=>{
    result.value+='.';
    console.log("hello")
})
button3.appendChild(c);
division1.appendChild(button3);

let button4 = document.createElement('button');
button4.setAttribute('class','button1');
var d = document.createTextNode("*");
button4.addEventListener('click', ()=>{
    result.value+='*';
    console.log("hello")
})
button4.appendChild(d);
division1.appendChild(button4);

let button5 = document.createElement('button');
button5.setAttribute('class','button1');
var e = document.createTextNode("7");
button5.setAttribute('id','button1');
button5.addEventListener('click', ()=>{
    result.value+=7;
    console.log("hello")
})
button5.appendChild(e);
division1.appendChild(button5);

let button6 = document.createElement('button');
button6.setAttribute('class','button1');
var f = document.createTextNode("8");
button6.addEventListener('click', ()=>{
    result.value+=8;
    console.log("hello")
})
button6.appendChild(f);
division1.appendChild(button6);

let button7 = document.createElement('button');
button7.setAttribute('class','button1');
var g = document.createTextNode("9");
button7.addEventListener('click', ()=>{
    result.value+=9;
    console.log("hello")
})
button7.appendChild(g);
division1.appendChild(button7);

let button8 = document.createElement('button');
button8.setAttribute('class','button1');
var h = document.createTextNode("/");
button8.addEventListener('click', ()=>{
    result.value+='/';
    console.log("hello")
})
button8.appendChild(h);
division1.appendChild(button8);

let button9 = document.createElement('button');
button9.setAttribute('class','button1');
var i = document.createTextNode("4");
button9.addEventListener('click', ()=>{
    result.value+='4';
    console.log("hello")
})
button9.appendChild(i);
division1.appendChild(button9);

let button10 = document.createElement('button');
button10.setAttribute('class','button1');
var j = document.createTextNode("5");
button10.addEventListener('click', ()=>{
    result.value+='5';
    console.log("hello")
})
button10.appendChild(j);
division1.appendChild(button10);

let button11 = document.createElement('button');
button11.setAttribute('class','button1');
var k = document.createTextNode("6");
button11.addEventListener('click', ()=>{
    result.value+='6';
    console.log("hello")
})
button11.appendChild(k);
division1.appendChild(button11);

let button12 = document.createElement('button');
button12.setAttribute('class','button1');
var l = document.createTextNode("-");
button12.addEventListener('click', ()=>{
    result.value+='-';
    console.log("hello")
})
button12.appendChild(l);
division1.appendChild(button12);

let button13 = document.createElement('button');
button13.setAttribute('class','button1');
var m = document.createTextNode("1");
button13.addEventListener('click', ()=>{
    result.value+='1';
    console.log("hello")
})
button13.appendChild(m);
division1.appendChild(button13);

let button14 = document.createElement('button');
button14.setAttribute('class','button1');
var n = document.createTextNode("2");
button14.addEventListener('click', ()=>{
    result.value+='2';
    console.log("hello")
})
button14.appendChild(n);
division1.appendChild(button14);

let button15 = document.createElement('button');
button15.setAttribute('class','button1');
var o = document.createTextNode("3");
button15.addEventListener('click', ()=>{
    result.value+='3';
    console.log("hello")
})
button15.appendChild(o);
division1.appendChild(button15);  

let button16 = document.createElement('button');
button16.setAttribute('class','button1');
var p = document.createTextNode("+");
button16.addEventListener('click', ()=>{
    result.value+='+';
    console.log("hello")
})
button16.appendChild(p);
division1.appendChild(button16); 

let button17= document.createElement('button');
button17.setAttribute('class','button1');
var q = document.createTextNode("0");
button17.addEventListener('press', ()=>{
    result.value+='0';
    console.log("hello")
})
button17.appendChild(q);
division1.appendChild(button17); 

let button18 = document.createElement('button');
button18.setAttribute('class','button1');
var r = document.createTextNode("00");
button18.addEventListener('click', ()=>{
    result.value+='00';
    console.log("hello")
})
button18.appendChild(r);
division1.appendChild(button18); 

let button19 = document.createElement('button');
button19.setAttribute('class','button1');
button19.setAttribute('id','equal');
var s = document.createTextNode("=");
button19.addEventListener('click', ()=>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
alert("Enter the Valid Combination")
    }
})

button19.appendChild(s);
division1.appendChild(button19);


window.addEventListener('keypress', (element)=>{
    if (element.key =='7'){
       
        result.value+='7';
    }
    else if (element.key =='8'){
    
        result.value+='8';
    }
    else if (element.key =='9'){
       
        result.value+='9';
    }
    else if (element.key =='delete'){
        
        result.value=result.value.slice(0,-1);
    }
    else if (element.key =='backspace'){
       
        result.value="";
        console.log('hello')
    }
    else if (element.key =='.'){
       
        result.value+=".";
    }
    else if (element.key =='*'){
        
        result.value+='*';
    }
    else if (element.key =='/'){
        
        result.value+='/';
    }
    else if (element.key =='4'){
        
        result.value+='4';
    }
    else if (element.key =='5'){
       
        result.value+='5';
    }
    else if (element.key =='6'){
        
        result.value+='6';
    }
    else if (element.key =='-'){
       
        result.value+='-';
    }
    else if (element.key =='1'){
        
        result.value+='1';
    }
    else if (element.key =='2'){
        
        result.value+='2';
    }
    else if (element.key =='3'){
        
        result.value+='3';
    }
    else if (element.key =='+'){
       
        result.value+='+';
    }
    else if (element.key =='0'){
        
        result.value+='0';
    }
    else if (element.key =='='){
        
            try{
                result.value=eval(result.value)
            }
            catch(err){
        alert("Enter the Valid Combination")
            }
    }
    else{
        alert("Press a Number Only")
    }
})



