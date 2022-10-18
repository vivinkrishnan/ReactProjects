import React from "react";

const EmojiImage = (img) => {

    return(
        <span className="emoji" role="img" aria-label="Tense Biceps">
        {img.img}
      </span>

    );

};

export default EmojiImage;