// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const errorModal = document.getElementById('modal');
errorModal.classList.add('hidden');


const emptyHearts = document.querySelectorAll('.like-glyph');

emptyHearts.forEach((heart) => {
  heart.addEventListener('click', () => {
    mimicServerCall()
      .then(() => {
        
        heart.innerText = FULL_HEART;
        
        heart.classList.add('activated-heart');
      })
      .catch((error) => {
        
        errorModal.classList.remove('hidden');
        
        const errorMessage = document.getElementById('modal-message');
        errorMessage.innerText = error;
        
        setTimeout(() => {
          errorModal.classList.add('hidden');
        }, 3000);
      });
  });
});

const fullHearts = document.querySelectorAll('.activated-heart');

fullHearts.forEach((heart) => {
  heart.addEventListener('click', () => {
    
    heart.innerText = EMPTY_HEART;
    
    heart.classList.remove('activated-heart');
  });
});



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
