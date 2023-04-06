# 📦 rn-text-input-format

A React Native package that provides a custom text input that only accepts numerical input and automatically formats the number with separators.

## Installation

To install the package, run the following command:

```
npm install rn-text-input-format
```

OR

```
yarn add rn-text-input-format
```

## Usage

To use the `TextInputWithSeparator` component in your React Native project, import it like this:

import TextInputWithSeparator from 'rn-text-input-format';

Then, you can use it in your JSX like any other text input:

<TextInputWithSeparator
  placeholder="Enter a number"
  value={this.state.number}
  onChangeText={this.handleNumberChange}
/>

The `TextInputWithSeparator` component only accepts numerical input and formats the number with separators. For example, if you enter `2323.00`, it will be formatted as `2,323.00`. 🤑💰💸

## Props

The `TextInputWithSeparator` component accepts the following props:

| Prop name        | Description                                                                                              |
| ---------------- | -------------------------------------------------------------------------------------------------------- |
| value            | The value of the text input.                                                                             |
| onChangeText     | A callback that is called when the text input's value changes. It receives the new value as a parameter. |
| placeholder      | A placeholder string to display when the text input is empty.                                            |
| separator        | The separator to use when formatting the number. The default separator is a comma.                       |
| decimalCount     | The number of decimal places to display in the formatted number. The default is 2.                       |
| decimalSeparator | The separator to use for decimal numbers. The default separator is a period.                             |

## Contributing

If you would like to contribute to this project, please follow the guidelines below:

1. Fork the repository and create a new branch for your feature or bug fix.
2. Write code and tests for your new feature or bug fix.
3. Run tests using `npm test` or `yarn test` to make sure everything works.
4. Submit a pull request with your changes and a detailed description of what you did.

Please make sure that your code follows the existing code style and that your pull request passes all tests before submitting it.

# Author

[abdemirza](mailto:abdemirza@gmail.com)


## License

This package is distributed under the MIT License. See the LICENSE file for more information.
