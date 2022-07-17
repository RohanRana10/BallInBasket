const button = document.getElementById('button');
// const ball = document.getElementsByClassName('ball');
const basket = document.getElementById('basket');


function addBallToBasket(){

    const ball = document.createElement('div');
    ball.style.width = "150px";
    ball.style.height = "150px";
    ball.style.backgroundColor = "brown";
    ball.style.borderRadius = "50%";
    basket.append(ball);
    console.log('ball added');

}
button.addEventListener('click',function(){
    addBallToBasket();
})

