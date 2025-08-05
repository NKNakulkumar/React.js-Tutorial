export const EventHandling=()=>{
    const Handlebtnclick=(event)=>{
        // console.log(event)
        // console.log(event.target)
        // console.log(event.type)
        alert("This is a react js course")
        console.log(`Hello my name is  ${event}`)
    }
    return(<>
    
    {/* <button className="bg-blue-500 rounded-xl" onClick={Handlebtnclick}> Click me </button> */}
    {/* passing arguments to a eventhandler */}
    <button className="bg-blue-500 rounded-xl" onClick={()=>Handlebtnclick("Aman")}> Click me </button>
    </>
    )
}