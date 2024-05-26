import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchDogPics } from '../store/utils/thunk';

const DogPics = () => {
    const dispatch = useDispatch();
    const formData = useSelector((state) => state.formDetails);

    const [dogPictures, setDogPictures] = useState([])

    useEffect(() => {
        dispatch(fetchDogPics(formData))
        .then((response) => {
            if (response.payload)
                // const dogPics = response.payload;
                console.log("response: ", response.payload)
                setDogPictures(response.payload)
        })
    }, [])

    // just use conditional rendering to render the dog pics. If I had more time I'd replace this with more error checking
    return (
        <>
            {formData.submitted ? <div>Form submitted
                    {console.log('dog pictures: ', dogPictures)}
            </div> : <div>Form not submitted</div>}
        </>
    )
}

export default DogPics;
