export const EventProps=()=>{

    const Handlewelcomeuser=(user)=>{
        alert(`Hello , ${user}`)
    }
    const mouseenterd=()=>{
        console.log("This is an handler with props")
    }
    return(
        <>
        <Welcomeuser onclick={()=>Handlewelcomeuser("Aman")}
            onmouseenter={mouseenterd}/>

        
        </>
    )
}

const Welcomeuser =(props)=>{
    const { onclick, onmouseenter } = props;
const Handlegreeting=()=>{
    console.log("Thi is a parent component")
    onclick();
}
  
    return(<>
    <button  className="bg-red-500 rounded-xl py-2" onClick={onclick}>click me 1</button>
    <button  className="bg-blue-500 rounded-xl py-2" onMouseOver={onmouseenter}>click me 2</button>
    <button  className="bg-yellow-500 rounded-xl py-2" onClick={Handlegreeting}>click me 3</button>
    
    </>
    )
}