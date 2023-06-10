import Dropdown from '../Dropdown';

const items = ['Item 1', 'Item 2', 'Item 3'];

const searchFunction = async searchTerm => {
    // Search logic here
    // Can be an async request to the API or simply filtering the 'items' array.
    // Result returns an array.
};

export const App = () => {
    return (
        <div className='App'>
            <h1>Custom Dropdown Component</h1>
            <Dropdown items={items} searchFunction={searchFunction} />
            <Dropdown items={items} searchFunction={searchFunction} />
            <Dropdown items={items} searchFunction={searchFunction} />
        </div>
    );
};
