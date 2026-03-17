// function UserCard({ name , bio , role='Member'}){
//     return(
//         <div>
//             <h2>{name}</h2>
//             <p>{bio}</p>
//             <span>{role}</span>
//         </div>
//     );
// }

function UserCard( {user}){
    const { name , bio , role ="Engineer" } = user;
    return(
        <div>
            <div className='card'>
                <div className='card-content'>
                    <p className="title is-4">{name}</p>
                    <p className="subtitle is-6">{role}</p>
                    <p>{bio}</p>
                </div>
            </div>
        </div>

    );
}

export default UserCard;