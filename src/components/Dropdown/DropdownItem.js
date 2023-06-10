import React from 'react';

const DropdownItem = ({ item, onSelect }) => {
    return (
        <div onClick={onSelect} className='dropdown-item'>
            {item}
        </div>
    );
};

export default DropdownItem;
