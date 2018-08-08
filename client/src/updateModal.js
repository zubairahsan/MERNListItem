import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import uuid from 'uuid';


class UpdateModal extends Component {
    state = {
        modal: false,
        name: '',
        // disable: true
    }

    constructor(){
        super();
        alert(20)
        console.log(this.props.data)
    }
    toggle = () => {
        
        this.setState({
            modal: !this.state.modal,
          
        })
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
         
        })

    }

    handleUpdate = (e) => {
        e.preventDefault();
        let newItem = this.state.name;
        if (newItem.trim() === '') {
            alert("enter somthing...")
        } else {
            this.props.onAdd({ name: newItem, id: uuid() });
            this.toggle();
        }}



    render() {
        return (
            <div>
                <Button
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={this.toggle}

                >
                    Update
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader>update Item </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleUpdate}>
                            <FormGroup>
                                <Label>Name:</Label>
                                <Input
                                    name='name'
                                    placeholder='enter name'
                                    defaultValue={this.props.data.name}
                                    onChange={this.onChange}

                                />
                            </FormGroup>
                
                            <Button color="primary" onClick={this.handleUpdate} className=" p-2 ml-3">
                        
                                update
                            </Button>
                        </Form>

                    </ModalBody>

                </Modal>

            </div>

        )
    }
}
export default UpdateModal;