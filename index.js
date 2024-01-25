//const input = document.getElementById('button');

//function addingEventListener() { 
   // alert('I was clicked!');
   // input.addEventListener('click', addingEventListener);
//}

//input.addEventListener('click', addingEventListener);
function addingEventListener() { const input = document.getElementById('button');

function clickAlert() {
  alert('I was clicked!');
}

input.addEventListener('click', clickAlert);
}
addingEventListener();

