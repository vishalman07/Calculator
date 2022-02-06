let input=document.getElementById('input');
let buttons=document.querySelectorAll('button');

let buttonText='';
let inputVal='';
for(let button of buttons){

    button.addEventListener('click',(e)=>{
      buttonText=button.innerText;
      e.target.classList +=' scale';
      setTimeout(() => {
        e.target.classList -='scale';

      }, 100);
      console.log('button is ',buttonText);
      if(buttonText=='X'){
        buttonText='*';
        inputVal +=buttonText;
        input.value=inputVal;
      }  
      else if(buttonText=='Clear'){
          inputVal='';
          input.value=inputVal;
      }
      else if(buttonText=='Backspace'){
          inputVal =inputVal.substring(0,inputVal.length-1);
          input.value=inputVal;
         
      }
      else if(buttonText=='='){
          input.value=eval(inputVal);
          inputVal =input.value;
      }
      else{
          inputVal += buttonText;
          input.value=inputVal;
      };
      
    })
}