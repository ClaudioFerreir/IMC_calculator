import { useState, useEffect } from 'react';

import styles from './Formulario.module.css'

const Formulario = () => {
  const [peso, setPeso] = useState(null);
  const [altura, setAltura] = useState(null);
  const [exibirAviso, setExibirAviso] = useState(false);
  
  useEffect(() => {
    if (peso === null || altura === null) {
      setExibirAviso(false);
    }else {
      setExibirAviso(true);
    }
  }, [peso, altura])

  const renderIMC = () => {
    const imc = (peso / (altura * altura)).toFixed(1);
    return isFinite(imc) ? imc : '';
  }
  const warningIMC = () => {
    if (exibirAviso) {
      if (renderIMC() < 18.5) {
        return <p>Você está abaixo do peso</p>
      }else if (renderIMC() < 24.9) {
        return <p>Você está com o peso normal</p>
      }else if (renderIMC() < 29.9) {
        return <p>Você está com sobrepeso</p>
      }else if (renderIMC() < 34.9) {
        return <p>Você está com obesidade grau 1</p>
      }else if (renderIMC() < 39.9) {
        return <p>Você está com obesidade grau 2 (severa)</p>
      }else if (renderIMC() >= 40) {
        return <p>Você está com obesidade grau 3 (mórbida)</p>
      }else {
        return null;
      }
    }
  }

  return (
    <>
      <form className={styles.IMCForm}>
        <div className={styles.formItem}>
          <label htmlFor="peso">Digite o seu peso:</label>
          <input type="number" id="peso" onChange={evento => setPeso(parseFloat(evento.target.value))}/> kg
        </div>
        <div className={styles.formItem}>
          <label htmlFor="altura">Digite a sua altura:</label>
          <input type="number" id="altura" onChange={evento => setAltura(parseFloat(evento.target.value))}/> m
        </div>
      </form>
      <div className={styles.IMCResult}>
        <p>Seu IMC é: <span>{ renderIMC() }</span></p>
      </div>
      { exibirAviso && (
        <div className={styles.IMCWarning}>
          {warningIMC()}
        </div>
      )}
    </>
  )
}

export default Formulario;