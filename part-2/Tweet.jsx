function Tweet({ username, name, date, message }) {
    return (
        <div className="tweet">
            <h3>{name} (@{username})</h3>
            <p>{message}</p>
            <small>{date}</small>
        </div>
    );
}