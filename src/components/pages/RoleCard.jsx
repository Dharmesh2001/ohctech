import { Card, CardActionArea, CardMedia, Typography } from '@mui/material';
import React from 'react';

export default function RoleCard({ icon, name }) {
  return (
    <Card sx={{ width:120, display:'flex',justifyContent:'center', height: 120, 
    marginLeft: 4, marginBottom: '1rem',
    
     }}>
      <CardActionArea sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <CardMedia
          component="img"
          image={icon}
          alt="image"
          sx={{
            width: 60,
            height: 60,
            objectFit: 'contain',
             marginBottom: 2
          }}
        />
        <Typography variant="body2">{name}</Typography>
      </CardActionArea>
    </Card>
  );
}