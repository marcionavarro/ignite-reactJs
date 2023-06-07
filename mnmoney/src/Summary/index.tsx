import IncomeImg from '../assets/income.png';
import OutcomeImg from '../assets/outcome.png';
import TotalImg from '../assets/total.png';
import { Container } from './styles';


export function Summary(){
  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={OutcomeImg} alt="Outcome" />
          {/* <img src={IncomeImg} alt="Income" /> */}
        </header>
        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={OutcomeImg} alt="Outcome" />
        </header>
        <strong>- R$500,00</strong>
      </div>

      <div className='highlight-background'>
        <header>
          <p>Total</p>
          <img src={TotalImg} alt="Total" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  );
}