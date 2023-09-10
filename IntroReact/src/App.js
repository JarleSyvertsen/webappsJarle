import MyComponent from './components/MyComponent'
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Food from  "./components/Food";
import Alert from "./components/Alert";
import {useState} from "react";

const food = ['Pizza', 'Hamburger', 'Coke'];
export default function App(props) {
    const [inputValue, setInputValue] = useState('To be updated via alert component.');
    const [isClicked, setClicked] = useState(false);
    return (
        <div>
            <p>Read the README.md to see the tasks</p>
            <MyComponent></MyComponent>
            <Wrapper><Title title="Test with wrapping"/><Title title="Test with wrapping"/></Wrapper>
            <Food food={food}></Food>
            <Alert updateFunction={setInputValue} toggleVisible={setClicked}></Alert>
            {isClicked ? <p>{inputValue}</p> : "" }
    </div>
    )
};
