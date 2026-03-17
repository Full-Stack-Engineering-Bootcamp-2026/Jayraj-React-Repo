import 'bulma/css/bulma.css';
import UserCard from "./UserCard";

function App(){

  const user1 = {
    name :"Jayraj" ,
    bio : "Full Stack Developer" ,
    role :"Lead Engineer"
  }
  const user2 = {
    name :"Jay" ,
    bio : "Frontend Developer" ,
    role :"Engineer"
  }
  const user3 = {
    name :"Raj" ,
    bio : "Backend Developer" 
  }

  return(
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Employee Info</p>
        </div>
      </section>

      
      <UserCard user={user1}/>
      <UserCard user={user2}/>
      <UserCard user={user3}/>
    {/* <UserCard /> */}
    {/* <UserCard name="Jay" bio="Frontend Developer" role="Engineer"/> */}
    {/* <UserCard name="Raj" bio="Backend Developer" /> */}
    </div>
  );
}

export default App;