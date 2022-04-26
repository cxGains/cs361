import React from 'react';
import SelectQuantity from './SelectQuantity';

function GroceryRow({item}) {
    return (
        <tr>
            <td>{item.name}</td>
            <td><SelectQuantity /></td>
        </tr>
    );
}

export default GroceryRow;