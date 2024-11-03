import React from 'react'
import './CircleCards.css'

function Full(props) {

  // If Card has a link
  if (props.isFull) {
    return <div className='circle_cards_item_text_wrap'>
      <h2 className='circle_cards_item_title'>{props.title}</h2>
      <p className='circle_cards_item_text'>{props.text}</p>
    </div>
  }
}

function CircleCardItem({ 
  // Default values
  src = './img/no-image.jpg',
  text = 'Default',
  title = 'Default',
  isFull = true,
}) {
  return (
    <>
      <li className={isFull ? 'circle_cards_item' : 'circle_cards_item shrink'}>
        <div className='circle_cards_item_wrap'>
          <figure className='circle_cards_item_img_wrap'>
            <img src={src} alt={title} className='circle_cards_item_img'></img>
          </figure>
          <Full {...{isFull, text, title}} />
        </div>
      </li>
    </>
  )
}

export default CircleCardItem