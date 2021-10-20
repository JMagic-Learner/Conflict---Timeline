// Importing necessary elements from Material Ui
import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
// Hanlde search styling
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));
const SearchForm = ({ searchText }) => {
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        searchText(text)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                
                <StyledInputBase
                
                    type="text"
                    placeholder="e.g politics"
                    onChange={(e) => setText(e.target.value)}
                />
                <Button type="submit" variant="contained">Submit</Button>

            </form>
        </div>
    )
}

export default SearchForm