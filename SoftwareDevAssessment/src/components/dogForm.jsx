import BreedsList from './breedsList'
import DogNumber from './dogNums';
import DogPics from './dogPics';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormData, updateFormSubmitted } from '../store/reducers/formDetails';

const DogForm = () => {

    // connect to redux store for form data
    const dispatch = useDispatch();
    const formData = useSelector((state) => state.formDetails);

    // update value of whichever field was updated by the user
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        dispatch(updateFormData({...formData, [name]: value}))
    };


    const handleSubmit = (e) => {
        console.log(e)
        e.preventDefault();
        dispatch(updateFormSubmitted())
        console.log("Form data: ", formData)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" name="name" value={formData.name} onChange={handleInputChange}/>
            </Form.Group>
    
            <Form.Group className="mb-3">
                <BreedsList name="breed" value={formData.breed}/>
                <DogNumber/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>(Optional) Email address</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" name="email" value={formData.email} onChange={handleInputChange}/>
                    <Form.Text className="text-muted">
                    If you want to come back later and see your dogs!
                </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
                Bring me the dogs!
            </Button>
      </Form>
    )
}

export default DogForm;