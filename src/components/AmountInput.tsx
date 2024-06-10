interface AmountInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function AmountInput({ value, onChange }: AmountInputProps) {
    return (
        <input placeholder={'0.00'} type="text" value={value} onChange={onChange} className="border rounded-lg border-gray-300 px-4 py-2 mb-4 text-lg" />
    );
}