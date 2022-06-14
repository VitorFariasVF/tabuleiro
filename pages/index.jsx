import Linha from '../components/Linha'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.child}>
        <Linha/>
      </div>
    </div>
  )
}
