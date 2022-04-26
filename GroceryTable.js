import React from 'react';
import GroceryRow from './GroceryRow';


function GroceryTable({items, quantity}) {
    return (
        <table id="grocery list">
            <caption>Fridge Collection</caption>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item,i)=> <GroceryRow item={item} key={i} />)}
            </tbody>
        </table>
    );
}

export default GroceryTable;