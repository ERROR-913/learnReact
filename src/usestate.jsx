import {useState} from "react";
function Use() {
    const [count, setcount] = useState(1);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setcount(count * 2)}>Increment
            Click Me
            </button>
        </div>

    );

}
export default Use;