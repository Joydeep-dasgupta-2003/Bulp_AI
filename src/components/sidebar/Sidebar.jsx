import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'
const Sidebar = () => {


  const [extended, setExtended] = useState(false)

  const { onSent, prevPrompts, setRecentPrompts, newChat} = useContext(Context);

  return (
    <div className='sidebar'>
      <div className='top'>
        <img onClick={() => setExtended(prev => !prev)} className='menu' src={assets.menu_icon} alt="" />
        <div onClick={() => newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="" srcset="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
          </div>
        ) : null}

      </div>

      <div className='bottom'>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" srcset="" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
