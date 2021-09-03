const formatter = new Intl.NumberFormat()

function FormatCurrency({ className, value, unit }) {
  if (!value) return null

  return <span className={className}>{`${formatter.format(value)} ${unit}`}</span>
}

export default FormatCurrency
