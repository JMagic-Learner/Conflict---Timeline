import React from 'react';
import { Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';
// import { QUERY_ME } from '../utils/queries';

const EventList = ({
  events,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  // if (!events.length) {
  if (!events) {
    return <h3>No events Yet</h3>;
  }

  // const {loading, data } = useQuery(useParam? QUERY_ME, {
  //   variables: {username: userParam}
  // })

  return (
    <div idName="app">
      <div className="timeline-container">

        {showTitle && <h3>{title}</h3>}
        {events &&
          events.map((event) => (
            <div className='timeline-item'>
              <div className="timeline-item-content">
                <div key={event.toString} className="">
                  <h4 className="card-header bg-primary text-light p-2 m-0">
                    {showUsername ? (
                      <Link
                        className="text-light"
                        to={`/profiles/${event.eventTitle}`}
                      >
                        {event.eventTitle} <br />
                        <span style={{ fontSize: '1rem' }}>
                          had this event on {event.createdAt}
                        </span>
                        <span className="circle" />
                      </Link>
                    ) : (
                      <>
                        <p> This is a placeholder </p>
                      </>
                    )}
                  </h4>
                  <div className="card-body bg-light p-2">
                    <p>{event.eventText}</p>
                  </div>
                  <Link
                    className="btn btn-primary btn-block btn-squared"
                    to={`/events/${event._id}`}
                  >
                    Join the discussion on this event.
                    <span className="circle" />
                  </Link>
                </div>
              </div>
            </div>
          ))}

      </div>
    </div>
  );
};

export default EventList;
