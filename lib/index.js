

let input = document.querySelector('.text');
var inner_text;

window.addEventListener("keydown", keydownHandler, false);

function keydownHandler() {


if(event.keyCode === 13)
{
  inner_text = input.value;  
  var d = document.createElement('div');
  var t = document.createElement('h3');
  var y = document.createElement('h5');
  var q = document.createElement('h4');

    document.body.appendChild(d);
    d.classList.add('wrap');
    d.appendChild(t);
     d.append(y);  
     d.append(q);   
    t.innerText = inner_text;
      y.innerText = "delete";
      q.innerText = "done" ; 

     y.addEventListener('click', ()=>{
      y.parentNode.style.display = "none";
      var del = new XMLHttpRequest();
    del.onreadystatechange = function(){
      if (this.readyState == 4 && this.status == 200) {
           console.log(this.responseText) 
      } else { 
      } 
    };
     del.open('GET', "lib/delete.php?q=" + y.parentNode.firstChild.innerText, true);
    del.send();    
    });


    q.addEventListener('click', ()=>{
      y.parentNode.firstChild.style.color = "lime"; 
    var del = new XMLHttpRequest();
    del.onreadystatechange = function(){
      if (this.readyState == 4 && this.status == 200) {
           console.log(this.responseText) 
      } else { 
      } 
    };
     del.open('GET', "lib/load.php?q=" + y.parentNode.firstChild.innerText, true);
    del.send();    
    })
    ;  

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
      if (this.readyState == 4 && this.status == 200) {
           console.log(this.responseText) 
      } 

    };
    xmlhttp.open('GET', "lib/main.php?q=" + inner_text, true);
    xmlhttp.send(); 

}
} 
