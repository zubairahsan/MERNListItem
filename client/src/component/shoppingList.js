import React, { Component } from 'react';
import ShoppingListItem from './shoppingListItems';
import ItemModal from './itemModal';

import {
    Container,
 
} from 'reactstrap';



class ShoppingList extends Component {
  

   

    


    style = {
        marginBottom: "2rem",
    }
    render() {
        
        return (
            <Container>
                <ItemModal/>
                <ShoppingListItem  />

            </Container>
        )
    }
}



export default ShoppingList;