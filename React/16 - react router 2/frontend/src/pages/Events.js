import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
    { id: 'e1', title: 'Some event' },
    { id: 'e2', title: 'Enouther event' },
]

function EventsPage() {
    return (
        <>

            <h1>Events Page</h1>
            <ul>
                {DUMMY_EVENTS.map(event =>
                    <li key={event.id}>
                        <Link to={event.id}>{event.title}</Link>
                    </li>)}
            </ul>
        </>
    )
}

export default EventsPage;