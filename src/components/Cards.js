import React, {useState} from 'react'
import {cardsInfo} from "./CardsInfo"

import "../App.css"

const Cards = () => {
  /*
    baby-luigi,
    baby-mario,
    baby-yoshi,
    bowser,
    bowser-jr,
    daisy,

    kamek,
    larry-koopa,
    ludwig-von-koopa,
    luigi,
    mario,
    peach,

    professor-egad,
    toad,
    toadsworth,
    waluigi,
    wario,
    yoshi,
  */

  // in terms of layout:
  // 1. create a grid of cards of 2x9, (3x6, 4x4), for mobile, (tablet and desktop)
  // 2. each card will have
      //an image,
      // a name and
      // a click event listener

  // 3. when a card is clicked,
      // the id of the card should be stored in an array
      // cards should be shuffled on screen
  // 4. there should be a state for adding score for each card in the array
    // (adding 1 to the score for each click)
  // 5. if card is clicked with the same id as the id in the card id array,
      //then the score should be reset to 0
  // 6. if the score is greater than the best score,
      //then the best score should be updated to the score





  const [cardIds, setCardIds] = useState([])

  const [duplicate, setDuplicate] = useState(false)

  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)



  return (

    <div className="cardsLayout">
      {cardsInfo.map((card, index) => {
        return (
          <div className="card">
            <h1>{card.displayName}</h1>
            <img src={card.src} alt={card.name} />
          </div>
        );
      })}
    </div>
  );
}

export default Cards
