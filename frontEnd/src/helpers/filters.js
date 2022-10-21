// FIltros para los cursos landing page
// Precio
export function filterByPrice(data, ordering) {
  return data.sort((a, b) =>
    ordering === 'higer' ? b.price - a.price : a.price - b.price
  )
}

export function filterByPunctuation(data) {
  console.log(
    data.sort((a, b) => parseFloat(b.puntuaction) - parseFloat(a.puntuaction))
  )
  return data.sort(
    (a, b) => parseFloat(b.puntuaction) - parseFloat(a.puntuaction)
  )
}

export function filterByDate(data, type) {
  return data.sort((a, b) => {
    return type === 'create'
      ? new Date(b.createdate).getTime() - new Date(a.createdate).getTime()
      : new Date(b.updatedate).getTime() - new Date(a.updatedate).getTime()
  })
}
