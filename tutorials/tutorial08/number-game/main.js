// code that picks a random number between 1 and 100:
//  Global variables:
const secret = Math.floor(Math.random() * 99) + 1;
document.querySelector('#secret').innerHTML = secret;

let count = 0;


function check() {
    count++;
    document.querySelector('#num-guesses').innerHTML = 
    'Number of guesses so far:' +count;

 //count = count + 1; (diff way to write the count)
// count += 1; (diff way to write the count)

    // your code here.
    // console.log("your code here!");
    // 1.   get the number they've entered from the DOM, 
    //      store that in a variable
let guess = document.querySelector('#guess').value;
// console.log(guess);
    // 2.   conveert the guess to a number
guess = Number(guess);
    // 3.   check if they won;
    //      * if guess === secret -> You win!
    //      * if guess < seret -> Too low!
    //      * otherwise; Too high!
    if (guess === secret) {
        console.log('You WIn!');
        document.querySelector('#message').textContent = 'You Win!';
        document.querySelector('#celebrate').className = '';
    } else if (guess < secret) {
        console.log('Too Low!');
        document.querySelector('#message').textContent = 'Too Low!';
        document.querySelector('#celebrate').className = 'hide';
    } else {
        console.log('Too High!');
        document.querySelector('#message').textContent = 'Too High!';
        document.querySelector('#celebrate').className = 'hide';
    }

}