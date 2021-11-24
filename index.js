let cards=[]
let hasblackJack=false
let isAlive=false
let sum=0
let message=""
let msgEl=document.getElementById("msg-el")
let cardsEl=document.getElementById("cards-el")
let sumEl=document.getElementById("sum-el")
let userEl=document.getElementById("user-el")
function randomCard()
{
    let card=Math.floor(Math.random()*13)+1
    if(card>10)
    {
        return 10
    }
    else if(card==1)
    {
        return 11
    }
    else 
    {
        return card
    }
}
function startGame()
{
    isAlive=true
    let firstCard=randomCard()
    let secondCard=randomCard()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    renderGame()
}
function newCard()
{
    if(isAlive && !hasblackJack)
    {
        let card=randomCard()
        sum+=card
        cards.push(card) 
        renderGame()
    }
}
function renderGame()
{
    cardsEl.textContent="Cards: "
    for(let i=0;i<cards.length;i++)
    {
        cardsEl.textContent+=cards[i]+" "
    }
    sumEl.textContent="Sum: "+sum
    if(sum<21)
    {
        message="Do you want to pick a new card?"
    }
    else if(sum===21)
    {
        message="Congratulations!!! You've got Blackjack"
        hasblackJack=true
        blackJack()
    }
    else 
    {
        message="Oops!! You're out of the game"
        isAlive=false
    }
    msgEl.textContent=message
}
function blackJack()
{
    userEl.textContent="You got an exciting prize"
}
