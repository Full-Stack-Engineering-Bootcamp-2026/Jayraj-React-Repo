import { useState } from "react"
import axios from "axios"

function QuoteFetcher(){
    const [quote , setQuote] = useState(null);
    const [users , setUsers] = useState([]);
    const [loading , setLoading] = useState(false);
    const [error , setError] = useState('');

    //fetch random post
    const fetchQuote = async () => {
        setLoading(true);
        setError ('');
        try{
            const id = Math.ceil(Math.random() * 100);
            const res = await axios.get(
                `https://jsonplaceholder.typicode.com/posts/${id}`
            );
            setQuote(res.data);
        }catch(err){
            setError('Failed to fetch. Please try again.');
        }
        finally{
            setLoading(false);
        }
    };

    //fetch users list
    const fetchUsers = async () =>{
        setLoading(true);
        setError('');
        
        try{
            const res = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            );
            setUsers(res.data);
        }catch(err){
            setError("Failed to fetch users.");
        }finally{
            setLoading(false);
        }
    };

    return(
        <div style={{ margin:"20px" }}>

            <button onClick={fetchQuote}>Fetch Quote</button>
            <button onClick={fetchUsers} style={{ marginLeft : "10px"}}>Fetch Users</button>

            {loading && <p>Loading.....</p>}

            {error && <p style = {{ color : "red"}}>{error}</p>}

            {quote && (
                <div>
                    <h3>Quote Title - {quote.title}</h3>
                    <p>Qutote Body - {quote.body}</p>
                </div>
            )}

            {users && (
                <ul> Users
                    {users.map(user => (
                        <li key={user.id}>
                            {user.name}
                        </li>
                    ))}
                </ul>
            )}
            
        </div>
    );
    
}

export default QuoteFetcher;