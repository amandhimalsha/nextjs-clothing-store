export default async function users() {
     const res = await fetch("https://jsonplaceholder.typicode.com/users");
     const users = await res.json();
     return (
       <div>
         <h1>Users</h1>
         <ul>
           {users.map((user: { id: number; name: string }) => (
             <li key={user.id}>
                <h3>{user.name}</h3>
             </li>
           ))}
         </ul> 
       </div>
     );
}