import React from 'react'

function Conditional_Rendering() {

    // const [isLoggedIn, setIsLoggedIn] = React.useState(false) // Not much difference in rendering as value are just boolean state.
    // const [isLoggedIn, setIsLoggedIn] = React.useState(null) // In case of null state --> works same as above
    // const [isLoggedIn, setIsLoggedIn] = React.useState(undefined) // In case of undefined state --> works same as above
    // const [isLoggedIn, setIsLoggedIn] = React.useState("") // In case of "" state --> works same as above
    // const [isLoggedIn, setIsLoggedIn] = React.useState() // In case of no state --> works same as above

    const [isLoggedIn, setIsLoggedIn] = React.useState(0) // In case of 0 --> on initial mount, it will display 0 for "&&" case. 
    // For correction -> use !!isLoggedIn to convert 0 to 100% boolean false. 
    // Now it can also handle (Nan) values as well. Now able to handle "3000 Rupees" as value of state.

    // const [isLoggedIn, setIsLoggedIn] = React.useState([]) // In case of empty array --> on initial mount, it will true condition for both case. 
    // For correction --> make use of length > 0 condition.

  return (
    <div style={{padding: "2rem"}}>
        <h1>Conditional_Rendering</h1>
        <button onClick={()=>{
            setIsLoggedIn(!isLoggedIn)
        }}>Toggle Login</button>

<div>
    <h3>&& operator (Conditional Rendering) </h3>
    {!!isLoggedIn && <h2>Welcome User</h2>}
</div>

<div>
    <h3>Ternary operator (Conditional Rendering) </h3>
    {isLoggedIn ? <h2>Welcome User via Ternary</h2> : <h2>Please Login</h2>}
</div>

    </div>
  )
}

export default Conditional_Rendering