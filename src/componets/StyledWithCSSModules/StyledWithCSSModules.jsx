// CSS
import styles from './styles.module.css'

function StyledWithCSSModules() {
  return (
    <div className={styles.container}>
      <h2 className={styles.titleFont}>Global CSS</h2>
      <p>This component is styled with global css</p>
    </div>
  )
}

export default StyledWithCSSModules;