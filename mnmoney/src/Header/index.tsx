import logoImg from '../assets/logo.png';
import { Container, Content } from './styles';

interface HeaderProps{
  onopenNewTransactionModal: () => void;
}

export function Header({onopenNewTransactionModal}:HeaderProps) {
  return (
    <Container>
      <Content>
        <div>
          <img src={logoImg} alt="Logo" />
          <h1>MnMoney</h1>
        </div>
        <button type='button' onClick={onopenNewTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
}