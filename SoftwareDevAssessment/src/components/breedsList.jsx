import Dropdown from 'react-bootstrap/Dropdown';

import { useState, useEffect } from 'react';
import { fetchBreedsList } from '../store/utils/thunk';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormData } from '../store/reducers/formDetails';


// this compoennt uses the dog API to get the list of dog breeds, and map them into a dropdown menu
const Breeds = () => {

    const dispatch = useDispatch();
    const formData = useSelector((state) => state.formDetails);

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
                    const secondName = key.charAt(0).toUpperCase() + key.slice(1)
                    const dogName = breeds[key]

                    // also need to capitalize the first letter since that is what the api requires
                    // i don't like the nested return but it's the only thing i can think of at the moment
                    if (dogName.length > 0){
                        return dogName.map((firstNameTemp) => {
                            const firstName = firstNameTemp.charAt(0).toUpperCase() + firstNameTemp.slice(1);
                            return (
                                <Dropdown.Item key={firstName + '-' + secondName} eventKey={firstName + ' ' + secondName}>
                                    {`${firstName} ${secondName}`}
                                </Dropdown.Item>
                            );
                        });
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
        dispatch(updateFormData({...formData, breed: e}))
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