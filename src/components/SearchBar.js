import {Box, IconButton, InputAdornment, OutlinedInput} from "@mui/material";
import BackspaceIcon from "@mui/icons-material/Backspace";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

const SearchBar = ({centered, handleRicerca, searchValue}) => {
    return(
        centered ? (
                <Box display="flex" justifyContent="center" style={{marginTop:20, marginBottom:20}}>
                    <OutlinedInput
                        onChange={handleRicerca}
                        value={searchValue}
                        id="outlined-adornment-password"
                        type={'text'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => {
                                        handleRicerca(null);
                                    }}
                                    onMouseDown={() => {}}
                                    edge="end"
                                >
                                    {searchValue !== "" ? <BackspaceIcon /> : <SearchIcon />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label=""
                    />
                </Box>
        ) : (
                <OutlinedInput
                    onChange={handleRicerca}
                    value={searchValue}
                    id="outlined-adornment-password"
                    type={'text'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => {
                                    handleRicerca(null);
                                }}
                                onMouseDown={() => {}}
                                edge="end"
                            >
                                {searchValue !== "" ? <BackspaceIcon /> : <SearchIcon />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label=""
                />
        )

    );
}

export default SearchBar;