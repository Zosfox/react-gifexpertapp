import React, { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleImputChange = (e) => {

        setInputValue(e.target.value);

    }

    const handleSubmmit = (e) => {

        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');

        }



    }


    return (

        <form onSubmit={handleSubmmit}>
            {/* <h1>{inputValue}</h1> */}
            <input

                type="Text"
                value={inputValue}
                onChange={handleImputChange}
            />
        </form>

    )

}

AddCategory.protoTypes = {

setCategories: PropTypes.func.isRequired

} // candado