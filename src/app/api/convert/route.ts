import { NextRequest, NextResponse } from "next/server";



export async function POST(request: NextRequest) {
    const { from, to, amount } = await request.json()

    const res = await fetch(
        `${process.env.API_URL}convert?api_key=${process.env.API_KEY}&from=${from}&to=${to}&amount=${amount}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )

    const data = await res.json()
    return NextResponse.json(data.response)
}