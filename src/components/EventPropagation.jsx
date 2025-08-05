export const Eventpropagation=()=>{
const Handlegrant=()=>{
console.log("Grand parents chicked")
}
const Handleparent=()=>{
    console.log("Parents are chicked")
}
const Handlechild=(event)=>{
    console.log("Child are chiked")
    event.target; 
    event.stopPropagation();
}
    return(<>
    
    <section>
        <div className="bg-red-500 rounded-xl py-2" onClickCapture={Handlegrant}>Grant-container
            <div className="bg-pink-500 rounded-xl py-10 " onClickCapture={Handleparent}>Parent-container
                <button className="bg-blue-500 rounded-xl py-2" onClickCapture={Handlechild}>Child-container</button>
            </div>
        </div>
    </section>

    </>
    )
}