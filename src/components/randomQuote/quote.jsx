import React, { useState } from "react";
import "./quote.css"
import X_icon from "../assets/X.png"
import Ref_icon from "../assets/Ref.png"
const Quote = () => {
    let quotes=[];
    async function loadQuotes(){
        const response=await fetch("https://api.api-ninjas.com/v1/quotes",{
            headers:{'X-Api-Key':'LvhX3x8jSwdJhC5q3UB2Uw==rb5uLcSUJQoKQhtb'}
        });
        quotes=await response.json();
    }
    const [quote, setQuote] = useState({
        quote: "The best way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
        category: "inspirational"

    })
      const random=()=>{
        const select=quotes[Math.floor(Math.random()*quotes.length)]
        setQuote(select);
    }
    const twitter=()=>{
        window.open(`https://twitter.com/intent/tweet?text=${quote.quote} ~ ${quote.author}`,'_blank');
    }
    loadQuotes();
    return (
        <div className="container">
            <div className="quote">
                {quote.quote} ~<i> {quote.category}</i>
            </div>
            <div>
            <div className="line"></div>
                <div className="bottom">
                    <div className="author">- {quote.author.split(',')[0]}</div>
                    <div className="icons">
                        <img src={Ref_icon} onClick={random} alt="" />
                        <img src={X_icon} alt="" onClick={twitter}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Quote