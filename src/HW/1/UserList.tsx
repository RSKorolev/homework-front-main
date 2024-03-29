type AddressType = {
  street: string;
  city: string;
};

type UserType = {
  address: any;
  id: number;
  name: string;
  age: number;
};

export type UserListPropsType = {
  users: UserType[];
  address: AddressType[];
};

export const UserList = (props: UserListPropsType) => {
  return (
    <div id={"hw01-users"}>
      <h2>User List:</h2>
      <ul>
        {props.users.map((user) => {
          return (
            <li key={user.id} id={`hw01-user-${user.id}`}>
              <strong>{user.name}</strong>
              (Age: {user.age})<strong> Address: </strong>
              {user.address.street}, {user.address.city}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
