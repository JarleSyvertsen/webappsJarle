import Title from './Title';

function MyComponent({title = "It works"}) {
    return (
    <>
    <h1>My first component.</h1>
    <Title title={title}></Title>
    </>
    )
}

export default MyComponent