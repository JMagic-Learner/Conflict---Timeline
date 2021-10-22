// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';



// export default function BasicCard() {
//     return (
//         <Card sx={{ minWidth: 275 }}>
//             <CardContent>
//                 <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//                     Word of the Day
//                 </Typography>
//                 <Typography variant="h5" component="div">
//                     Title
//                 </Typography>
//                 <Typography sx={{ mb: 1.5 }} color="text.secondary">
//                     adjective
//                 </Typography>
//                 <Typography variant="body2">
//                     well meaning and kindly.
//                     <br />
//                     {'"a benevolent smile"'}
//                 </Typography>
//             </CardContent>
//             <CardActions>
//                 <Button size="small">Learn More</Button>
//             </CardActions>
//         </Card>
//     );
// }

// import React, { useState } from 'react'
// import { styled, alpha } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import Button from '@mui/material/Button';


// const Search = styled('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': {
//         backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//         marginLeft: theme.spacing(1),
//         width: 'auto',
//     },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     '& .MuiInputBase-input': {
//         padding: theme.spacing(1, 1, 1, 0),
//         // vertical padding + font size from searchIcon
//         paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//         transition: theme.transitions.create('width'),
//         width: '100%',
//         [theme.breakpoints.up('sm')]: {
//             width: '12ch',
//             '&:focus': {
//                 width: '20ch',
//             },
//         },
//     },
// }));

// const SearchForm = ({ searchText }) => {
//     const [text, setText] = useState('')

//     const handleSubmit = (e) => {
//         e.preventDefault()

//         searchText(text)
//     }
//     return (
//         <Box  sx={{ flexGrow: 1 }}>
//             <AppBar position="static">
//                 <Toolbar >
//                     <Search onSubmit={handleSubmit}>
//                         <SearchIconWrapper >
//                             <SearchIcon />
//                         </SearchIconWrapper>
//                         <StyledInputBase
//                             placeholder="e.g politics"
//                             inputProps={{ 'aria-label': 'search' }}
//                             onChange={(e) => setText(e.target.value)}
//                         />
//                     </Search>
//                     <Button type="submit" variant="contained">Submit</Button>
//                 </Toolbar>
//             </AppBar>
//         </Box>
//     );
// }

// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import { useMutation } from '@apollo/client';

// // import { ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT } from '../../utils/mutations';
// // import EditModal from "../EditModal";

// // import Auth from '../../utils/auth';

// // const CommentForm = ({ eventId }) => {
// //     const [commentText, setCommentText] = useState('');
// //     const [characterCount, setCharacterCount] = useState(0);

// //     const [addComment, { error }] = useMutation(ADD_COMMENT);

// //     const handleFormSubmit = async (event) => {
// //         event.preventDefault();

// //         try {
// //             const { data } = await addComment({
// //                 variables: {
// //                     eventId,
// //                     commentText,
// //                     commentAuthor: Auth.getProfile().data.username,
// //                 },
// //             });
// //             // Run Save events here
// //             // have a btn to save event on the home page 
// //             setCommentText('');
// //         } catch (err) {
// //             console.error(err);
// //         }
// //     };
// //     // Delete and Edit comments
// //     const [deleteEventComment] = useMutation(DELETE_COMMENT, {
// //         onCompleted: (data) => {
// //             window.location.reload();
// //         },
// //     });

// //     const onDelete = (commentId) => deleteEventComment({ variables: { commentId: commentId } });

// //     const [editCommentId, setEditCommentId] = useState("");

// //     const onClose = () => setEditCommentId("");
// //     const openModal = (commentId) => setEditCommentId(commentId);

// //     const [editEventComment] = useMutation(EDIT_COMMENT, {
// //         onCompleted: () => setEditCommentId(""),
// //     });

// //     const onSaveEdit = (e) => {
// //         e.preventDefault();
// //         editEventComment({ variables: { id: editCommentId, commentText: e.target.commentText.value } });
// //     };
// //     const handleChange = (event) => {
// //         const { name, value } = event.target;

// //         if (name === 'commentText' && value.length <= 280) {
// //             setCommentText(value);
// //             setCharacterCount(value.length);
// //         }
// //     };


// //     return (
// //         <div>
// //             <h4>What are your experience on this event?</h4>

