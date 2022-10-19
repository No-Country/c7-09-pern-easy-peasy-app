import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const initialQuerys = {
  combinados: {},
  separados: {},
}

export const useFilters = () => {
  const [querys, setQuerys] = useState(initialQuerys)
  const navigate = useNavigate()

  useEffect(() => {
    redireccionar()
  }, [querys])

  function addFilter(filter, isCombinate = false) {
    if (Object.keys(filter) <= 0) return
    if (isCombinate) {
      setQuerys({ ...querys, combinados: { ...querys.combinados, ...filter } })
    } else {
      setQuerys({ ...querys, separados: { ...filter } })
    }
  }

  function redireccionar(baseUrl = '') {
    baseUrl += '?'
    for (let combi in querys.combinados) {
      if (querys.combinados[combi] !== 'default')
        baseUrl += `${combi}=${querys.combinados[combi]}&`
    }
    for (let sep in querys.separados) {
      if (querys.separados[sep] !== 'default')
        baseUrl += `${sep}=${querys.separados[sep]}&`
    }
    navigate(baseUrl.endsWith('&') ? baseUrl.slice(0, -1) : baseUrl)
  }

  return [querys, addFilter, redireccionar]
}
