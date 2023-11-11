import styles from './Formulario.module.css'

const Formulario = () => {
  return (
    <>
      <form>
        <div>
          <label htmlFor="peso">Digite o seu peso:</label>
          <input type="number" id="peso" />
        </div>
        <div>
          <label htmlFor="altura">Digite a sua altura:</label>
          <input type="number" id="altura" />
        </div>
      </form>
    </>
  )
}

export default Formulario;