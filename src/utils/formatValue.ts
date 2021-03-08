const formatValue = (value: number): string =>
  Intl.NumberFormat('pt_BR', {
    style: 'currecy',
    currency: 'BRL',
  }).format(value);

export default formatValue;
