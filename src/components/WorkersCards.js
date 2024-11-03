import React from 'react'
import './CircleCards.css';
import CircleCardItem from "./CircleCardItem";

function WorkersCards() {
    return (
        <div className='circle_cards_container'>
            <div className='circle_cards_wrapper'>
                <ul className='circle_cards_items'>
                    <CircleCardItem
                        src="./img/img-16.jpg"
                        text="Leader, CEO of company"
                        title="Alehandro Joes"
                        isFull={true}
                    />
                    <CircleCardItem
                        src="./img/img-17.jpg"
                        text="Co-leader, Chief Economist"
                        title="Evgeniy Kirpy"
                        isFull={true}
                    />
                </ul>
                <ul className='circle_cards_items'>
                    <CircleCardItem
                        src="./img/img-18.jpg"
                        text="Chief Designer"
                        title="Nataly Bogs"
                        isFull={true}
                    />
                    <CircleCardItem
                        src="./img/img-19.jpg"
                        text="Chief Programmer"
                        title="John Uber"
                        isFull={true}
                    />
                    <CircleCardItem
                        src="./img/img-20.jpg"
                        text="Chief Tester"
                        title="Dmytro Lukavich"
                        isFull={true}
                    />
                </ul>
            </div>
        </div>
    )
}

export default WorkersCards