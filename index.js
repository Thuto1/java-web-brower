console.log(document)
const myMessage = document.querySelector('.myMessage');
const theMessageButton = document.querySelector('.theMessageButton');
const clearButton = document.querySelector('.clearButton');
const inputBox = document.querySelector('.theInputValue');
const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];

const fruitList = document.querySelector(".fruits");

const fruitInput = document.getElementById('fruitInput');
const addFruitButton = document.getElementById('addFruitButton');


 /// the Message is going to show on the web after 3 seconds when using the setTimeout handler / 
setTimeout(function(){
  myMessage.innerText = 'This is spiller in the DOM!'
}, 3000 )


// the following message/pop up is going to show after clicking the button on the web because we added the EVENT LISTENER handler function on the button

theMessageButton.addEventListener('click', function() {
    alert("spiller clicked the button!")
});

// well the following code is going to check the message on the myMessage div when the button is clicked//

theMessageButton.addEventListener('click', function() {
  myMessage.innerText = 'Button pressed'
});


// the following adds a button that clears the message, and makes the message disappear after 3sec//


clearButton.addEventListener('click', 
function () {
  myMessage.innerText = '';

});

// the following code makes that when there is no text or there is a text  in the textbox the message would show
theMessageButton.addEventListener('click', function() {
  if (inputBox.value.trim().length > 0) {
    myMessage.innerText = inputBox.value;
 }
});

// we are adding some css here on the myMessage div//

myMessage.addEventListener('click', function() {
  myMessage.classList.toggle('darkmode')
})

// we created a list of fruits now we are looping over the fruit list and then add a fruit for each in the list//


for(let i=0;i<fruits.length;i++){
   // get fruits from the list
   const fruit = fruits[i];
   
   // create a new li element
   const li = document.createElement('li');
   li.innerText = fruit;
   fruitList.appendChild(li);
}

// HERE WE ARE TRYING SOMETHING ELSE WE ARE Adding a support to enter fruit names and add them to the list when a button is pressed.Here we go. I hope that you found this useful

function displayFruits(fruitArray) {
  // Clear the existing list
  fruitList.innerHTML = '';

  // Loop over the fruit array and create list items
  for(let i = 0; i < fruitArray.length; i++) {
    const fruit = fruitArray[i];
    const li = document.createElement('li');
    li.innerText = fruit;
    fruitList.appendChild(li);
  }
}

addFruitButton.addEventListener('click', function() {
  const newFruit = fruitInput.value.trim();
  
  // Check if the input is not empty
  if(newFruit) {
    // Add the new fruit to the fruits array
    fruits.push(newFruit);
    
    // Update the displayed list of fruits
    displayFruits(fruits);
    
    // Clear the input field
    fruitInput.value = '';
  }
});
