'use strict'
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
  });
  


// Here a event handler function is passed as a value to addEventListener function.
document.querySelector('.btn_post').addEventListener('click', 
   () => {
    document.querySelector('.status').value = 'Learning Java Script ES6';
  }
)

document.querySelector('.sl_card').addEventListener('click', 
   () => {
    document.querySelector('.sales_card').textContent = '$135,000';
                                  
  }
)

document.querySelector('.ex_card').addEventListener('click', 
   () => {
    document.querySelector('.expenses_card').textContent = '$39,000';
  }       
)


document.querySelector('.salary').addEventListener('focusout',  
   () => {
  const salary = Number(document.querySelector('.salary').value);
    if(isNaN(salary)) {
    document.querySelector('.salary').value = 'Enter Valid Salary Amount';
    }
  }
)

document.querySelector('.salary').addEventListener('focusin',  
   () => {
  document.querySelector('.salary').value = '';   
  }
)



// Manipulating CSS Styles
let totalVisitors  = 0;
document.querySelector('.vs_card').addEventListener('click',  
   () => {
    let visitors  = Math.trunc(Math.random()*30000) + 1;
    totalVisitors = visitors + totalVisitors;
    document.querySelector('.visitors_card').textContent = visitors;
    document.querySelector('.total_visitors').textContent = totalVisitors;
    if (visitors > 25000) {
      alert ('Your website has >=25,000 visitors tis month!') ;
      document.querySelector('.vs_card').style.backgroundColor = '#60b347';
      document.querySelector('.visitors_card').style.color = '#ffffff';
     document.querySelector('.total_visitors').style.color = '#ffffff';
     document.querySelector('.total_visitors').style.fontSize = '2rem';
    }
   else if (visitors < 25000 ) {
    document.querySelector('.vs_card').style.backgroundColor = '#ffffff';
    document.querySelector('.visitors_card').style.color = '#000000';
    document.querySelector('.total_visitors').style.color = '#000000';
    document.querySelector('.total_visitors').style.fontSize = '1rem';
   }    
  }
)

document.querySelector('.users_card').textContent = '20,000';



// Modal View : Working With Classes

const cardsOpenModal  = document.querySelectorAll('.card')


for (let i=0; i<cardsOpenModal.length; i++) {
  cardsOpenModal[i].addEventListener(
                                       'click', ()=> {
                                         // Passing the css class name.. dot is not required.
                                        alert(`Card: ${i}`);
                                      });
}

