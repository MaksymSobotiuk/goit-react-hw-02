import css from './Notifacation.module.css'

export default function Notification({ message }) {
  return (
    <p className={css.notification}>{message}</p>
  );
}