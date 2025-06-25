import React from "react";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  currency,
  onCurrencyChange,
  currencyOptions = [],
  amountDisabled = false,
  currencyDisabled = false,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg flex">
      <div className="w-1/2">
        <label className="text-gray-500 mb-2 inline-block">{label}</label>
        <input
          type="number"
          className="border-2 w-full rounded-lg outline-none px-1 py-2"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="w-1/2 flex flex-col items-end">
        <label className="text-gray-500 mb-2 inline-block">Currency Type</label>
        <select
          className="rounded-lg px-1 py-2 bg-gray-100"
          value={currency}
          disabled={currencyDisabled}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((cur) => (
            <option key={cur} value={cur}>
              {cur.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
