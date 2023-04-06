/**
 * Trims a string to two decimal places
 * @param {string} intStr The input string
 * @returns {string} The string trimmed to two decimal places
 */
export function trimToTwoDecimalPlaces(intStr: string): string {
  const decimalIndex = intStr.indexOf('.');
  if (decimalIndex !== -1 && intStr.slice(decimalIndex).length > 1) {
    return intStr.slice(0, decimalIndex + 3);
  } else {
    return intStr;
  }
}

/**
 * Validates a decimal input string and sets an error message if invalid
 * @param {string} text The input string to validate
 * @param {function} setError The function to set the error message
 * @returns {void}
 */
export function decimalValidationE(
  text: string,
  setError: (msg: string | null) => void
): void {
  const decimalRegex = /^[1-9]\d*(\.\d+)?$/;
  if (!decimalRegex.test(text)) setError('Invalid Decimal');
  else setError(null);
}

/**
 * Converts a string input to a decimal number
 * @param {string} input The input string to convert
 * @returns {number|null} The converted decimal number or null if input is empty
 */
export function convertToDecimalE(input: string): number | null {
  if (!input) return null;
  const trimmedInput = trimToTwoDecimalPlaces(input);
  const parsedInput = parseFloat(trimmedInput.replace(/,/g, ''));
  return isNaN(parsedInput) ? null : parsedInput;
}

export const formatNumberE = (number: number, maxDecimal: number = 2) => {
  if (!number) return number;
  return new Intl.NumberFormat('en', {
    maximumFractionDigits: maxDecimal,
    minimumFractionDigits: 0,
  }).format(number);
};

export const onChangeInput = (
  input: string,
  setInputText: (input: string) => void
) => {
  const notAllowedChar = /\d|(.)/;
  if (!input) setInputText('');
  if (input.slice(-1).match(notAllowedChar) == null) return;
  const separatorOrZero = returnZeroes(input);
  let decimalNumber = convertToDecimalE(input);
  if (decimalNumber == null || separatorOrZero == undefined) return;
  const convertToID = formatNumberE(decimalNumber);
  setInputText(convertToID + separatorOrZero);
};

const returnZeroes = (input: string) => {
  if (!input) return;
  const separator = '.';
  const separatorIdx = input.indexOf(separator);
  if (input.slice(-1) == separator) return separator;
  else if (input.slice(-2) == `${separator}0`) return `${separator}0`;
  else if (input.slice(-3) == `${separator}00`) return `${separator}00`;
  else if (input.slice(-4) == `${separator}000`) return `${separator}00`;
  else if (
    input.slice(-1) > '0' &&
    input.substring(separatorIdx, separatorIdx + 3) == `${separator}00`
  )
    return `${separator}00`;
  else if (
    input.indexOf(separator) != -1 &&
    input[input.indexOf(separator) + 2] == '0'
  )
    return '0';
  return '';
};
