// This were my theme will start
import React from 'react';
import { useQuery } from '@apollo/client';
import Introduction from '../components/Introduction';
import TimeLine from '../components/Timeline';
import Scroll from '../components/Scroll';
import { QUERY_EVENTS } from '../utils/queries';
import Typography from '@mui/material/Typography';
// Import the Neccesary elements for styles
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

let darkTheme = createTheme({
  palette: {
    type: "light",
  },
});
darkTheme = responsiveFontSizes(darkTheme);

const Home = () => {
  const { loading, data } = useQuery(QUERY_EVENTS);
  const events = data?.events || [];
  return (

    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {/* <Header /> */}
      <Introduction />
      {loading ? (
        <Typography variant="h5" gutterBottom component="div">
          Loading...
        </Typography>
      ) : (
        <>
          <Scroll showBelow={250} />
          <TimeLine events={events} />
        </>
      )}
    </ThemeProvider>
  );
}


export default Home;
// const Home = () => {
//   const { loading, data } = useQuery(QUERY_EVENTS);
//   const events = data?.events || [];

//   return (
//     <main>
//       <div className="flex-row justify-center">
//         <div
//           className="col-12 col-md-10 mb-3 p-3"
//           style={{ border: '1px dotted #1a1a1a' }}
//         >
//           <p>This is where the "EvenForm" was located previously</p>
//           <Introduction />
//           {/* <TimeLine events={events} /> */}
//           {/* <EventForm />  */}
//         </div>
//         {/* <div
//           className="col-12 col-md-10 mb-3 p-3"
//           style={{ border: '1px dotted #1a1a1a' }}
//         >
//            <Wiki /> 
//         </div> */}
//         <div className="col-12 col-lg-12 mb-3">
//           {loading ? (
//             <div>Loading...</div>
//           ) : (
//             // <EventList
//             //   events={events}
//             //   title="Need Events"
//             // />
//             <TimeLine events={events} />
//           )}
//         </div>
//       </div>
//     </main>
//   );
// };
