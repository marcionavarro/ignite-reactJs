import { useEffect } from 'react';
import { Container } from './styles';
import { api } from '../services/api';

export function TransactionsTable() {

  useEffect(() => {
    api.get('/transactions')
    .then(response => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento Web</td>
            <td className='deposit'>R$12.000</td>
            <td>Desenvolvimento</td>
            <td>05/06/2023</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className='withdraw'>- R$1.000</td>
            <td>Casa</td>
            <td>15/06/2023</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}