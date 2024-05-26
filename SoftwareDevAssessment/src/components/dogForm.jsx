import BreedsList from './breedsList'
import DogNumber from './dogNums';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const DogForm = () => {

    const handleSubmit = (e) => {
        console.log(e)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="Enter your name" />
            </Form.Group>
    
            <Form.Group className="mb-3">
                <BreedsList/>
                <DogNumber/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>(Optional) Email address</Form.Label>
                    <Form.Control placeholder="Enter email" />
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