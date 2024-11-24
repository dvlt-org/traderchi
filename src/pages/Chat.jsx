import React, { useState } from 'react'
import Sidebar from "../components/Sidebar"
import groupImg from "../assets/groupImg.jpg"
import EmojiPicker from 'emoji-picker-react'
import "./pages.css"

export default function Chat() {
    const [showSticker, setShowSticker] = useState(false)
    const [chatInput, setChatInput] = useState("")

    const handleChatEmoji = (input) => {
        setChatInput(input)
    }


    return (
        <div className='chat-page'>
            <Sidebar />
            <div className='group'>
                <div className="group-search group-container">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder='Qidirish..' />
                </div>
                <div className="group-groups group-container">
                    <h1>Groups</h1>
                    <div className='group-groups__items'>
                        <div className='group-groups__item'>
                            <div className='groups-item__left'>
                                <img src={groupImg} alt="this is group image" />
                                <div className='item-left__titles'>
                                    <h3>Friends Forever</h3>
                                    <p>HAHHHHAH</p>
                                </div>
                            </div>
                            <div className='groups-item__right'>
                                <p>Today, 9:214</p>
                                <p>4</p>
                            </div>
                        </div>
                        <div className='group-groups__item'>
                            <div className='groups-item__left'>
                                <img src={groupImg} alt="this is group image" />
                                <div className='item-left__titles'>
                                    <h3>Friends Forever</h3>
                                    <p>HAHHHHAH</p>
                                </div>
                            </div>
                            <div className='groups-item__right'>
                                <p>Today, 9:214</p>
                                <p>4</p>
                            </div>
                        </div>
                        <div className='group-groups__item'>
                            <div className='groups-item__left'>
                                <img src={groupImg} alt="this is group image" />
                                <div className='item-left__titles'>
                                    <h3>Friends Forever</h3>
                                    <p>HAHHHHAH</p>
                                </div>
                            </div>
                            <div className='groups-item__right'>
                                <p>Today, 9:214</p>
                                <p>4</p>
                            </div>
                        </div>
                        <div className='group-groups__item'>
                            <div className='groups-item__left'>
                                <img src={groupImg} alt="this is group image" />
                                <div className='item-left__titles'>
                                    <h3>Friends Forever</h3>
                                    <p>HAHHHHAH</p>
                                </div>
                            </div>
                            <div className='groups-item__right'>
                                <p>Today, 9:214</p>
                                <p>4</p>
                            </div>
                        </div>
                        <div className='group-groups__item'>
                            <div className='groups-item__left'>
                                <img src={groupImg} alt="this is group image" />
                                <div className='item-left__titles'>
                                    <h3>Friends Forever</h3>
                                    <p>HAHHHHAH</p>
                                </div>
                            </div>
                            <div className='groups-item__right'>
                                <p>Today, 9:214</p>
                                <p>4</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="group-message group-container">
                    <h1>People</h1>
                    <div className='people-items'>
                        <div className='people-item'>
                            <div className='people-item__left'>
                                <img src={groupImg} alt="Group Image" />
                                <div className='item-left__titles'>
                                    <h3>Friends Forever</h3>
                                    <p>HAHHHHAH</p>
                                </div>
                            </div>
                            <div className='people-item__right'>
                                <p>Today, 9:214</p>
                                <p>4</p>
                            </div>
                        </div>
                        <div className='people-item'>
                            <div className='people-item__left'>
                                <img src={groupImg} alt="Group Image" />
                                <div className='item-left__titles'>
                                    <h3>Friends Forever</h3>
                                    <p>HAHHHHAH</p>
                                </div>
                            </div>
                            <div className='people-item__right'>
                                <p>Today, 9:214</p>
                                <p>4</p>
                            </div>
                        </div>
                        <div className='people-item'>
                            <div className='people-item__left'>
                                <img src={groupImg} alt="Group Image" />
                                <div className='item-left__titles'>
                                    <h3>Friends Forever</h3>
                                    <p>HAHHHHAH</p>
                                </div>
                            </div>
                            <div className='people-item__right'>
                                <p>Today, 9:214</p>
                                <p>4</p>
                            </div>
                        </div>
                        <div className='people-item'>
                            <div className='people-item__left'>
                                <img src={groupImg} alt="Group Image" />
                                <div className='item-left__titles'>
                                    <h3>Friends Forever</h3>
                                    <p>HAHHHHAH</p>
                                </div>
                            </div>
                            <div className='people-item__right'>
                                <p>Today, 9:214</p>
                                <p>4</p>
                            </div>
                        </div>
                        <div className='people-item'>
                            <div className='people-item__left'>
                                <img src={groupImg} alt="Group Image" />
                                <div className='item-left__titles'>
                                    <h3>Friends Forever</h3>
                                    <p>HAHHHHAH</p>
                                </div>
                            </div>
                            <div className='people-item__right'>
                                <p>Today, 9:214</p>
                                <p>4</p>
                            </div>
                        </div>
                        <div className='people-item'>
                            <div className='people-item__left'>
                                <img src={groupImg} alt="Group Image" />
                                <div className='item-left__titles'>
                                    <h3>Friends Forever</h3>
                                    <p>HAHHHHAH</p>
                                </div>
                            </div>
                            <div className='people-item__right'>
                                <p>Today, 9:214</p>
                                <p>4</p>
                            </div>
                        </div>
                        <div className='people-item'>
                            <div className='people-item__left'>
                                <img src={groupImg} alt="Group Image" />
                                <div className='item-left__titles'>
                                    <h3>Friends Forever</h3>
                                    <p>HAHHHHAH</p>
                                </div>
                            </div>
                            <div className='people-item__right'>
                                <p>Today, 9:214</p>
                                <p>4</p>
                            </div>
                        </div>
                        <div className='people-item'>
                            <div className='people-item__left'>
                                <img src={groupImg} alt="Group Image" />
                                <div className='item-left__titles'>
                                    <h3>Friends Forever</h3>
                                    <p>HAHHHHAH</p>
                                </div>
                            </div>
                            <div className='people-item__right'>
                                <p>Today, 9:214</p>
                                <p>4</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='message'>
                <div className="message-header">
                    <div className='message-item__left'>
                        <img src={groupImg} alt="group image" />
                        <div className='item-left__titles'>
                            <h3>Anil</h3>
                            <p>Online - last seen 2.02pm</p>
                        </div>
                    </div>
                    <div className='message-item__right'>
                        <i className="fa-solid fa-phone"></i>
                        <i className="fa-solid fa-video"></i>
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                </div>
                <div className='message-info'>
                    <div className="message-info__items">
                        <div className="message-info__item">
                            <p className='info-item__message'>Hey There!</p>
                            <p className="info-items__time">Today, 8.30pm</p>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className='message-form'>
                    <div className='message-form__input'>
                        <div className="form-input__left">
                            <label htmlFor="file-input">
                                <i className="fa-regular fa-file"></i>
                            </label>
                            <input type="file" id='file-input'/>
                            <input type="text" placeholder='xabar yozing' value={chatInput} onChange={(event) => handleChatEmoji(event.target.value)} />
                        </div>
                        <div className='form-input__right'>
                            <i className="fa-solid fa-face-smile"></i>
                            <i className="fa-solid fa-camera"></i>
                            <div className='input-right__emoji'>
                                <EmojiPicker onEmojiClick={(emoji) => handleChatEmoji(emoji.emoji)} />
                            </div>
                        </div>
                    </div>
                    <div className='message-form__voice'>
                        <i className="fa-solid fa-microphone"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
