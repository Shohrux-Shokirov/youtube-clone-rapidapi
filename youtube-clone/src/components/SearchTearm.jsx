import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';

function SearchFeed() {

  const [videos, setVideos] = useState([]);
  const { searchTearm } = useParams();

  // useEffect to fetch data from Rapid  API

  useEffect(() => {

    fetchFromAPI(`search?part=snippet&q=${searchTearm}`)
      .then((data) => setVideos(data.items))
  }, [searchTearm]);

  return (
    <Box p={2} sx={{ overflow: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant='h4' fontWeight='bold' mb={2} sx={{
        color: 'white'
      }}>
        Search results for: <span style={{ color: '#F31503' }}>{searchTearm}</span> videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed