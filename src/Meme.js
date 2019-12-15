import React, { useState, useEffect } from 'react'


function Meme() {

    const [topText, setTopText] = useState('')
    const [bottomText, setBotText] = useState('')
    const [memeImage, setMemeImage] = useState('https://via.placeholder.com/300')

  
    useEffect(() => {
        const rand = Math.floor(Math.random() * 99)
        async function fetchData() {
                const response = await fetch('https://api.imgflip.com/get_memes')
                const data = await response.json()                
                setMemeImage(data.data.memes[rand].url)
        }
        fetchData()
    }, [])
    
    
   
    return (
        <div>
            <img className="meme" src={memeImage} alt="meme"/>
            <form onSubmit={() => setMemeImage(memeImage)}>
                <input 
                    type="text" 
                    name="topText" 
                    value={topText} 
                    onChange={e => setTopText(e.target.value)}
                    placeholder="insert top cit." 
                />
                <input 
                    type="text" 
                    name="bottomText" 
                    value={bottomText} 
                    onChange={e => setBotText(e.target.value)}
                    placeholder="insert bot cit." 
                />
                
                <button>GENERATE MEME</button>
            </form>
    
            <h3 className="top-text">{topText}</h3>
            <h3 className="bottom-text">{bottomText}</h3>
            
        </div>
    )
}

export default Meme
