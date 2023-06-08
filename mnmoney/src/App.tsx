import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './Dashboard';
import { Header } from './Header';
import { GlobalStyle } from './styles/global';
import { NewTransactionModal } from './NewTransactionModal';

function App() {

  Modal.setAppElement('#root');
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <>
      <Header onopenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal} />
      <GlobalStyle />
    </>
  );
}

export default App;
