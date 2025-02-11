import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';
import { useGlobalContext } from '../../context/globalContext';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';

function Income() {
    const {addIncome, incomes, getIncomes, deleteIncome,totalIncome}=useGlobalContext()

    useEffect(()=>{
      getIncomes()
    },[incomes])
  return (
    <IncomesStyled>
        <InnerLayout>
            <h1>Incomes</h1>
            <h2 className="total-income">Total Income: <span> ₹{totalIncome()}</span></h2>
            <div className="income-content">
                <div className="form-container">
                <Form/>
                </div>
                <div className="incomes">
                  {incomes.map((income)=>{
                    const {_id, title, amount, date, category, description}=income;
                    return <IncomeItem
                        key={_id}
                        id={_id}
                        title={title}
                        description={description}
                        amount={amount}
                        date={date}
                        category={category}
                        indicatorColor="var(--color-green)"
                        deleteItem={deleteIncome}
                    />
                  })}
                  </div>                
            </div>
        </InnerLayout>
    </IncomesStyled>
  )
}

const IncomesStyled=styled.div`
 display: flex;
    overflow: auto;
    .total-income{
    display:flex;
    justify-content: center;
     span{
     color: var(--color-green)
     }
    }
    .income-content{
    display: flex;
    gap: 2rem;
    .incomes{
    flex:1;
    }
    }
`;

export default Income
