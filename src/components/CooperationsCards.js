import React from 'react'
import './CircleCards.css';
import CircleCardItem from "./CircleCardItem";

function CooperationsCards() {
    return (
        <div className='circle_cards_container'>
            <div className='circle_cards_wrapper'>
                <ul className='circle_cards_items'>
                    <CircleCardItem
                        src="./img/img-21.jpg"
                        isFull={false}
                    />
                    <CircleCardItem
                        src="./img/img-22.jpg"
                        isFull={false}
                    />
                    <CircleCardItem
                        src="./img/img-23.jpg"
                        isFull={false}
                    />
                    <CircleCardItem
                        src="./img/img-24.jpg"
                        isFull={false}
                    />
                    <CircleCardItem
                        src="./img/img-25.jpg"
                        isFull={false}
                    />
                </ul>
            </div>
        </div>
    )
}

export default CooperationsCards