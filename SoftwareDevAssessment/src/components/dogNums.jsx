import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';

// basically the same dropdown menu as before, but minus the api part
const DogNumber = () => {

    const [buttonLabel, setButtonLabel] = useState('How many dogs?')

    const handleSelect = (e) => {
        setButtonLabel(e)
    }
    
    return (
        <Dropdown title="NumOfDogs" onSelect={handleSelect}>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            {buttonLabel}
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item id='1-dog' eventKey={'1 dog'}>1</Dropdown.Item>
            <Dropdown.Item id='2-dog' eventKey={'2 dogs'}>2</Dropdown.Item>
            <Dropdown.Item id='3-dog' eventKey={'3 dogs'}>3</Dropdown.Item>
            <Dropdown.Item id='4-dog' eventKey={'4 dogs'}>4</Dropdown.Item>
            <Dropdown.Item id='5-dog' eventKey={'5 dogs'}>5</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
    )
}

export default DogNumber