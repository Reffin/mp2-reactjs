import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> 09365464598</label>
            <i className='fa fa-envelope'></i>
            <label> ryancarbonel1984@gmail.com</label>
          </div>
          <div className='right row RText'>
            <label>FAQ"s</label>
            <label>Need Help?</label>
            <span><i class="fa-solid fa-bell"></i></span>
            <label>Welcome!</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
