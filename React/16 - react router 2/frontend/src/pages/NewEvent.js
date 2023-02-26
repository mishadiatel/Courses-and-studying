import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

function NewEventPage() {

    return (
        <EventForm />
    )
}

export default NewEventPage;

export async function action({ request, params }) {
    const data = await request.formData();

    const enteredData = {
        title: data.get('title'),
        image: data.get('image'),
        date: data.get('date'),
        description: data.get('description'),

    };

    const response = await fetch('http://localhost:8080/events', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(enteredData),
    });
    if(!response.ok){
        throw json({message: 'Coukd not save event'}, {status: 500});
    }
    return redirect('/events');
}