import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'
const main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)



    return (
        <div className="main">
            <div className="nav">
                <p>Bulp AI</p>
                <img src="https://cdn.vectorstock.com/i/preview-1x/24/24/light-bulp-lamp-idea-energy-symbol-icon-isolated-vector-29102424.jpg" alt="" srcset="" />
            </div>
            <div className="main-container">

                {!showResult ? <>
                    <div className="greet">
                        <p><span>Hello, Everyone</span></p>
                        <p>How can i help you today?</p>
                    </div>
                    
                </> : <div className='result'>
                    <div className="result-title">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDAW3c4VeojGKTpXQCtoLQG0_VWjzJwVdAEQ&s" alt="" srcset="" />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <img src="https://cdn.pixabay.com/animation/2022/11/17/00/47/00-47-21-570_512.gif" alt="" srcset="" />
                        {loading ?
                            <div className="loader">
                                <hr />
                                <hr />
                                <hr />
                            </div> : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                        }

                    </div>
                </div>
                }
                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter Prompt' />
                        <div className='button'>
                            <img onClick={() => onSent()} src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className="bottom-info">
                        This website made by Joy using React JS and also Gemini API
                    </p>
                </div>
            </div>
        </div>
    )
}

export default main
