import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function HomeCards() {
  return (
    <div className='cards home'>
      <h1>More about our business</h1>
      <div className='cards_container'>
        <div className='cards_wrapper'>
          <ul className='cards_items'>
            <CardItem
              src="./img/img-1.avif"
              text="You can learn more about our company"
              label="About us"
              path='/aboutUs'
              isFull={false}
              isLink={true}
            />
            <CardItem
              src="./img/img-2.avif"
              text="We made a lot of profit projects"
              label="Our Products"
              path='/products'
              isFull={false}
              isLink={true}
            />
          </ul>
          <ul className='cards_items'>
            <CardItem
              src="./img/img-3.jpg"
              text="Here you can learn about our avaible vacancies"
              label="Careers"
              path='/careers'
              isFull={false}
              isLink={true}
            />
            <CardItem
              src="./img/img-4.jpg"
              text="You can contact us from 8:00 to 21:00 everyday"
              label="Contacts"
              path='/contactUs'
              isFull={false}
              isLink={true}
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HomeCards