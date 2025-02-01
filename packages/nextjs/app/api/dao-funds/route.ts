import { NextResponse } from "next/server";
import { fetchTotalDaoFunds } from "~~/utils/scaffold-eth/fetchTotalDaoFunds";

let cachedData: { totalUsd: number; timestamp: number } | null = null;
const CACHE_DURATION = 5 * 60 * 1000;

export async function GET() {
  try {
    if (cachedData && Date.now() - cachedData.timestamp < CACHE_DURATION) {
      return NextResponse.json(cachedData);
    }

    const data = await fetchTotalDaoFunds();
    cachedData = { ...data, timestamp: Date.now() };

    return NextResponse.json(cachedData);
  } catch (error) {
    console.error("Error fetching DAO funds:", error);
    return NextResponse.json({ totalUsd: 1000000, timestamp: Date.now() }, { status: 500 });
  }
}
