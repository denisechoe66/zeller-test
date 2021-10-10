import React from 'react';
import { Person } from '../interfaces/person';
import styled from 'styled-components';

interface CustomerProps {
  customer: Person;
}

const Wrapper = styled.div`
  padding: 1em 0;
  width: 100%;
  height: auto;
  display: flex;
`;

const CustDetail = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const CustNamePlate = styled.p`
  font-size: 1.1em;
  padding: 0.5em 0.8em;
  background-color: #eaf2fa;
  border-radius: 0.3em;
  margin-right: 20px;
  color: #407fcc;
`;

const CustName = styled.p`
  font-size: 1.2em;
`;

const CustRole = styled.p`
  text-transform: capitalize;
  color: #666;
  font-size: 0.9em;
  padding-top: 2px;
`;

const Customer: React.FC<CustomerProps> = (props: CustomerProps) => {
  return (
    <Wrapper>
      <CustNamePlate>{props.customer.name.substring(0, 1)}</CustNamePlate>
      <CustDetail>
        <CustName>{props.customer.name}</CustName>
        <CustRole>{props.customer.role.toLowerCase()}</CustRole>
      </CustDetail>
    </Wrapper>
  );
};

export default Customer;
