import styles from './styles.module.scss';

interface SuscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SuscribeButtonProps) {
  return (
    <button
      type='button'
      className={styles.subscribeButton}
    >
      Subscribe now
    </button>
  );
}