import React from "react"

const Categories = () => {
  const data = [
    
    {
      cateImg: "./images/category/electronics.png",
      cateName: "Electronics",
    },
    {
      cateImg: "./images/category/car.png",
      cateName: "Cars",
    },
    
    {
      cateImg: "./images/category/phone.png",
      cateName: "Phones",
    },
    
    {
      cateImg: "./images/category/lipstick.png",
      cateName: "Beauty",
    },
    
    {
      cateImg: "./images/category/babys.png",
      cateName: "Baby Toys",
    },
    {
      cateImg: "./images/category/grocery.png",
      cateName: "Groceries",
    },
    {
      cateImg: "./images/category/books.png",
      cateName: "Books",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
