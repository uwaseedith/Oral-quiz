import React, { Component } from 'react';

interface TemperatureConverterProps {}

interface TemperatureConverterState {
  temperature: number;
  scale: 'C' | 'F';
}

class TemperatureConverter extends Component<TemperatureConverterProps, TemperatureConverterState> {
  constructor(props: TemperatureConverterProps) {
    super(props);
    this.state = {
      temperature: 0,
      scale: 'C'
    };
  }

  handleTemperatureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      temperature: parseFloat(e.target.value)
    });
  };

  handleScaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      scale: e.target.value as 'C' | 'F'
    });
  };

  convertTemperature = (): number => {
    const { temperature, scale } = this.state;
    if (scale === 'C') {
      return (temperature * 9) / 5 + 32; // Celsius to Fahrenheit
    } else {
      return ((temperature - 32) * 5) / 9; // Fahrenheit to Celsius
    }
  };

  render() {
    const { temperature, scale } = this.state;
    const convertedTemp = this.convertTemperature();

    return (
      <div>
        <h2>Temperature Converter</h2>
        <label>
          Temperature:
          <input type="number" value={temperature} onChange={this.handleTemperatureChange} />
        </label>
        <label>
          Scale:
          <select value={scale} onChange={this.handleScaleChange}>
            <option value="C">Celsius</option>
            <option value="F">Fahrenheit</option>
          </select>
        </label>
        <p>
          Converted Temperature: {convertedTemp.toFixed(2)} {scale === 'C' ? 'Fahrenheit' : 'Celsius'}
        </p>
      </div>
    );
  }
}

export default TemperatureConverter;
