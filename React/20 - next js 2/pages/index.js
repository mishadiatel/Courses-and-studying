import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_METUPS = [
    {
        id: 'm1',
        title: 'First meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/New_York_City_%28New_York%2C_USA%29%2C_Empire_State_Building_--_2012_--_6448.jpg/1200px-New_York_City_%28New_York%2C_USA%29%2C_Empire_State_Building_--_2012_--_6448.jpg',
        address: 'Some address 5, 12345 some city',
        description: 'This is a first meetup',
    },
    {
        id: 'm2',
        title: 'Second meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/New_York_City_%28New_York%2C_USA%29%2C_Empire_State_Building_--_2012_--_6448.jpg/1200px-New_York_City_%28New_York%2C_USA%29%2C_Empire_State_Building_--_2012_--_6448.jpg',
        address: 'Some address 10, 12345 some city',
        description: 'This is a second meetup',
    }
];

function HomePage() {

    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setLoadedMeetups(DUMMY_METUPS);
    }, [])


    return (
        <MeetupList meetups={loadedMeetups} />
    )
}

export default HomePage;