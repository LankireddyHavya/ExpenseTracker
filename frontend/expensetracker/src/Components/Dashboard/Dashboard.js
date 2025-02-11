import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';
import { dollar } from '../../utils/Icons';
import { useGlobalContext } from '../../context/globalContext';
import History from '../History/History';

function Dashboard() {
  const { totalExpenses, totalIncome, totalBalance, getIncomes, getExpenses, incomes, expenses } = useGlobalContext();

  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);

  return (
    <DashboardStyled>
      <InnerLayout>
        <div className="stats-con">
          <div className="chart-con">
            <div className="amount-con">
              <div className="income">
                <h2>Total Income</h2>
                <p>{dollar} {totalIncome()}</p>
              </div>
              <div className="expense">
                <h2>Total Expense</h2>
                <p>{dollar} {totalExpenses()}</p>
              </div>
              <div className="balance">
                <h2>Total Balance</h2>
                <p>{dollar} {totalBalance()}</p>
              </div>
            </div>
          </div>
          <div className="history-con">
            <History />
            <h2 className="salary-title">Min <span>Income</span> Max</h2>
            <div className="salary-item">
              <p>{Math.min(...incomes.map(item => item.amount))}</p>
              <p className="max">{Math.max(...incomes.map(item => item.amount))}</p>
            </div>
            <h2 className="salary-title">Min <span>Expense</span> Max</h2>
            <div className="salary-item">
              <p>{Math.min(...expenses.map(item => item.amount))}</p>
              <p className="max">{Math.max(...expenses.map(item => item.amount))}</p>
            </div>
          </div>
        </div>
      </InnerLayout>
    </DashboardStyled>
  );
}

const DashboardStyled = styled.div`
  max-height: 800px;
  overflow-y: auto;
  scrollbar-width: none;

  .stats-con {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;

    .chart-con {
      grid-column: 1 / 3;
      height: 400px;

      .amount-con {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        margin-top: 2rem;

        .income, .expense {
          width:300px;
        }

        .income, .expense, .balance {
          background: #FCF6F9;
          border: 1.5px solid #FFFFFF;
          box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
          border-radius: 15px;
          padding: 0.5rem;
          align-items: center;

          p {
            font-size: 2rem;
            font-weight: 600;
          }
        }
          

        .balance {
          grid-column: 2 / 4;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-left:-200px;
          width:300px;

          p {
            color: var(--color-green);
            opacity: 0.6;
            font-size: 3.7rem;
          }
        }
      }
    }

    .history-con {
      grid-column: 3 / -1;
      width: 100%;

      h2 {
        margin: 1rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .salary-title {
        font-size: 1.2rem;

        span {
          font-size: 1.8rem;
        }
      }
        .salary-item p {
    font-weight: 600;
    font-size: 1.6rem;
    flex: 1;  /* Ensures both min and max take equal space */
    text-align: center;  /* Center the text */
}

      .salary-item {
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
          font-weight: 600;
          font-size: 1.6rem;
          width: 100%;
          flex: 1;  
        align-items: center;
          
        }
      }
    }
  }
`;

export default Dashboard;
