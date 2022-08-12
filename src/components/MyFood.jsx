import React from 'react'

function MyFood({name, origin, nickname}) {
    return (
        <div>
            <h2>The name of my food is {name}. It originated from {origin}. it is popularly known as {nickname}.
            </h2>
        </div>
    )


}

export default MyFood