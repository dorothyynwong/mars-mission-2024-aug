import React, { useState, useEffect } from 'react';
import { fetchAPI } from '../utils/fetchData';

interface PictureOfDay {
    date: string,
    explanation: string,
    hdurl: string,
    title: string,
    url: string
}

const DisplayBgImage = () => {
    const [myPictureData, setMyPictureData] = useState<PictureOfDay | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const FetchPicture = async () => {

        try {
            setIsLoading(true);

            // const pictureData = await fetchAPI("https://api.nasa.gov/planetary/apod?api_key=");
                //    test picture data for when the API requests have reached their limit:
            const pictureData = {
        "date": "2024-07-30",
        "explanation": "To some, it looks like a penguin. But to people who study the universe, it is an interesting example of two big galaxies interacting. Just a few hundred million years ago, the upper NGC 2936 was likely a normal spiral galaxy: spinning, creating stars, and minding its own business.  Then it got too close to the massive elliptical galaxy NGC 2937, below, and took a dive.  Together known as Arp 142, they are featured in this new Webb infrared image, while a visible light Hubble image appears in comparison.  NGC 2936 is not only being deflected, but distorted, by this close gravitational interaction.  When massive galaxies pass near each other, gas is typically condensed from which new stars form.  A young group of stars appears as the nose of the penguin toward the right of the upper galaxy, while in the center of the spiral, bright stars together appear as an eye.  Before a billion years, the two galaxies will likely merge into one larger galaxy.   Explore Your Universe: Random APOD Generator",
        "hdurl": "https://apod.nasa.gov/apod/image/2407/Arp142_Webb_1487.jpg",
        "media_type": "image",
        "service_version": "v1",
        "title": "Arp 142: Interacting Galaxies from Webb",
        "url": "https://apod.nasa.gov/apod/image/2407/Arp142_Webb_960.jpg"
    }

            setMyPictureData(pictureData);
            setIsLoading(false);

        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err); // Set the actual Error object
            } else {
                setError(new Error('An unknown error occurred')); // Provide a default Error object
            }

            setIsLoading(false);
        }
    }
    useEffect(() => {
        FetchPicture();
    }, [])

    if (isLoading) return (<div>Is Loading...</div>);
    if (error) return (<div>{error.message}</div>);
    if (!myPictureData) return (<div>EMPTY</div>);


    // return (
    //     <div style={{ backgroundImage: `url(${myPictureData.hdurl})`}}>
    //         {/* remove this when we have actual content for our Home  */}
    //         <div className='test-home-bg'>
    //             Current bg image: {myPictureData.hdurl}
    //         </div>
    //     </div>
    // )

return (
    <img className='backgroung-img' src={myPictureData.hdurl}/>
)

};

export default DisplayBgImage;