import Card from "./components/Card";


// props types


const Heading = (props) => {

    
    return (
        <>
        <h1>{props.heading}</h1>
             <Card
                Title="Learn Pytshon"
                Desc="Hello world this is pythons"
                ImageUrl="https://source.unsplash.com/200x200/?python"
                Likes={"500"}
            />
        </>
    )

    
}


export default Heading;



// without destructurings
// import Card from "./components/Card";

// const Heading = (props) => {

    
//     return (
//         <>
//         <h1>{props.heading}</h1>
//              <Card
//                 Title="Learn Pytshon"
//                 Desc="Hello world this is pythons"
//                 ImageUrl="https://source.unsplash.com/200x200/?python"
//             />
//         </>
//     )

    
// }


// export default Heading;