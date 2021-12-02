import ChildTwo from "./childTwo";

const ChildOne = ({data}) => {
    
    console.log(`Log from childOne:`)
    console.log(data)

return (
    <div>
        <h1>I'm Child One</h1>
        <ChildTwo data={data} />
    </div>
);
}

export default ChildOne;