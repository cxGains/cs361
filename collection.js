import React from 'react';
import GroceryTable from '../components/GroceryTable';


function OrderPage({items}) {
    return(
        <>
        
        <article className="App-article">
           
            
            
            <GroceryTable items={items}/>
            
        </article>
        </>
    );
}

export default OrderPage;