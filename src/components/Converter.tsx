'use client'
import { useState } from "react";
import type CurrencyOption from "@/types/CurrencyOption";
import CurrencySelect from "./CurrencySelect";
import AmountInput from "./AmountInput";

type ConversionHistory = {
    from: string | number,
    to: string | number,
    convertFrom: string | number,
    convertResult: string | number
}

interface ConverterProps {
    options: CurrencyOption[];
    maxHistory: string;
}


const commonButtonStyle = `text-white py-2 px-6 rounded-lg text-lg font-semibold focus:outline-none `
const activeButtonStyle = commonButtonStyle + ' bg-blue-400 hover:blue-600 focus:blue-600 cursor-pointer'
const disabledButtonStyle = commonButtonStyle + ' bg-gray-400 hover:gray-600 focus:gray-600 cursor-pointer'



export default function Converter({ options, maxHistory }: ConverterProps) {
    const [convertFrom, setConvertFrom] = useState<string>('');
    const [convertTo, setConvertTo] = useState<string>('');
    const [convertAmount, setConvertAmount] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [conversionResult, setConversionResult] = useState<{ value: string } | null>(null);
    const [conversionHistory, setConversionHistory] = useState<ConversionHistory[]>([])
    const [error, setError] = useState<string | null>(null);

    const isDisabled = loading || !convertFrom || !convertTo || !convertAmount;

    const handleConvert = () => {
        if (isDisabled) {
            setError("Please fill in all fields.");
            return;
        }

        setLoading(true);
        fetch('/api/convert', {
            method: 'POST',
            body: JSON.stringify({
                from: convertFrom,
                to: convertTo,
                amount: convertAmount
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then((data: { value: string }) => {
                setConversionResult(data);
                setError(null); // Clear any previous errors
                setConversionHistory((conversionHistory) => {
                    const newHistory = {
                        from: convertFrom,
                        to: convertTo,
                        convertFrom: convertAmount,
                        convertResult: data.value
                    }
                    if (conversionHistory.length > Number(maxHistory))
                        return [
                            newHistory,
                            ...conversionHistory.slice(0, Number(maxHistory))
                        ]

                    return [
                        newHistory,
                        ...conversionHistory
                    ]
                })
            })
            .catch(error => {
                console.error('Error:', error);
                setError("An error occurred. Please try again later.");
                setConversionResult(null);
            })
            .finally(() => setLoading(false));
    };

    return (
        <>
            <div className="container mx-auto p-8 bg-gray-100 rounded-lg shadow-md">
                <div className="grid grid-cols-2 gap-8">
                    <div className="flex flex-col">
                        <label htmlFor="convertFrom" className="text-lg font-semibold mb-2">
                            From
                        </label>
                        <CurrencySelect
                            value={convertFrom}
                            onChange={(e) => setConvertFrom(e.target.value)}
                            options={options}
                        />
                        <label htmlFor="convertAmount" className="text-lg font-semibold mb-2">
                            Amount
                        </label>
                        <AmountInput
                            value={convertAmount}
                            onChange={(e) => setConvertAmount(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="convertTo" className="text-lg font-semibold mb-2">
                            To
                        </label>
                        <CurrencySelect
                            value={convertTo}
                            onChange={(e) => setConvertTo(e.target.value)}
                            options={options}
                        />
                        {
                            error &&
                            <p className="text-red-500 mb-2">{error}</p>
                        }
                        {
                            conversionResult !== null && (
                                <div className="bg-white rounded-lg shadow-md p-4">
                                    <p className="text-lg font-semibold">
                                        Conversion Result:
                                    </p>
                                    <p className="text-lg">
                                        {
                                            options.find(option => option.short_code === convertTo)?.symbol
                                        }
                                        {
                                            parseFloat(conversionResult.value).toFixed(options.find(option => option.short_code === convertTo)?.precision || 2)
                                        }
                                    </p>
                                </div>
                            )
                        }
                    </div>
                </div>
                <button
                    disabled={isDisabled}
                    className={isDisabled ? disabledButtonStyle : activeButtonStyle}
                    onClick={handleConvert}
                >
                    {loading ? 'Converting...' : 'Convert'}
                </button>
            </div>

            <div className="flex flex-col space-y-3">
                {
                    conversionHistory.map(({ from, to, convertFrom, convertResult }, index) =>
                        <div className="" key={index}>
                            <span>from currency: {from}</span>
                            <span>to currency: {to}</span>
                            <span>amount converted from: {convertFrom}</span>
                            <span>result: {convertResult}</span>
                        </div>
                    )
                }
            </div>
        </>
    );
}