// //             {Auth.loggedIn() ? (
// //                 <>
// //                     <p
// //                         className={`m-0 ${characterCount === 280 || error ? 'text-danger' : ''
// //                             }`}
// //                     >
// //                         Character Count: {characterCount}/280
// //                         {error && <span className="ml-2">{error.message}</span>}
// //                     </p>
// //                     <form
// //                         className="flex-row justify-center justify-space-between-md align-center"
// //                         onSubmit={handleFormSubmit}
// //                     >
// //                         <div className="col-12 col-lg-9">
// //                             <textarea
// //                                 name="commentText"
// //                                 placeholder="Add your comment..."
// //                                 value={commentText}
// //                                 className="form-input w-100"
// //                                 style={{ lineHeight: '1.5', resize: 'vertical' }}
// //                                 onChange={handleChange}
// //                             ></textarea>
// //                         </div>

// //                         <div className="col-12 col-lg-3">
// //                             <button className="btn btn-primary btn-block py-3" type="submit">
// //                                 Add Comment
// //                             </button>
// //                             <EditModal isOpen={!!editCommentId} onClose={onClose} onSubmit={onSaveEdit} />
// //                             <button className="btn btn-primary btn-block py-3" type="submit" openModal={openModal}>
// //                                 Edit Comment
// //                             </button>
// //                             <button className="btn btn-primary btn-block py-3" type="submit" onDelete={onDelete}>
// //                                 Delete Comment
// //                             </button>
// //                         </div>
// //                     </form>
// //                 </>
// //             ) : (
// //                 <p>
// //                     You need to be logged in to share your experience with us. Please{' '}
// //                     <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
// //                 </p>
// //             )}
// //         </div>
// //     );
// // };

// // export default CommentForm;

// // import React, { useState } from 'react';
// // import { EDIT_COMMENT, DELETE_COMMENT } from '../../utils/mutations';
// // import { useMutation } from '@apollo/client';

// // import EditModal from "../EditModal";

// // const CommentList = ({ comments = [] }) => {
// //     if (!comments.length) {
// //         return <h3>No Comments Yet</h3>;
// //     }
// //     // Delete and Edit comments
// //     const [deleteEventComment] = useMutation(DELETE_COMMENT, {
// //         onCompleted: (data) => {
// //             window.location.reload();
// //         },
// //     });

// //     const onDelete = (commentId) => deleteEventComment({ variables: { commentId: commentId } });

// //     const [editCommentId, setEditCommentId] = useState("");

// //     const onClose = () => setEditCommentId("");
// //     const openModal = (commentId) => setEditCommentId(commentId);

// //     const [editEventComment] = useMutation(EDIT_COMMENT, {
// //         onCompleted: () => setEditCommentId(""),
// //     });

// //     const onSaveEdit = (e) => {
// //         e.preventDefault();
// //         editEventComment({ variables: { id: editCommentId, commentText: e.target.commentText.value } });
// //     };
// //     // const handleChange = (event) => {
// //     //   const { name, value } = event.target;

// //     //   if (name === 'commentText' && value.length <= 280) {
// //     //     setCommentText(value);
// //     //     setCharacterCount(value.length);
// //     //   }
// //     // };
// //     return (
// //         <>
// //             <h3
// //                 className="p-5 display-inline-block"
// //                 style={{ borderBottom: '1px dotted #1a1a1a' }}
// //             >
// //                 Comments
// //             </h3>
// //             <div className="flex-row my-4">
// //                 {comments &&
// //                     comments.map((comment) => (
// //                         <div key={comment._id} className="col-12 mb-3 pb-3">
// //                             <div className="p-3 bg-dark text-light">
// //                                 <h5 className="card-header">
// //                                     {comment.commentAuthor} commented{' '}
// //                                     <span style={{ fontSize: '0.825rem' }}>
// //                                         on {comment.createdAt}
// //                                     </span>
// //                                 </h5>
// //                                 <p className="card-body">{comment.commentText}</p>
// //                             </div>
// //                             <EditModal isOpen={!!editCommentId} onClose={onClose} onSubmit={onSaveEdit} />
// //                             <button className="btn btn-primary btn-block py-3" type="submit" openModal={openModal}>
// //                                 Edit Comment
// //                             </button>
// //                             <button className="btn btn-primary btn-block py-3" type="submit" onDelete={onDelete}>
// //                                 Delete Comment
// //                             </button>
// //                         </div>
// //                     ))}
// //             </div>
// //         </>
// //     );
// // };

// // export default CommentList;
