import React from 'react';
import { Person } from '../interfaces/person';

interface UserProps {
  user: Person;
}

const User: React.FC<UserProps> = (props: UserProps) => {
  return (
    <div>
      <p>{props.user.firstName.substring(0, 1)}</p>
      <p>
        {props.user.firstName} {props.user.lastName}
      </p>
      <p>{props.user.role}</p>
    </div>
  );
};

export default User;
