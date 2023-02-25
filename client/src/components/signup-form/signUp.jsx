import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CopyRight from '../layout/copyRight';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import { Link as LinkRouter } from 'react-router-dom';
import { Divider, Zoom } from '@mui/material';
import { makeStyles } from '@mui/styles';
import RadioButtonsGroup from '../radio-buttons-group/radioButtonsGroup';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  root: {},
  authButton: {
    marginTop: 25,
    fontWeight: 700,
    borderRadius: '25px',
    backgroundColor:'#edeef0'
  },
}))


export default function SignUp() {
  const classes = useStyles()

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      await axios.post('http://localhost:5000/api/users',{
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
      birthday: data.get('birthday'),
      gender: data.get('gender'),
    }).then(res => {
      console.log(res.data)
    })
    } catch (error) {
      console.log(error)
    }
    console.log({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
      birthday: data.get('birthday'),
      gender: data.get('gender'),
    });
  };

  return (
    <Zoom in={true} style={{ transitionDelay:'200ms' }} >
      <Container component="main" maxWidth="sm">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
           <Typography component="h1" variant="h5" fontWeight={1000} >
            Getting Started
          </Typography>
          <Typography  fontWeight={700} color='grey' sx={{mt:1}}>
            Create an account to continue and connect with Devs!
          </Typography>
          <Grid container>
            <Grid item xs marginBottom={1}>
              <Button
                className={classes.authButton}
                type="submit"
                variant="conatined"
              >
                <GoogleIcon sx={{mr:2, color:'green'}} />
                Log in with Google
              </Button>
            </Grid>
            <Grid item>
              <Button
                type="submit"
                variant="conatined"
                className={classes.authButton}
              >
                <AppleIcon sx={{mr:2}} />
                Log in with Apple
              </Button>
            </Grid>
          </Grid>
          <Divider flexItem sx={{mt:1,mb:2,fontWeight:1000}}>
            OR
          </Divider>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name='birthday'
                  label="Birthday"
                  type="date"
                  fullWidth
                  id="birthday"
                  autoComplete='birthday'
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} >
                Gender
                  <RadioButtonsGroup/>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, fontWeight:700 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <LinkRouter to='/signin'>
                  <Link variant="body2">
                    Already have an account? Sign in
                  </Link>
                </LinkRouter>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <CopyRight sx={{ mt: 5 }} />
      </Container>
      </Zoom>
  );
}
