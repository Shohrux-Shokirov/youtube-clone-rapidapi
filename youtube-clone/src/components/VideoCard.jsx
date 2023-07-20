import { CheckCircleSharp } from '@mui/icons-material';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { demoChannelUrl, demoVideoUrl, demoChannelTitle, demoVideoTitle, demoThumbnailUrl } from '../utils/constants';


function VideoCard({ video: { id: { videoId }, snippet } }) {


  return (
    <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px" }, boxShadow: '0px 0px 5px white', borderRadius: 2,  border: 'solid 1px white' }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url} alt={snippet?.title}
          sx={{ width: { xs: '100%', sm: '358px', md: '320px'}, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: '#1E1D32', height: 100, }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant='subtitle1' fontWeight='bold' color='#fff'>
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant='subtitle1' fontWeight='bold' color='gray'>
            {snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
            <CheckCircleSharp sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard;