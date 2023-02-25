import React from 'react';
import { Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {},
  coverImage: {
    display: 'block',
    textDecoration:'none',
    borderRadius:"10px 10px 0px 0px",
    width: '99vw',
    height: '45vh',
    objectFit: 'cover'
  },
}))

const CoverImage = () =>{
  const classes = useStyles()
return (
  <Paper >
      <img className={classes.coverImage} src={'https://source.unsplash.com/random'} alt={"Alt"} />
    </Paper>
)
}


export default CoverImage
