const div = document.querySelectorAll('.div1');

div.forEach(function (btn) {
  btn.addEventListener('click', function(e) {
    // console.log(e); // Event object ko dekh sakte ho
    // console.log(e.target); // Event kahan click ho raha hai
    
    if(e.target.id === 'yellow') {
       document.body.style.backgroundColor = e.target.id; // Typo fix kiya: doucument => document
       document.body.style.color = 'black';
    }
    if(e.target.id === 'violet') {
        document.body.style.backgroundColor = e.target.id; // Typo fix kiya: doucument => document
        document.body.style.color = 'black';
     }
     if(e.target.id === 'red') {
        document.body.style.backgroundColor = e.target.id; // Typo fix kiya: doucument => document
        document.body.style.color = 'black';
     }
     if(e.target.id === 'black') {
        document.body.style.backgroundColor = e.target.id; // Typo fix kiya: doucument => document
        document.body.style.color = 'white';
     }
     
  });
});
