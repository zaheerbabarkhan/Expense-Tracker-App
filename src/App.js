import Header from './header/header.js'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import Balance from './balance-comp/balance.js'
import Income_Expense from './income-expense/income-expense.js'
import History from './transHistory/history.js'
import Add_Trans from './add-trans/add_trans.js'
import GlobalProvider from './context/GlobalState.js'


function App() {
  return (
    <GlobalProvider>
      <div className='container-fluid ' style={{ width: '30%' }}>
        <Header />
        <Balance />
        <Income_Expense />
        <History />
        <Add_Trans />
      </div>
      
    </GlobalProvider>
  );
}

export default App;
