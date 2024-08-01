import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DisplayBackgroundImage from '../images/DisplayBackgroundImage';

function Home() {

    const [username, setUsername] = useState("");
    const [submitStatus, setSubmitStatus] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitStatus(true);
    }

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = '/quiz'; 
        navigate(path);
  }

    const homeBackgroundImage = DisplayBackgroundImage();

    return (
        <>
            <main className="home-content" style={{ backgroundImage: `url(${homeBackgroundImage})` }}>

                {/* Other components and content */}
                <form onSubmit={handleSubmit}>
                    <label>Enter name:
                        <input type="text"
                            value={username}
                            onChange={username => setUsername(username.target.value)}
                        />
                    </label>
                    <button type="submit">Submit</button>
                    {submitStatus ? <p>Welcome {username}!</p> : null}
                </form>

                <button className="startQuizButton" onClick={routeChange}>
                     Start quiz 
                </button>

            </main>
        </>
    )
}

export default Home;