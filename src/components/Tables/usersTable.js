import { useSelector } from "react-redux";
import { Table } from "reactstrap";
import "../../assets/css/counter.css";

const UsersTable = () =>{
    const users = useSelector((state) => state.allUsers.users);
    const usersList = users.map((user) => {
        const {id, name, username, email} = user;
        return(
            
            <tbody  key={id}>
              <tr>
                <td>{name}</td>
                <td>{username}</td>
                <td>{email}</td>
              </tr>
            </tbody>
          
        );
    })

return(<div><Table className="users-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
      </tr>
    </thead>
   {usersList}
    </Table></div>);

}; export default UsersTable;