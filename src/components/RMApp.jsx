import React, { useState } from 'react';
import { usePersonajes } from '../hooks/usePersonajes';
import { GridPersonajes } from './GridPersonajes';
import Pagination from '@mui/material/Pagination';
import { BuscarPersonajes } from './BuscarPersonajes';


export const RMApp = () => {
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSpecies, setSelectedSpecies] = useState('');
    const { characters, pag, allSpecies } = usePersonajes(page, searchTerm, selectedSpecies);

    const handlePageChange = (event, value) => {
        setPage(value);
    }

    const handleSearch = (term) => {
        setSearchTerm(term);
        setPage(1); 
    }

  return (
    <>
        <nav className='navbar navbar-succes bg-succes fixed-top position-relative'>
                <div className='container-fluid'>
                        <img src="https://repository-images.githubusercontent.com/120371205/b6740400-92d4-11ea-8a13-d5f6e0558e9b" alt="Logo" width="100" height="50" class="d-inline-block align-text-top alig-items-left mt-10 w-10" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmRituBykJDfbBMeNym2UaQ9awQ1HgbN-JfQ&s" alt="Logo" width="225" height="70" class="d-inline-block align-text-top alig-items-left mt-10 w-10" />

                    <div className='container d-flex flex-row justify-content-center align-items-center mt-3 w-50'>
                        <BuscarPersonajes handleSearch={setSelectedSpecies} allSpecies={allSpecies} />
                    </div>
                </div>
            </nav>
            <GridPersonajes characters={characters} />
            <Pagination className='d-flex justify-content-center mt-4' count={pag} page={page} onChange={handlePageChange} />
    </>
  )
}


