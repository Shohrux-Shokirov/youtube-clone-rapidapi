import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';


function Sidebar({ selectedCategory, setSelectedCategory }) {
  return (
    <Stack
      overflow='auto'
      direction='row'
      sx={{
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column' },
      }}
    >
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => setSelectedCategory(category.name)}
          className='category-btn'
          style={{
            width: '100%',
            zIndex: 20,
            color: 'white',
            border: category.name === selectedCategory ? 'solid 1px white' : 'solid 1px #1E1D32', boxShadow: category.name === selectedCategory ? 'inset 0px 0px 5px white' : 'inset 0px 0px 5px #1E1D32'
          }}

        >
          <span style={{ color: category.name === selectedCategory ? 'white' : 'white', marginRight: '15px' }}>{category.icon}</span>
          <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8' }}>{category.name}</span>
        </button>
      ))}
    </Stack>
  )
}

export default Sidebar