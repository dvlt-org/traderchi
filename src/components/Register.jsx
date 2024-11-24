import React from 'react'

export default function Register() {
  return (
    <div className='register'>
      <div className='register-left'></div>
      <div className='register-form'>
        <div className="register-form__titles">
          <h1>Ro'yhatdan o'tish</h1>
          <p>Iltimos, malumotlaringizni to'ldiring !</p>
        </div>
        <div className='register-form__name register-form__container'>
          <label>Full Name</label>
          <div className='register-form__input'>
            <i className="fa-regular fa-user"></i>
            <input type="text" placeholder='Ismingizni kiriting !' />
          </div>
        </div>
        <div className='register-form__number register-form__container'>
          <label>Mobile number</label>
          <div className='register-form__input'>
            <i className="fa-solid fa-phone"></i>
            <input type="text" placeholder=' telefon raqamingizni kiriting !' />
          </div>
        </div>
        <div className='register-form__container'>
          <label>Email</label>
          <div className='form-email__input register-form__input'>
            <i className="fa-regular fa-envelope"></i>
            <input type="text" placeholder=' elektron pochtani kiriting !' />
          </div>
        </div>
        <div className='button-container'>
          <button>
            <p>Keyingi</p>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <hr />
        <div className='link-to__login'>
          <p>Menda allaqachon hisob bor !</p>
          <p>
            <a href="./">Hisobga kirish !</a>
          </p>
        </div>
      </div>
    </div>
  )
}
