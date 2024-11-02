import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function CareersCard() {
  return (
    <div className='cards careers'>
      <h1>Currently we searching for...</h1>
      <div className='cards_container'>
        <div className='cards_wrapper'>
          <ul className='cards_items'>
            <CardItem
              src="./img/img-10.jpg"
              text="We are looking for a senior programmer to create and support a new project related to AI."
              title="Senior Programmer"
              isFull={true}
              isLink={false}
            />
            <CardItem
              src="./img/img-11.jpg"
              text="We are looking for a junior programmer to create and support a new project related to AI."
              title="Junior Programmer"
              isFull={true}
              isLink={false}
            />
          </ul>
          <ul className='cards_items'>
            <CardItem
              src="./img/img-12.jpg"
              text="Do you have good taste? Do you have education and experience in design? Then you are welcome."
              title="Senior Designer"
              isFull={true}
              isLink={false}
            />
            <CardItem
              src="./img/img-13.jpg"
              text="Need a person with a good understanding of data analytics. High salary guaranteed."
              title="Data Analyst"
              isFull={true}
              isLink={false}
            />
          </ul>
          <ul className='cards_items'>
            <CardItem
              src="./img/img-14.jpg"
              text="Open position for a person who will provide AI training."
              title="AI Content Trainer"
              isFull={true}
              isLink={false}
            />
            <CardItem
              src="./img/img-15.jpg"
              text="We are looking for a person who is able to manage the business part of the company, make the best possible decisions and create new business models."
              title="Business Analyst"
              isFull={true}
              isLink={false}
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CareersCard