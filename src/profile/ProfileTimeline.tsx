import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import TimelineEvent from "./component/TimelineEvent";
import 'react-vertical-timeline-component/style.min.css';
import { Event } from "../services/types/project-types";

interface ProfileTimelineProps {
    events: Array<Event>
}

export default function ProfileTimeline(props: ProfileTimelineProps) {
    
    return (
        <div className="profile-body">
            <div className="profile-body-content">
                
                {/*  */}

                <VerticalTimeline layout="1-column">
                        {props.events.map((_, idx) => (
                            <TimelineEvent key={idx} date={_.date} type={_.type} note={_.note} item={_.item} user={_.user}/>
                        ))}
                          <VerticalTimelineElement
                                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                            />
                </VerticalTimeline>


                {/* iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} - Blue */}
                {/* iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }} - Pink */}
                {/* iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }} - Green */}

                {/*  */}
            </div>
        </div>
    )
}