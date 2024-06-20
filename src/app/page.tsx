import Converter from "@/components/Converter";

export const dynamic = 'force-dynamic'
const historyMax = process.env.NUMBER_RECENT_CONVERSIONS as string

async function getCurrencyOptions() {
    const res = await fetch(`${process.env.API_URL}currencies?api_key=${process.env.API_KEY}&type=fiat`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        next: { revalidate: 0 }
    })
    return res.json()
}


export default async function Home() {

    const options = await getCurrencyOptions()

    return (
        <main className="flex min-h-screen flex-col items-center">
            <h1 className={'font-bold text-2xl my-12'}>
                Really Good Currency Conversion Tool
            </h1>
            {/* @ts-ignore     <-- I wouldnt do this if I had more time to type the response */}
            <Converter options={options.response.sort(({ name }) => name)} maxHistory={historyMax} />
        </main>
    );
}
