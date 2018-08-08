import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UpdateModal from './updateTheModal';
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemsAction';
import {
    CSSTransition,
    TransitionGroup
} from 'react-transition-group';





class ShoppingLIstItem extends Component {
    componentDidMount() {
        this.props.getItems();
    }
    // onUpdateItem = (id, newItem) => {
    //     const items = this.props.items;
    //     let ItemIndex = items.findIndex((item) => {
    //         return item.id = id;
    //     });

    //     this.setState({
    //         items: [...items.splice(ItemIndex, 1, newItem)]
    //     })

    // }
    handleDelete = (id) => {
        this.props.deleteItem(id);
    }



    render() {
        const items = this.props.items
            .map((item) => {
                return (
                    <CSSTransition key={item._id} classNames="fade" timeout={500} style={{position:"relative"}}>
                        <ListGroupItem>
                            <Button
                                className="remove-btn mr-4"
                                color="danger"
                                size="sm"
                                onClick={this.handleDelete.bind(this, item._id)}
                            >&times;
                        </Button>
                            {item.name}
                            <span style={{marginLeft:"20px"}}>
                                {item.date}
                            </span>
                            <UpdateModal   id={item._id} name={item.name} />

                        </ListGroupItem>
                    </CSSTransition>
                )
            })
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}
ShoppingLIstItem.propTypes = {
    getItems: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
}
function mapStateToProps(state) {
    return {
        items: state.item.items
    }
}
export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingLIstItem);