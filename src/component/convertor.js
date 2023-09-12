import React, { Component } from 'react';

class MoneyConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseAmount: '',
      baseCurrency: 'USD',
      targetCurrency: 'EUR',
      convertedAmount: '',
    };
    this.conversionRates = {
      USD: {
        EUR: 0.85,
        GBP: 0.72,
        INR: 74.23,
        // Add more conversion rates here...
      },
      EUR: {
        USD: 1.18,
        GBP: 0.85,
        INR: 88.19,
        // Add more conversion rates here...
      },
      GBP: {
        USD: 1.39,
        EUR: 1.17,
        INR: 103.76,
        // Add more conversion rates here...
      },
      INR: {
        USD: 0.013,
        EUR: 0.011,
        GBP: 0.0096,
        // Add more conversion rates here...
      },
      // Add more conversion rates for other currencies...
    };
  }

  handleInputChange = (event) => {
    this.setState({ baseAmount: event.target.value }, () => {
      this.performConversion();
    });
  };

  handleBaseCurrencyChange = (event) => {
    this.setState({ baseCurrency: event.target.value }, () => {
      this.performConversion();
    });
  };

  handleTargetCurrencyChange = (event) => {
    this.setState({ targetCurrency: event.target.value }, () => {
      this.performConversion();
    });
  };

  performConversion() {
    const { baseAmount, baseCurrency, targetCurrency } = this.state;

    if (!baseAmount) {
      this.setState({ convertedAmount: '' });
      return;
    }

    const rate = this.conversionRates[baseCurrency][targetCurrency];
    const converted = baseAmount * rate;
    this.setState({ convertedAmount: converted.toFixed(2) });
  }

  render() {
    const { baseAmount, baseCurrency, targetCurrency, convertedAmount } = this.state;

    return (
      <div>
        <h2>Money Converter</h2>
        <div>
          <input type="number" value={baseAmount} onChange={this.handleInputChange} />
          <select value={baseCurrency} onChange={this.handleBaseCurrencyChange}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="INR">INR</option>
            {/* Add more currency options here... */}
          </select>
          <span>=</span>
          <input type="text" value={convertedAmount} readOnly />
          <select value={targetCurrency} onChange={this.handleTargetCurrencyChange}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="INR">INR</option>
            {/* Add more currency options here... */}
          </select>
        </div>
      </div>
    );
  }
}

export default MoneyConverter;