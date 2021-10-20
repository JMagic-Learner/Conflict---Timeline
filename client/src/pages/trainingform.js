import React, { useState } from 'react'

const SearchForm = ({ searchText }) => {
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        searchText(text)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="e.g politics"
                    onChange={(e) => setText(e.target.value)}
                    className="py-1 px-2 rounded-l"
                />
                <button
                    type="submit"
                    className="bg-green-400 py-1 px-2 text-white rounded-r"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default SearchForm




// import React from 'react';
// import { Redirect, useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import EventForm from '../components/EventForm';
// import EventList from '../components/EventList';
// import { QUERY_USER, QUERY_ME } from '../utils/queries';
// import Auth from '../utils/auth';import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import Typography from "@material-ui/core/Typography";

// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: "center",
//     color: theme.palette.text.secondary
// }));

// const Profile = () => {
//     const { username: userParam } = useParams();

//     const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
//         variables: { username: userParam },
//     });

//     const user = data?.me || data?.user || {};
//     // redirect to personal profile page if username is yours
//     if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
//         return <Redirect to="/me" />;
//     }

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (!user?.username) {
//         return (
//             <h4>
//                 You need to be logged in to see this. Use the navigation links above to
//                 sign up or log in!
//             </h4>
//         );
//     }
//     return (
//         <Box sx={{ flexGrow: 1 }}>
//             <Grid container spacing={2} columns={16}>
//                 <Grid item xs={8}>
//                     <Typography component="h5" variant="h5">
//                         Viewing {userParam ? `${user.username}'s` : 'your'} profile.
//                     </Typography>
//                     <Box my={2}>
//                         <EventList
//                             events={user.events}
//                             title={`${user.username}'s events...`}
//                             showTitle={true}
//                             showUsername={false}
//                         />
//                     </Box>
//                     <Box my={2}>
//                         <EventForm />
//                     </Box>

//                     <Item>xs=8</Item>
//                     <Item>xs=8</Item>
//                     <Item>xs=8</Item>
//                     <Item>xs=8</Item>
//                     <Item>xs=8</Item>
//                     <Item>xs=8</Item>
//                 </Grid>
//                 <Grid item xs={8}>
//                     <Typography component="h5" variant="h5">
//                         This is where we will render the introduction to Historian
//                     </Typography>{" "}
//                     <Item>xs=8</Item>
//                     <Item>xs=8</Item>
//                     <Item>xs=8</Item>
//                     <Item>xs=8</Item>
//                     <Item>xs=8</Item>
//                 </Grid>
//             </Grid>
//         </Box>
//     );
// }
// export default Profile;





// import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { ADD_USER } from '../utils/mutations';

// import Auth from '../utils/auth';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// // import FormControlLabel from '@mui/material/FormControlLabel';
// // import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// function Copyright(props) {
//     return (
//         <Typography variant="body2" color="text.secondary" align="center" {...props}>
//             {'Copyright © '}
//             <Link color="inherit" href="https://mui.com/">
//                 The Hisotrian
//             </Link>{' '}
//             {new Date().getFullYear()}
//             {'.'}
//         </Typography>
//     );
// }

// const theme = createTheme();

// const Signup = () => {
//     const [formState, setFormState] = useState({
//         username: '',
//         email: '',
//         password: '',
//     });
//     const [addUser, { error, data }] = useMutation(ADD_USER);

//     const handleChange = (event) => {
//         const { name, value } = event.target;

//         setFormState({
//             ...formState,
//             [name]: value,
//         });
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         console.log(formState);

//         try {
//             const { data } = await addUser({
//                 variables: { ...formState },
//             });

//             Auth.login(data.addUser.token);
//         } catch (e) {
//             console.error(e);
//         }
//     };
//     // const handleSubmit = (event) => {
//     //     event.preventDefault();
//     //     const data = new FormData(event.currentTarget);
//     //     // eslint-disable-next-line no-console
//     //     console.log({
//     //         email: data.get('email'),
//     //         password: data.get('password'),
//     //     });
//     // };

//     return (
//         <ThemeProvider theme={theme}>
//             <Container component="main" maxWidth="xs">
//                 <CssBaseline />
//                 <Box
//                     sx={{
//                         marginTop: 8,
//                         display: 'flex',
//                         flexDirection: 'column',
//                         alignItems: 'center',
//                     }}
//                 >
//                     <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//                         <LockOutlinedIcon />
//                     </Avatar>
//                     <Typography component="h1" variant="h5">
//                         Sign up
//                     </Typography>
//                     {data ? (
//                         <Typography component="h5" variant="h5">
//                             Success! You may now head{' '}
//                             <Link href="/" variant="body2">
//                                 back to the homepage.
//                             </Link>
//                         </Typography>
//                     ) : (
//                     <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
//                         <Grid container spacing={2}>
//                             <Grid item xs={12} sm={6}>
//                                 <TextField
//                                     autoComplete="given-name"
//                                     name="Your username"
//                                     required
//                                     fullWidth
//                                     value={formState.name}
//                                     onChange={handleChange}
//                                     id="username"
//                                     label="User Name"
//                                     autoFocus
//                                 />
//                             </Grid>
//                             {/* <Grid item xs={12} sm={6}>
//                                 <TextField
//                                     required
//                                     fullWidth
//                                     id="lastName"
//                                     label="Last Name"
//                                     name="lastName"
//                                     autoComplete="family-name"
//                                 />
//                             </Grid> */}
//                             <Grid item xs={12}>
//                                 <TextField
//                                     required
//                                     fullWidth
//                                     id="email"
//                                     label="Email Address"
//                                     name="email"
//                                     autoComplete="email"
//                                     value={formState.email}
//                                     onChange={handleChange}
//                                 />
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <TextField
//                                     required
//                                     fullWidth
//                                     name="password"
//                                     label="Password"
//                                     type="password"
//                                     id="password"
//                                     autoComplete="new-password"
//                                     value={formState.password}
//                                     onChange={handleChange}
//                                 />
//                             </Grid>
//                         </Grid>
//                         <Button
//                             type="submit"
//                             fullWidth
//                             variant="contained"
//                             sx={{ mt: 3, mb: 2 }}
//                         >
//                             Sign Up
//                         </Button>
//                         <Grid container justifyContent="flex-end">
//                             <Grid item>
//                                         <Link href="/login" variant="body2">
//                                     Already have an account? Sign in
//                                 </Link>
//                             </Grid>
//                         </Grid>
//                     </Box>
//                 )}
//                 </Box>
//                 <Copyright sx={{ mt: 5 }} />
//                 {error && (
//                     <Typography component="h5" variant="h5">
//                         {error.message}
//                     </Typography>

//                 )}
//             </Container>
//         </ThemeProvider>
//     );
// }

// export default Signup;




// // Singin form here




// // // import * as React from 'react';
// // import React, { useState } from 'react';
// // import { useMutation } from '@apollo/client';
// // import { LOGIN_USER } from '../utils/mutations';
// // import Auth from '../utils/auth';
// // import Avatar from '@mui/material/Avatar';
// // import Button from '@mui/material/Button';
// // import CssBaseline from '@mui/material/CssBaseline';
// // import TextField from '@mui/material/TextField';
// // import FormControlLabel from '@mui/material/FormControlLabel';
// // import Checkbox from '@mui/material/Checkbox';
// // import Link from '@mui/material/Link';
// // import Paper from '@mui/material/Paper';
// // import Box from '@mui/material/Box';
// // import Grid from '@mui/material/Grid';
// // import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// // import Typography from '@mui/material/Typography';
// // import { createTheme, ThemeProvider } from '@mui/material/styles';

// // function Copyright(props) {
// //     return (
// //         <Typography variant="body2" color="text.secondary" align="center" {...props}>
// //             {'Copyright © '}
// //             <Link color="inherit" href="https://mui.com/">
// //                 The Historian
// //             </Link>{' '}
// //             {new Date().getFullYear()}
// //             {'.'}
// //         </Typography>
// //     );
// // }

// // const theme = createTheme();

// // const Login = (props) => {
// //     const [formState, setFormState] = useState({ email: '', password: '' });
// //     const [login, { error, data }] = useMutation(LOGIN_USER);

// //     // update state based on form input changes
// //     const handleChange = (event) => {
// //         const { name, value } = event.target;

// //         setFormState({
// //             ...formState,
// //             [name]: value,
// //         });
// //     };
// //     const handleSubmit = (event) => {
// //         event.preventDefault();
// //         const data = new FormData(event.currentTarget);
// //         console.log(formState);
// //         try {
// //             const { data } = await login({
// //                 variables: { ...formState },
// //             });

// //             Auth.login(data.login.token);
// //         } catch (e) {
// //             console.error(e);
// //         }

// //         // clear form values
// //         setFormState({
// //             email: '',
// //             password: '',
// //         });
// //         // eslint-disable-next-line no-console
// //         // console.log({
// //         //     email: data.get('email'),
// //         //     password: data.get('password'),
// //         // });
// //     };

// //     return (
// //         <ThemeProvider theme={theme}>
// //             <Grid container component="main" sx={{ height: '100vh' }}>
// //                 <CssBaseline />
// //                 <Grid
// //                     item
// //                     xs={false}
// //                     sm={4}
// //                     md={7}
// //                     sx={{
// //                         backgroundImage: 'url(https://source.unsplash.com/random)',
// //                         backgroundRepeat: 'no-repeat',
// //                         backgroundColor: (t) =>
// //                             t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
// //                         backgroundSize: 'cover',
// //                         backgroundPosition: 'center',
// //                     }}
// //                 />
// //                 <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
// //                     <Box
// //                         sx={{
// //                             my: 8,
// //                             mx: 4,
// //                             display: 'flex',
// //                             flexDirection: 'column',
// //                             alignItems: 'center',
// //                         }}
// //                     >
// //                         <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
// //                             <LockOutlinedIcon />
// //                         </Avatar>
// //                         <Typography component="h1" variant="h5">
// //                             Sign in
// //                         </Typography>
// //                         {data ? (
// //                             <Typography component="h5" variant="h5">
// //                                 Success! You may now head{' '}
// //                                 <Link href="/" variant="body2">
// //                                     back to the homepage.
// //                                 </Link>
// //                             </Typography>
// //                         ) : (
// //                             <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
// //                                 <TextField
// //                                     margin="normal"
// //                                     required
// //                                     fullWidth
// //                                     id="email"
// //                                     label="Email Address"
// //                                     name="email"
// //                                     autoComplete="email"
// //                                         value={formState.email}
// //                                         onChange={handleChange}
// //                                     autoFocus
// //                                 />
// //                                 <TextField
// //                                     margin="normal"
// //                                     required
// //                                     fullWidth
// //                                     name="password"
// //                                     label="Password"
// //                                     type="password"
// //                                     id="password"
// //                                     autoComplete="current-password"
// //                                         value={formState.password}
// //                                         onChange={handleChange}
// //                                 />
// //                                 <FormControlLabel
// //                                     control={<Checkbox value="remember" color="primary" />}
// //                                     label="Remember me"
// //                                 />
// //                                 <Button
// //                                     type="submit"
// //                                     fullWidth
// //                                     variant="contained"
// //                                     sx={{ mt: 3, mb: 2 }}
// //                                 >
// //                                     Sign In
// //                                 </Button>
// //                                 <Grid container>
// //                                     <Grid item xs>
// //                                         <Link href="#" variant="body2">
// //                                             Forgot password?
// //                                         </Link>
// //                                     </Grid>
// //                                     <Grid item>
// //                                         <Link href="/signup" variant="body2">
// //                                             {"Don't have an account? Sign Up"}
// //                                         </Link>
// //                                     </Grid>
// //                                 </Grid>
// //                                 <Copyright sx={{ mt: 5 }} />
// //                             </Box>
// //                         )}
// //                     </Box>
// //                     {error && (
// //                         <Typography component="h5" variant="h5">
// //                             {error.message}
// //                         </Typography>
                        
// //                     )}
// //                 </Grid>
// //             </Grid>
// //         </ThemeProvider>
// //     );
// // }
// // export default Login;
// // // https://unsplash.com/photos/T7qyLNPwgKA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink


