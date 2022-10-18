import React from "react";

const PasswordButton = (props) => {

    return (
        <div>
            <input type={props.type} placeholder="Confirm Password" />
            <button type="submit">{props.btnvalue}</button>
        </div>
    );
}

export default PasswordButton;