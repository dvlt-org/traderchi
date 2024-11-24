import React from 'react'
import "./components.css"

export default function Login() {
  return (
    <div className='login'>
      <div className='login-left'></div>
      <div className='login-form'>
        <div className="login-form__titles">
          <h1>Hisobga kirish</h1>
          <p>Iltimos, malumotlaringizni to'ldiring !</p>
        </div>
        <div className='login-form__container'>
          <label>Email</label>
          <div className='form-email__input login-form__input'>
            <i className="fa-regular fa-envelope"></i>
            <input type="email" placeholder='Elektron pochtani kiriting !' />
          </div>
        </div>
        <div className='login-form__container'>
          <label>Password</label>
          <div className='form-email__input login-form__input'>
            <i className="fa-solid fa-lock"></i>
            <input type="password" placeholder='Hisob parolini kiriting !' />
          </div>
        </div>
        <div className='button-container'>
          <button>
            <p>Keyingi</p>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <hr />
        <div className='link-to__register'>
          <div className='link-to__login link-to__register'>
            <p>Menda hisob raqam yo'q!</p>
            <p>
              <a href="./">Yangi ochish!</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
