const Food = ({food}) => (
    <ul>
        {food.map((food) => { return <li key={food}>{food}</li> }) }
    </ul>
)

export default Food