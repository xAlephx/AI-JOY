import React from 'react'
import './CircleCards.css';
import CircleCardItem from "./CircleCardItem";

function CooperationsCards() {
    return (
        <div className='circle_cards_container'>
            <div className='circle_cards_wrapper'>
                <ul className='circle_cards_items'>
                    <CircleCardItem
                        src="./img/img-21.png"
                        isFull={false}
                    />
                    <CircleCardItem
                        src="./img/img-22.png"
                        isFull={false}
                    />
                    <CircleCardItem
                        src="./img/img-23.png"
                        isFull={false}
                    />
                    <CircleCardItem
                        src="./img/img-24.webp"
                        isFull={false}
                    />
                    <CircleCardItem
                        src="./img/img-25.png"
                        isFull={false}
                    />
                </ul>
            </div>
        </div>
    )
}

export default CooperationsCards