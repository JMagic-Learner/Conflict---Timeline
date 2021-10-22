import React from 'react';
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";
import { Link } from 'react-router-dom';
// It's better to use this timeline format than using Material Design
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function TimeLine({ events,
    title,
    showTitle = true,
    showUsername = true}) {
    let workIconStyles = { background: "#06D6A0" };
    let schoolIconStyles = { background: "#f9c74f" };

    return (
        <div>
            <h1 className="title">Timeline</h1>
            <VerticalTimeline >
                {events.map((element) => {
                    let isWorkIcon = element.icon === "work";
                    let showButton =
                        element.buttonText !== undefined &&
                        element.buttonText !== null &&
                        element.buttonText !== "";

                    return (
                        <VerticalTimelineElement
                            key={element.key}
                            date={element.date}
                            dateClassName="date"
                            iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                            icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">
                                <Link
                                    className="text-light"
                                    to={`/profiles/${element.eventTitle}`}
                                >
                                    {element.eventTitle}

                                </Link>
                            </h3>
                            <h5 className="vertical-timeline-element-subtitle">
                                {/* {element.location} */}
                            </h5>
                            <p id="description">{element.eventText}</p>
                            <Link
                                className="btn btn-primary btn-block btn-squared"
                                to={`/events/${element._id}`}
                            >
                                Join the discussion on this event.
                                <span className="circle" />
                            </Link>
                            {showButton && (
                                <a
                                    className={`button ${isWorkIcon ? "workButton" : "schoolButton"
                                        }`}
                                    href="/"
                                >
                                    {element.buttonText}
                                </a>
                            )}
                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>
        </div>
    );
}

export default TimeLine;
