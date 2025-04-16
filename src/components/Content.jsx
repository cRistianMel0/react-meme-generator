import { useState } from "react"
import { useEffect } from "react";
export default function Content() {

    const [memesData, setMemesData] = useState([]);
    const [meme, setMeme] = useState({
        topText: 'One does not simply',
        bottomText: 'Walk into Mordor',
        imgUrl: 'http://i.imgflip.com/1bij.jpg'
    });

    function handleChange(e) {
        let { value, name } = e.currentTarget;
        setMeme((meme) => ({ ...meme, [name]: value }))
    }

    function getNewMeme(){
        let newMeme = memesData[Math.floor(Math.random() * memesData.length)]        
        setMeme((prev) => ({...prev, imgUrl: newMeme.url}) )
    }

    useEffect(() => {
        const url = "https://api.imgflip.com/get_memes";
        fetch(url)
        .then(response => response.json())
        .then(data => setMemesData(data.data.memes))        
    }, [])
    
    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button onClick={() => getNewMeme()}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imgUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}