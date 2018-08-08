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
import { updateItem } from '../actions/itemsAction';


class UpdateModal extends Component {

    state = {
        modal: false,
        name: this.props.name,

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

    handleUpdate(id) {

        let newdata = {
            id: id,
            name: this.state.name,

        }
        this.props.updateItem(newdata);
        this.toggle();
    }

    render() {
        return (
            <div style={{ display: "inline", position: "absolute", top: "9px", right: "28px" }}>
                <Button
                    color="dark"


                    onClick={this.toggle}
                >
                    update
            </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader>Update  </ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label>Name:</Label>
                                <Input
                                    name='name'
                                    placeholder='enter name'
                                    value={this.state.name}
                                    onChange={this.onChange}
                                />
                            </FormGroup>
                            <Button color="dark" onClick={this.handleUpdate.bind(this, this.props.id)}>
                                update
                            </Button>
                        </Form>

                    </ModalBody>

                </Modal>

            </div>

        )
    }
}
export default connect(null, { updateItem })(UpdateModal);