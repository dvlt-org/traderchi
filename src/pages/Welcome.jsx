import Logo from "../assets/logo.webp"
import React from 'react'
import "./pages.css"

export default function Welcome() {
  return (
    <div className='welcome'>
      <div className="welcome-navbar">
        <img src={Logo} alt={Logo} />
        <button>Ro'yhatdan o'tish</button>
      </div>
      <div className="welcome-content">
        <h1>Tradingda muvaffaqiyat qadamlarini biz bilan boshlang !</h1>
        <p>Loremsfg tate odit consequatur doloribus inventore.</p>
        <div className="welcome-cards">
          <div className="welcome-card main">
            <div className="welcome-card-img expert"></div>
            <div className="welcome-card__hover">
              <h3>Birgalikda xatolaringiz ustida ishlaymiz !</h3>
              <button>Boshlash</button>
            </div>
          </div>
          <div className="welcome-card active">
            <div className="welcome-card-img journal active"></div>
            <div className="welcome-card__hover">
              <h3>Har bir pozitsiyani belgilab boramiz</h3>
              <button>Boshlash</button>
            </div>
          </div>
          <div className="welcome-card main">
            <div className="welcome-card-img chat"></div>
            <div className="welcome-card__hover">
              <h3>O'z soha vakillaringiz bilan tanishing !</h3>
              <button>Boshlash</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
