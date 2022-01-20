import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Item, User } from "../../services/types/project-types";

interface TimelineEventProps {
    date: string,
    type: string,
    note: string,
    item: Item,
    user: User
}

export default function TimelineEvent(props: TimelineEventProps) {

    let note = <h1>{props.note}</h1>;
    let heading = "Project Event";
    switch(props.type) {
        case "RESOURCE_ADDED" : {
            heading = "Resource Added";
            note = <p>{props.item.name} Added by {props.user.name}</p>;
            break;
        }
        case "PROJECT_CREATED" : {
            heading = "Project Created";
            note = <p>{props.item.name} Created by {props.user.name}</p>
            break;
        }
        case "NOTE_ADDED" : {
            heading = "Note";
            note = <p>"{props.note}" - {props.user.name}</p>
            break;
        }
        case "SOCIAL_ADDED" : {
            heading = "Social Link Added";
            note = <p>{props.item.name} social link added by {props.user.name}</p>
            break;
        }
    }


    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date={props.date}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // icon={<WorkIcon />}
        >
            <h3 className="vertical-timeline-element-title">{heading}</h3>
            {note}
        </VerticalTimelineElement>
    )
}