import React from 'react';
import { Link } from 'react-router-dom';
// import data from './data.js';

import "./style.css";

const Timeline = () => {

    const timelineData = [
        {
            text: 'Started working on the app-ideas repository',
            date: 'February 25 2019',
            category: {
                tag: 'app-ideas',
                color: '#FFDB14'
            },
            link: {
                url: 'https://github.com/florinpop17/app-ideas',
                text: 'Check it out on GitHub'
            }
        },
        {
            text: 'Started the Weekly Coding Challenge program',
            date: 'March 04 2019',
            category: {
                tag: 'blog',
                color: '#e17b77'
            },
            link: {
                url: 'https://florin-pop/blog/2019/03/weekly-coding-challenge/',
                text: 'Check it out here'
            }
        },
        {
            text: 'Got 1.000 followers on Twitter',
            date: 'March 07 2019',
            category: {
                tag: 'twitter',
                color: '#1DA1F2'
            },
            link: {
                url: 'https://twitter.com/florinpop1705',
                text: 'See profile'
            }
        },
        {
            text:
                'I published my first article in the FreeCodeCamp Medium Publication',
            date: 'March 18 2019',
            category: {
                tag: 'medium',
                color: '#018f69'
            },
            link: {
                url:
                    'https://medium.freecodecamp.org/how-to-build-a-double-slider-sign-in-and-sign-up-form-6a5d03612a34',
                text: 'Check it out here'
            }
        },
        {
            text: 'Over 12.000 views in a single day on my Medium posts',
            date: 'April 05 2019',
            category: {
                tag: 'medium',
                color: '#018f69'
            },
            link: {
                url: 'https://medium.com/@popflorin1705',
                text: 'See profile'
            }
        }
    ]
    
    const TimelineItem = ({ data }) => (
        <div className="timeline-item">
            <div className="timeline-item-content">
                <span className="tag" style={{ background: data.category.color }}>
                    {data.category.tag}
                </span>
                <time>{data.date}</time>
                <p>{data.text}</p>
                {data.link && (
                    <a
                        href={data.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {data.link.text}
                    </a>
                )}
                <span className="circle" />
            </div>
        </div>
    );
    
    const TimelineFunction = () =>
        timelineData.length > 0 && (
            <div className="timeline-container">
                {timelineData.map((data, idx) => (
                    <TimelineItem data={data} key={idx} />
                ))}
            </div>
        );


    return (
        <div>
            <footer>
                <p>
                    Created with <i class="fa fa-heart"></i> by
                    <a target="_blank" href="https://florin-pop.com">Florin Pop</a>
                    - Read about how I created this on my
                    <a target="_blank" href="https://www.florin-pop.com/blog/2019/04/how-to-create-a-timeline-with-react/">blog</a>
                </p>
            </footer>
        </div>
    );
};

export default Timeline;