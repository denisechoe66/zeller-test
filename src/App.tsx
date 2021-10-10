import React, { useState, FC, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { ListZellerCustomers } from './graphql/queries';
import './App.css';
import { Person } from './interfaces/person';
import Customer from './components/Customer';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-transform: capitalize;
  font-weight: normal;
  padding: 1em 0;
`;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #999;
  padding-bottom: 1em;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  width: 100%;
`;

const RadioButtonLabel = styled.label`
  cursor: pointer;
  display: flex;
  align-items: self-end;
  width: 100%;
  padding: 1em;
`;

const RadioButton = styled.input`
  width: 1.5em;
  height: 1.5em;
  margin-right: 10px;
`;

const App: FC = () => {
  const [customers, updateCustomer] = useState({
    selectedOption: 'admin',
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
      <Title>User Types</Title>
      <Wrapper>
        <Item className={customers.selectedOption === 'admin' ? 'selected' : ''}>
          <RadioButtonLabel>
            <RadioButton
              type="radio"
              value="admin"
              name="userType"
              checked={customers.selectedOption === 'admin'}
              onChange={onChange}
            />
            Admin
          </RadioButtonLabel>
        </Item>
        <Item className={customers.selectedOption === 'manager' ? 'selected' : ''}>
          <RadioButtonLabel>
            <RadioButton
              type="radio"
              value="manager"
              name="userType"
              checked={customers.selectedOption === 'manager'}
              onChange={onChange}
            />
            Manager
          </RadioButtonLabel>
        </Item>
      </Wrapper>
      <Wrapper>
        <Title>
          {customers.selectedOption === 'admin' ? `${customers.selectedOption} Users` : customers.selectedOption}
        </Title>
        {customers.customerArr
          .filter((customer: Person) => customer.role.toLowerCase() === customers.selectedOption)
          .map((customer: Person, i: number) => (
            <div key={i}>
              <Customer customer={customer} />
            </div>
          ))}
      </Wrapper>
    </div>
  );
};

export default App;
