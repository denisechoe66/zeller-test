import React, { useState, FC, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { ListZellerCustomers } from './graphql/queries';
import './App.css';
import { Person } from './interfaces/person';
import Customer from './components/Customer';

const App: FC = () => {
  const [customers, updateCustomer] = useState({
    selectedOption: '',
    customerArr: []
  });

  useEffect(() => {
    fetchCustomers();
    // Runs ONCE after initial rendering
  }, []);

  const fetchCustomers = async () => {
    try {
      const customerData: any = await API.graphql(graphqlOperation(ListZellerCustomers));
      const customerList: any = customerData.data.listZellerCustomers.items;
      updateCustomer({ ...customers, customerArr: customerList });
    } catch (err) {
      console.log('error fetching customers ', err);
    }
  };

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    updateCustomer({ ...customers, selectedOption: e.currentTarget.value });
  };

  return (
    <div>
      <h1>User Types</h1>
      <input
        type="radio"
        value="admin"
        name="userType"
        checked={customers.selectedOption === 'admin'}
        onChange={onChange}
      />{' '}
      Admin
      <input
        type="radio"
        value="manager"
        name="userType"
        checked={customers.selectedOption === 'manager'}
        onChange={onChange}
      />{' '}
      Manager
      <h1 className="userType">
        {customers.selectedOption === 'admin' ? `${customers.selectedOption} Users` : customers.selectedOption}
      </h1>
      {customers.customerArr
        .filter((customer: Person) => customer.role.toLowerCase() === customers.selectedOption)
        .map((customer: Person, i: number) => (
          <div key={i}>
            <Customer customer={customer} />
          </div>
        ))}
    </div>
  );
};

export default App;
