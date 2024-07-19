function Person({ name, age, hobbies }) {
    const shortName = name.length > 8 ? name.substring(0, 6) : name;

    return (
        <div>
            <p>Learn some information about this person</p>
            <h3>{shortName}</h3>
            <h4>{age > 18 ? 'Please go vote!' : 'You must be 18'}</h4>
            <ul>
                {hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>
        </div>
    );
}