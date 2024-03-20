import React from 'react'
import "./Error.css"

export default function Error() {
    return (
        <>
            <div className="erro-container">

                <div className="error">

                    <img src="error.svg" alt="error" />
                    <div className="login-nextpg btnerr" >
                        <a href='/'>Back</a>
                    </div>
                </div>
            </div>
        </>

    )
}


