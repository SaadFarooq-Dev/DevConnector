import * as React from 'react';
import { Box, Container, Grid } from '@mui/material';
import CoverImage from '../cover-image/CoverImage';


const Profile = (props) =>{
  return (
    <>
    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }} >
        <main >
          <Grid container sx={{ mt: 3 }}>
            <CoverImage/>
          </Grid>
        </main>
    </Box>
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} >
        <main>
          <Grid container sx={{ mt: 3 }}>
            <CoverImage/>
          </Grid>
        </main>
    </Box>
    </>
)
}

export default Profile
