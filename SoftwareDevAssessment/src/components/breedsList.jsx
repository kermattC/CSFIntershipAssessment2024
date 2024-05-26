import Dropdown from 'react-bootstrap/Dropdown';

import { useState, useEffect } from 'react';
import { fetchBreedsList } from '../store/utils/thunk';
import { useDispatch } from 'react-redux';

// this compoennt uses the dog API to get the list of dog breeds, and map them into a dropdown menu
const Breeds = () => {

    const dispatch = useDispatch();

    const [buttonLabel, setButtonLabel] = useState('Select breed');
    const [breedsList, setBreedsList] = useState([]);

    useEffect(() => {
        dispatch(fetchBreedsList())
        .then((response) => {
            if (response.payload)  {
                const breeds = response.payload.message;

                // the api delivers the list of breeds where each breed is a key. However some breeds share the same second name (ie: golden retriever, chesapeake retriever)
                    // if this is the case, the key will have multiple values. The key is the second name (excluding australian shepard and a couple others for some reason), and the values under the key are the first name
                // I map the keys which are the breed names to the dropdown items
                // if the key has more than 0 items, that means it's one of those breeds that has a first and second name. So I map again to dropdown items, but with the first and second name
                const keys = Object.keys(breeds)

                const dogListItems = keys.map((key) => {
                    const dogName = breeds[key]

                    if (dogName.length > 0){
                        return dogName.map((firstName) => (
                            <Dropdown.Item key={firstName + '-' + key} eventKey={firstName + ' ' + key}>{`${firstName} ${key}`}</Dropdown.Item> // eventKey instead of onClick because onClick called handleSelect twice

                        ));
                    } else {
                        return <Dropdown.Item key={key} eventKey={key}>{key}</Dropdown.Item>
                    }
                })
                setBreedsList(dogListItems)
            }
        })
    }, [])

    const handleSelect = (e) => {
        // console.log('made it here')
        // console.log(e)
        setButtonLabel(e)
    }
    
    return(
        <>
            <Dropdown title="Breed" onSelect={handleSelect}>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    {buttonLabel}
                </Dropdown.Toggle>
        
                <Dropdown.Menu>
                    {breedsList}
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default Breeds;