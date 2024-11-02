import React from 'react'
import './Cards.css'
import { NavLink } from 'react-router-dom'

function IsLink(props) {

  // If Card has a link
  if (props.isLink) {
    return <NavLink className={props.isFull ? 'cards_item_link full' : 'cards_item_link'} to={props.path}>
      <figure className={props.isFull ? 'cards_item_img_wrap hover after full' : 'cards_item_img_wrap hover after'} data-category={props.label}>
        <img src={props.src} alt={props.label} className='cards_item_img'></img>
      </figure>
      <div className={props.isFull ? 'cards_item_text_wrap full' : 'cards_item_text_wrap'}>
        <h5 className='cards_item_text'>{props.text}</h5>
      </div>
    </NavLink>
  }
  else {
    return <div className={props.isFull ? 'cards_item_link full' : 'cards_item_link'}>
      <figure className={props.isFull ? 'cards_item_img_wrap full' : 'cards_item_img_wrap'}>
        <img src={props.src} alt={props.label} className='cards_item_img'></img>
      </figure>
      <div className={props.isFull ? 'cards_item_text_wrap full' : 'cards_item_text_wrap'}>
        <h2 className='cards_item_title'>{props.title}</h2>
        <p className='cards_item_text'>{props.text}</p>
      </div>
    </div>
  }
}

function CardItem ({ 
  // Default values
  src = './img/no-image.jpg',
  text = 'Default',
  label = 'Default',
  title = 'Default',
  path = '',
  isFull = false,
  isLink = false
}) {
  return (
    <>
      <li className='cards_item'>
        <IsLink {...{ src, text, label, title, path, isFull, isLink }} />
      </li>
    </>
  )
}

export default CardItem