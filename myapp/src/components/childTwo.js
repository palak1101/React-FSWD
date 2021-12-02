import ChildThree from "./childThree";

const ChildTwo = ({data}) => {

    console.log(`Log from childTwo:`)
    console.log(data)

return (
    <div>
        <h2>I'm Child Two</h2>
        <ChildThree data={data} />
    </div>
);
}

export default ChildTwo;