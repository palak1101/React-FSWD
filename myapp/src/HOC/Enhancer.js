const Enhancer = (Component) => {

    //Here we are returning a function that inturn returns jsx, because Description was the function that we were exporting, so we've to return a function here.
    return (props) => ( 
        <div>
            <Component {...props} />  {/*heading={props.heading}*/}
            <h6>Property of Mercedes-Benz</h6>
        </div>
    )
}

export default Enhancer;