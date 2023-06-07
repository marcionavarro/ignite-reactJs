import logoImg from '../assets/logo.png';
import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <div>
          <img src={logoImg} alt="" />
          <h1>MnMoney</h1>
        </div>
        <button type='button'>Nova Transação</button>
      </Content>
    </Container>
  );
}