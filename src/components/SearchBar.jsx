import React from 'react';

function SearchBar({ onSubmit }) {
    const [term, setTerm] = React.useState("")

    function handleSubmit(event) {
        event.preventDefault();  
        onSubmit(term);
    }

    
    function handleChange(event){
        setTerm(event.target.value);
    }

    return (
        <div className="bg-slate-800 h-[200px] flex items-center justify-center">
            <form 
                className="border border-gray-300 border-3 p-4 bg-white rounded-lg shadow-md" 
                onSubmit={handleSubmit}
            >
                <input 
                    className="border border-blue-900 h-[30px] w-full max-w-[700px] p-2 rounded-lg"
                    placeholder="Search The Image"
                    value={term}
                    onChange={handleChange}
                />
            </form>
        </div>
    );
}

export default SearchBar;
