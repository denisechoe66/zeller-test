import React from 'react';
import { Person } from '../interfaces/person';

interface CustomerProps {
  customer: Person;
}

const Customer: React.FC<CustomerProps> = (props: CustomerProps) => {
  return (
    <div>
      <p>{props.customer.name.substring(0, 1)}</p>
      <p>{props.customer.name}</p>
      <p>{props.customer.role}</p>
    </div>
  );
};

export default Customer;
