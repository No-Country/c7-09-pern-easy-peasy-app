/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from 'react'
import { useFilters } from '../../hooks/useFilters'
import './categories.css'

const initialLevels = {
  principiante: 'default',
  intermedio: 'default',
  avanzado: 'default',
}

export const Categories = ({ addFilter }) => {
  const [levels, setLevels] = useState(initialLevels)

  useEffect(() => {
    addFilter({ ...levels }, true)
  }, [levels])

  const handlerCheck = (e) => {
    console.log(e.target.checked)
    setLevels({
      ...levels,
      [e.target.name]: e.target.checked ? e.target.name : 'default',
    })
  }

  return (
    <div className="1e644_15299">
      <div className="ei644_15299_10_3365">
        <div className="ei644_15299_10_3365_8_635"></div>
        <div className="ei644_15299_10_3365_8_690">
          <span className="ei644_15299_10_3365_8_644">Niveles</span>
          <div className="ei644_15299_10_3365_8_689">
            <div className="ei644_15299_10_3365_8_652">
              <div className="ei644_15299_10_3365_8_651"></div>
              <label className="text-[16px] ">
                <input
                  type="checkbox"
                  name="principiante"
                  onChange={handlerCheck}
                  className="mr-1"
                />
                Principiante
              </label>
            </div>
            <div className="ei644_15299_10_3365_8_653">
              <div className="ei644_15299_10_3365_8_654"></div>
              <label className="text-[16px] ">
                <input
                  type="checkbox"
                  name="intermedio"
                  onChange={handlerCheck}
                  className="mr-1"
                />
                Intermedio
              </label>
            </div>
            <div className="ei644_15299_10_3365_8_684">
              <div className="ei644_15299_10_3365_8_685"></div>
              <label className="text-[16px] ">
                <input
                  type="checkbox"
                  name="avanzado"
                  onChange={handlerCheck}
                  className="mr-1"
                />
                Avanzado
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
