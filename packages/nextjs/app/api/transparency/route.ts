import { fetchEcosystemMetrics, formatEcosystemMetrics } from "~~/utils/ecosystem-metrics";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    const metrics = await fetchEcosystemMetrics();
    const text = formatEcosystemMetrics(metrics);

    return new Response(text, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch (error) {
    console.error("Error fetching ecosystem metrics:", error);
    return new Response("Error fetching ecosystem metrics", {
      status: 500,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  }
}
