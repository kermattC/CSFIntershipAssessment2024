import BreedsList from './breedsList'
import DogNumber from './dogNums';
import axios from 'axios';

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
        sendFormData();
    }

    // sends the form data to the backend and over to mongodb
    const sendFormData = () => {
        axios.post('/user/sendForm', {
            user: formData.username,
            breed: formData.breed,
            numDogs: formData.dogNumber,
            email: formData.email
        })
        .then(response => {
            const res = response.data
            if (res.status === "SUCCESS") {
                console.log("Successfully posted!")
            }
        })
        .catch(error => {
            console.log("Error: ", error)
        })
    }

    // I used react bootstrap form since it has convenient built-in error checking for the email
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" name="name" value={formData.name} onChange={handleInputChange}/>
            </Form.Group>
    
            <Form.Group className="mb-3">
                <BreedsList name="breed" value={formData.breed}/>
                <DogNumber name="dogNumber" value={formData.dogNumber}/>
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