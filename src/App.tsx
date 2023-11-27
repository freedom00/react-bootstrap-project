import './App.css';
import ListGroup from "./components/ListGroup";
import {useState} from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
    let items = ["New York", "San Francisco", "Tokyo", "London", "paris"];

    const handleSelectItem = (item: string) => {
        console.log(item);
    };

    const [alertVisible, setAlertVisibility] = useState(false);

    return (
        <>
            <ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem}></ListGroup>
            {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
            <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
        </>
    );
}

export default App;
