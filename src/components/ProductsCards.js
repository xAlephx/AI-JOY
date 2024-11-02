import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function ProductsCards() {
  return (
    <div className='cards products'>
      <h1>Our Products</h1>
      <div className='cards_container'>
        <div className='cards_wrapper'>
          <ul className='cards_items'>
            <CardItem
              src="./img/img-5.jpg"
              text="Our newest solution in the field of artificial intelligence. AI allows you to solve many different problems in the field of finance, IT and general statistics."
              label="JOY"
              path='/products'
              isFull={true}
              isLink={true}
            />
            <CardItem
              src="./img/img-6.jpg"
              text="AI that allows you to generate a variety of creative images on demand, working on a large selection of data"
              label="VI-JOY"
              path='/products'
              isFull={true}
              isLink={true}
            />
            <CardItem
              src="./img/img-7.jpg"
              text="AI that allows you to maintain order in traffic by recording car numbers"
              label="CAR-JOY"
              path='/products'
              isFull={true}
              isLink={true}
            />
          </ul>
          <ul className='cards_items'>
            <CardItem
              src="./img/img-8.jpg"
              text="AI that allow scientists with degrees to obtain the information they need to conduct various types of research"
              label="SCI-JOY"
              path='/products'
              isFull={true}
              isLink={true}
            />
            <CardItem
              src="./img/img-9.jpg"
              text="A large database that stores a lot of different data that allows AI to learn"
              label="JOY-BANK"
              path='/products'
              isFull={true}
              isLink={true}
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProductsCards