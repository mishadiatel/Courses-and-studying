import MeetupDetail from "../../components/meetups/MeetupDetail";


function MeetupDetails() {
    return (
        <MeetupDetail
            title='First meetup'
            image='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/New_York_City_%28New_York%2C_USA%29%2C_Empire_State_Building_--_2012_--_6448.jpg/1200px-New_York_City_%28New_York%2C_USA%29%2C_Empire_State_Building_--_2012_--_6448.jpg'
            address='Some address 5, 12345 some city'
            description='This is a first meetup'
        />
    );
}

export default MeetupDetails;