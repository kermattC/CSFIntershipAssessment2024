import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchDogPics } from '../store/utils/thunk';
import { Image } from 'react-bootstrap';

// Called when the form is submitted. However there's a limitation here where this can only get called once due to how I put the formData.submitted as the dependency (only gets updated once)
// Makes another API call to the dog API, but this one is to get a picture of the desired dog
const DogPics = () => {
    const dispatch = useDispatch();
    const formData = useSelector((state) => state.formDetails);

    const [dogPictures, setDogPictures] = useState('')

    useEffect(() => {
        dispatch(fetchDogPics(formData))
        .then((response) => {
            if (response.payload) {
                console.log('Dog pictures:', response.payload);

                setDogPictures(response.payload.message.toString());
            }

            console.log("Dog pictures: ", dogPictures)
        })
        .catch((error) => {
            console.error("Error fetching dog pics:", error);
        });
        
    }, [formData.submitted]);
    
    
    // just use conditional rendering to render the dog pics. If I had more time I'd replace this with more error checking
    return (
        <>

            {formData.submitted ?
                <Image src={dogPictures} roundedCircle />
            : 
            <div>No dogs requested yet</div>}


            {/* {formData.submitted ? <div>Form submitted
                    {console.log('dog pictures: ', dogPictures)}
            </div> : <div>No dogs requested yet</div>} */}
        </>
    )
}

export default DogPics;
