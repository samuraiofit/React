import React from "react";
import ReactDOM from "react-dom/client";
import Text from "./components/Text";
import User from "./components/User";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
    <Text />
    <Ipsun />
    <User name='Isa' age='26' city='Grozny'/>
    </>
    
)

function Ipsun(){
    return(
        <h3>ipsun</h3>
    )
}