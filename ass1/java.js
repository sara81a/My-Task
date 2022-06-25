const date = document.querySelector('#forDate input') ;  
const TASKN = document.querySelector('#fortas input');

const submi = document.querySelector('#submit');
/*const colorRadio = document.querySelectorAll('input[name="priority"]');*/
const done = document.querySelector('#Done');
var checkbtn;
function add(e){
    e.preventDefault();

    const Tasknow = document.querySelector('.todo-list');
    const forDate = document.createElement ('span');
    forDate.className='DATEEE';
    const listnew = document.createElement ('li');
    listnew .className = 'TASK1';
    checkbtn = document.createElement ('input');
    checkbtn.type = "checkbox";
    checkbtn.className = "checkbox";
    checkbtn.name="checkbox";  // set the CSS class

    const Symbol = document.createElement('i');
   Symbol.className = "Symbol"; 


   if (document.getElementById('M').checked) {
        listnew .setAttribute(
            'style',
            'background-color: rgb(230, 173, 69);',
          );
      }


 else if (document.getElementById('H').checked) {
    listnew .setAttribute(
        'style',
        'background-color: rgb(231, 116, 116);',
      );
  }

  else{
    listnew .setAttribute(
        'style',
        'background-color: rgb(240, 240, 158);',
      ); 
  }

  
   forDate.innerHTML=date.value;
//var date1=new Date();

//var getd=date.value;
//var date2 = new Date(getd); //convert date to date of obj
//var BB = parseInt(( date2-date1) / (1000 * 60 * 60 * 24 )+1); //count the day


var datefromuser=date.value;
var today = new Date(datefromuser);
var date2 = new Date();

var calculate =today.getTime()-date2.getTime();
var BB = parseInt(calculate/ (1000*3600*24));
//BB= Math.floor(BB);



if(TASKN.value !=='' && date.value !==''&&(document.getElementById('H').checked==true || document.getElementById('M').checked == true || document.getElementById('L').checked==true) && (document.getElementById('Selected1').value=='Study' || document.getElementById('Selected1').value=='Sport' || document.getElementById('Selected1').value =='Home')){ 
    listnew .innerHTML=TASKN.value+"<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
 //more than 1 or 1 or 0
    if( BB==0 || BB==1){
        Symbol.innerHTML='<span class="ha" ><i class="fas fa-exclamation-triangle"></i>  </span>';
      
        }
        //less than 0
        else if(BB<0){
            Symbol.innerHTML='<span class="ha2"><i class="fas fa-times"></i>  </span>';
          
        }


        Tasknow.appendChild(listnew );
        listnew .appendChild(checkbtn);// put it into the DOM
        listnew .appendChild(Symbol);
        listnew .appendChild(forDate );
    
}

else if(TASKN.value ==''){
    alert("fill name of task please");  
}

else if(document.getElementById("Selected1").value=="hide"){
    alert("chose the catogery");
}

else if(document.getElementById('M').checked == false  &&document.getElementById('H').checked==false  && document.getElementById('L').checked==false){  
    alert("chose the priority");  
}

else if(date.value ==''){
    alert("fill date please");  
}

}


var current = new Date();// to display current day
     var day = String(current.getDate()).padStart(2, '0');
     var month = String(current.getMonth() + 1).padStart(2, '0'); //January is 0!
     var year = current.getFullYear();  
     current = year + '-' + day + '-' + month;
     document.getElementById("n").innerHTML= "<p>Date is: " +current+"</p>"; 
//DONEE.addEventListener('click',remove);

    function delet(e) {
        e.preventDefault();
        var trys=false;
         var forc=document.getElementsByName('checkbox');
       
         for(var i=0,l=forc.length; i<l ;i++){
         if(forc[i].checked)   {
            trys=true;
           break;
         }

        }
        if(trys){
  //   var today =TODAYDATE();  
   
     




      var symb='<span class="warning"><i class="fas fa-check-square"></i>  </span>' ;
     const docc = document.querySelector('.comp');
       var doc = document.querySelectorAll('.TASK1');
        doc.forEach(n => {
         if(n.querySelector('input').checked){
    
           n.remove();
         docc.appendChild(n).setAttribute('style',
           'background-color: #80d3a0;',);
           //x.remove();
         // n.querySelector('.DATEEE').innerHTML= current;
           n.querySelector('.checkbox').remove();
           n.querySelector('.Symbol').innerHTML=symb;            
 }
}); 
}
   
 else
     alert("select a task"); 
}
   /* function TODAYDATE(){
   var today = new Date();// to display current day
   var dd = String(today.getDate()).padStart(2, '0');
   var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
   var yyyy = today.getFullYear();  
 today = yyyy + '-' + dd + '-' + mm;
return today;

    }*/
    submi .addEventListener('click',add);
    done.addEventListener('click',delet);


    



