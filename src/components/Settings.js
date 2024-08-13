import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/Settings.css";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [conversionRate, setConversionRate] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchConversionRate = async () => {
      try {
        const response = await axios.get(
          `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
        );
        setConversionRate(response.data.rates[toCurrency]);
      } catch (error) {
        console.error("Error fetching conversion rate:", error);
      }
    };

    fetchConversionRate();
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    if (conversionRate !== null) {
      setResult(amount * conversionRate);
    }
  }, [amount, conversionRate]);

  return (
    <div className="currency-converter">
      <h2>Currency Converter</h2>
      <div className="converter-form">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="0"
        />
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
          <option value="AUD">AUD</option>
          <option value="CAD">CAD</option>
        </select>
        <span>to</span>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
          <option value="AUD">AUD</option>
          <option value="CAD">CAD</option>
        </select>
      </div>
      <div className="result">
        {result !== null && (
          <p>{`${amount} ${fromCurrency} = ${result.toFixed(
            2
          )} ${toCurrency}`}</p>
        )}
      </div>
    </div>
  );
};

export default CurrencyConverter;
