import React from "react";
import EmojiImage from "./EmojiImage";

const Entry = (emoji) => {

    return(
        <div className="term">
              <dt>
                <EmojiImage img={emoji.emoji} />
                <span>{emoji.name}</span>
              </dt>
              <dd>
                {emoji.meaning}
              </dd>
        </div>         
    );
};

export default Entry;