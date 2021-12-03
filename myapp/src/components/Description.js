import Enhancer from "../HOC/Enhancer";

const Description = ({heading}) => {
    
    console.log(heading)

    return (
        <div>
            <h1>{heading}</h1>
            <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos quasi saepe, temporibus pariatur enim vel doloremque minima accusamus. Harum quasi accusantium facere veritatis dolores earum magnam pariatur quod molestiae, odit consequatur quisquam ex ipsam tenetur, laudantium obcaecati eveniet maiores et rerum aliquid. Maxime, iusto debitis! Soluta natus quia nobis consequuntur.
            </div>
        </div>
    );
}

export default Enhancer(Description);