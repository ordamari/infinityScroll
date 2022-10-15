export function People({ people }) {
    return (
        <div className="people">
            <img src={people.picture.large} />
            <div className="data" >
                <div className="details" >
                    <span>{people.name.title}. {people.name.first} {people.name.last}</span>
                    <span>{people.location.city}, {people.location.country}</span>
                </div>
                <div className="contact" >
                    <a href={`tel:${people.phone}`}>Phone</a>
                    <a href={`mailto:${people.email}`}>Email</a>
                </div>
            </div>

        </div>
    )
}