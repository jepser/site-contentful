export const BreakLine = (string) => {
  return string.split('\n').map((item, key) => {
    return <span key={key}>{item}<br/></span>
  })
}

export const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
)

export const normalizeId = string => {
  return string.normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/ /g, '-').toLowerCase()
}
