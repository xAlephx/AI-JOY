import React from 'react'
import './Cards.css'
import { NavLink } from 'react-router-dom'

function CardItem(props) {
  return (
    <>
      <li className='cards_item'>
        <NavLink className= {props.isFull ? 'cards_item_link full' : 'cards_item_link'} to={props.path}>
          <figure className={props.isFull ? 'cards_item_img_wrap full' : 'cards_item_img_wrap'} data-category={props.label}>
            <img src={props.src} alt="About" className='cards_item_img'></img>
          </figure>
          <div className={props.isFull ? 'cards_item_text_wrap full' : 'cards_item_text_wrap'}>
            <h5 className='cards_item_text'>{props.text}</h5>
          </div>
        </NavLink>
      </li>
    </>
  )
}

export default CardItem