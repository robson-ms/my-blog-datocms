import VMasker from 'vanilla-masker';

export const phoneMask = (value: any) =>
  value && VMasker.toNumber(value)
    ? VMasker.toPattern(value, '(99) 99999-9999')
    : '';