import CurrencyOption from "@/types/CurrencyOption";

interface CurrencySelectProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: CurrencyOption[];
}


export default function CurrencySelect({ value, onChange, options }: CurrencySelectProps) {
    return (
        <select value={value} onChange={onChange} className="border rounded-lg border-gray-300 px-4 py-2 mb-4 text-lg">
            {options.map((option) => (
                <option key={option.id} value={option.short_code}>{option.name + ' (' + option.symbol + ')'}</option>
            ))}
        </select>
    );
}