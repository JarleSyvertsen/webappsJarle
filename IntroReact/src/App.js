import MyComponent from './components/MyComponent'
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Food from  "./components/Food";
import Alert from "./components/Alert";

const food = ['Pizza', 'Hamburger', 'Coke'];
const App = (props) => (
    <div>
        <p>Read the README.md to see the tasks</p>
        <MyComponent></MyComponent>
        <Wrapper><Title title="Test with wrapping"/><Title title="Test with wrapping"/></Wrapper>
        <Food food={food}></Food>
        <Alert></Alert>
    </div>
);

export default App;
