import {React, useEffect, useState} from 'react'
import cardsData from 'api/homeCards.json'
import Card from 'components/Cards/CardItem.jsx'

export default function Cards() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    // api request
    setCards(cardsData)
  }, [])

  return (
    <div className='container mx-auto mt-11'>
      <div className='grid grid-cols-3 gap-5'>
        {cards && cards.map((card, index) => 
          <Card key={index} data={card} />
        )}
      </div>
    </div>
  )
}
