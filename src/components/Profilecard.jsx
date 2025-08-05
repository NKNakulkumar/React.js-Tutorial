export const Profile=()=>{

    return (
        <>
        <h1>this is an profile components</h1>
        <Profilecard
        name={"Nakul kumar"}
        age={20}
        description = {"This is an awsome description "}
        watch_url={"https://www.youtube.com/shorts/tPRyndJ4tAg"}
        greeting ={
             <p> <strong>This is an profile card </strong></p>
        }
        >
        <p> Hobbies : playcarrom, badminton</p>
        <button> Watch Now</button>

        </Profilecard>


        </>
    )
}
export const Profilecard=({name,age,description,watch_url,greeting,children})=>{
    return(
        <>
        <p>Name :{name}</p>
        <p>age :{age}</p>
        <p>Description :{description}</p>
        <p>Watch_url :{watch_url}</p>
        <p>Greeting :{greeting}</p>
        <p>{children}</p>

        
        </>
    )
}