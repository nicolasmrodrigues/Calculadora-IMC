import { useState } from "react"
import styles from './Formulario.module.css'

const Formulario = () => {
  const [altura, setAltura] = useState(0)
  const [peso, setPeso] = useState(0)
  const [IMC, setIMC] = useState(0)
  return (
    <>
      <form className={`${styles.form} mb-4`} onSubmit={(e) => {
        e.preventDefault()
        setIMC(Number((peso / (altura * altura)).toFixed(2)))
      }}>
        <div className="mb-3 row">
          <div className="col-md-12">
            <label htmlFor="altura" className={`${styles.label} form-label`}>Altura: </label>
            <input type="number" id="altura" required max={3} step={0.01} className={`${styles.input} form-control`} onChange={e => setAltura(e.target.value)} />
          </div>
        </div>
        <div className="mb-3 row">
          <div className="col-md-12">
            <label htmlFor="peso" className={`${styles.label} form-label`}>Peso: </label>
            <input type="number" id="peso" required step={0.1} className={`${styles.input} form-control`} onChange={e => setPeso(e.target.value)} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <button type="submit" className={`${styles.buttonCalcular} btn btn-primary`}>Calcular</button>
          </div>
        </div>
      </form >
      {IMC > 0 && (
        <div className={`${styles.resultado} ${IMC > 25 ? styles.resultadoNegativo : styles.resultadoPositivo} text-center`}>
          <p className='fw-semibold fs-2 mb-0' >SEU IMC:</p>
          <p className="fw-bold fs-3">{IMC}</p>
        </div >
      )}
    </>
  )
}

export default Formulario