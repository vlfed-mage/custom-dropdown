import React, { useState, useEffect, useRef } from 'react';
import DropdownItem from './DropdownItem';
import Search from './Search';

const Dropdown = ({ items, searchFunction }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const dropdownRef = useRef(null);

    console.log(dropdownRef);

    useEffect(() => {
        document.addEventListener('mousedown', closeDropdown);
        return () => {
            document.removeEventListener('mousedown', closeDropdown);
        };
    }, []);

    const closeDropdown = e => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    const handleOpenDropdown = () => setIsOpen(true);

    const handleSelectItem = item => {
        setSelectedItem(item);
        setIsOpen(false);
    };

    return (
        <div ref={dropdownRef}>
            <button onClick={handleOpenDropdown} onFocus={handleOpenDropdown}>
                {selectedItem || 'Select an item...'}
            </button>

            {isOpen && (
                <div className='dropdown-menu'>
                    <Search searchFunction={searchFunction} />
                    {items.map((item, index) => (
                        <DropdownItem
                            key={index}
                            item={item}
                            onSelect={() => handleSelectItem(item)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
