// FirstComponent
function FirstComponent() {
    return <h1>My very first component</h1>;
}

// NamedComponent
function NamedComponent(props) {
    return <p>My name is {props.name}</p>;
}

// App component rendering FirstComponent and NamedComponent
function App() {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="John Doe" />
        </div>
    );
}

// Rendering the App component
ReactDOM.render(<App />, document.getElementById('root'));