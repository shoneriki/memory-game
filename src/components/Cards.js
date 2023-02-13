import React, {useState} from 'react'
import {cardsInfo} from "./CardsInfo"

import "../App.css"

const Cards = () => {

  const [cardNames, setCardNames] = useState([])

  const [duplicate, setDuplicate] = useState(false)

  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  const [cardInfo, setCardsInfo] = useState(cardsInfo)

  const [showExplanation, setShowExplanation] = useState(false)

  const handleExplanation = () => {
    setShowExplanation(!showExplanation)
  }

  const handleClick = (e, card) => {
    // 1.) set cardName to the name in the card object from cardsInfo
    const cardName = card.name
    if (cardNames.includes(cardName)) {
      // 7.) set duplicate to true, as there is a duplication in the array of cardNames
      setDuplicate(true)
      // 8.) set/reset the score to 0
      setScore(0)
      // 9.) set/reset the cardNames array to an empty array
      setCardNames([])
    } else {
      // 2.) set duplicate to false, as there are no duplications yet in the array cardNames (which is set to an empty array above
      setDuplicate(false)
      // 3.) set cardNames array to a new array that interpolates the existing cardNames array with the cardName in 1 pushed into it
      setCardNames([...cardNames, cardName])
      // 4.) set score to the current score + 1
      setScore(score + 1)
      // 5.) if the score is greater than the best score, then set the best score to the score
      if (score + 1 > bestScore) {
        setBestScore(score + 1);
      }
    }
    // 6.) shuffle the cards
    shuffleCards(cardsInfo)
  }

  const shuffleCards = (cards) => {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    setCardsInfo(cards)
  }


  return (
    <div className="cards">
      <div className="explanationLayout">
        <div className="explanation">
          <input
            type="button"
            className="btn explainBtn"
            value={showExplanation ? "Close" : "Explanation?"}
            onClick={handleExplanation}
          />
          {
            showExplanation && (
            <div className="explanationTxt">
              <p>
                Here is how the game works: click each character card once, if you click on the character again, you lose the game. The goal is to click on all the characters without clicking on the same character twice. There are 18 cards in all
              </p>
            </div>
            )
          }
        </div>
      </div>
      <div className="scoreDiv">
        <div className="scoreDivLayout">
          <h3
            className="score"
            id ="currentScore"
          >
            Score: {score}
          </h3>
          <h3
            className="score"
            id = "bestScore"
          >
            Best Score: {bestScore}
          </h3>
        </div>
      </div>
      <div className="cardsLayout">
        {cardsInfo.map((card, index) => {
          return (
            <div
              className="card"
              key={index}
              onClick={(e) => handleClick(e, card)}
            >
              <h1>{card.displayName}</h1>
              <img src={card.src} alt={card.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cards
