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
import { connect } from 'react-redux';
import { addItem } from '../actions/itemsAction';



class ItemModal extends Component {
    state = {
        modal: false,
        name: '',
        // disable: true
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

    handleAddItem = (e) => {
        e.preventDefault();
        let newItem = this.state.name;
        if (newItem.trim() === '') {
            alert("enter somthing...")
        } else {
            this.props.addItem({ name: newItem });
            this.toggle();
        }


    }
    // handleUpdate(id) {

    //     let items = this.props.items;
    //     console.log(items);
    //     let findIndexToUpdate = items.findIndex((item) => {
    //         return item.id = id;
    //     })
    //     let element = items[findIndexToUpdate]
    //     this.setState({
    //         name: element.name
    //     })



    // }

    render() {
        return (
            <div>
                <Button
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={this.toggle}

                >
                    Add Item
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader>Add Item </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleAddItem}>
                            <FormGroup>
                                <Label>Name:</Label>
                                <Input
                                    name='name'
                                    placeholder='enter name'
                                    value={this.state.name}
                                    onChange={this.onChange}
                                />
                            </FormGroup>
                            <Button className="p-2" color="dark">
                                Enter
                            </Button>

                        </Form>

                    </ModalBody>

                </Modal>

            </div>

        )
    }
}
export default connect(null, { addItem })(ItemModal);