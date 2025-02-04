import React, { useId, useState } from 'react'

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrenecyChange,
  onCurrenecyOptions = [],
  selectCurrency = 'usd',
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
   
  const amountINputId = useId()

  return (
    
    <div className=
    {`bg-white p-3 rounded-lg flex text-sm ${className}}`}
    >
      <div className='w-1/2'>
        <label htmlFor={amountINputId} className='text-black/40 mb-2
        inline-block'>
          {label}
        </label>
        <input 
         id={amountINputId} className='outline-none w-full bg-transparent
        py-1.5' type='number' placeholder='Amount' 
        disabled={amountDisable} value={amount}
        onChange={(e) => onAmountChange && 
        onAmountChange(Number(e.target.value))}/>
      </div>
      <div className='w/1/2 flex flex-wrap justify-end text-right'>
        <p className='text-black/40 mb-2  w-full'> Currency Type</p>
        <select className='rouned-lg  px-1 bg-gray-100 cursor-pointer
         outline-none' value={selectCurrency}
        onChange={(e) => onCurrenecyChange &&
         onCurrenecyChange(e.target.value)}
         disabled={currencyDisable}
         >
          {onCurrenecyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
          </select>
      </div>
    </div>
    
  )
}

export default InputBox