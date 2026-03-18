import { useState } from "react";

function LikeButton(){

    const [likes , setLikes] = useState(0);

    const handleLike = () => {
        setLikes(prev => prev +1);
    };

    const handleDislike = () => {
        setLikes(prev => (prev > 0 ? prev - 1 : 0));
    }

    const handleReset = () => {
        setLikes(0);
    };

    const isPopular = likes > 10;

    return(
        <div style = {{ margin : "20px", border: "1px solid gray", padding: "10px" }}>

            <button 
                onClick={handleLike}
                style = {{ backgroundColor : isPopular ? "green" : "lightgreen"}}    
            >
                Like
            </button>

            <button
                onClick={handleDislike}
                style={{ marginLeft: "10px"}}
            >
                Dislike
            </button>

            <button 
                onClick={handleReset} 
                style = {{ margin : "20px" }}
            >
                Reset
            </button>

            <p>
                {likes} {likes === 1 ? "Like" : "Likes"}
            </p>

        </div>
    );

}

export default LikeButton;