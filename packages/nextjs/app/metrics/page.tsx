"use client";

import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { loadFormattedMetrics } from "~~/utils/ecosystem-metrics/client";

const Metrics: NextPage = () => {
  const [metrics, setMetrics] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        setLoading(true);
        const formattedMetrics = await loadFormattedMetrics();
        setMetrics(formattedMetrics);
      } catch (error) {
        console.error("Error loading metrics:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMetrics();
  }, []);

  return (
    <div className="flex items-center justify-center flex-col flex-grow pt-10">
      <div className="px-5 w-full max-w-4xl">
        <h1 className="text-center mb-8 text-4xl font-bold">Ecosystem Metrics</h1>

        {loading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="bg-base-200 dark:bg-base-300 p-6 rounded-lg shadow-md">
            <div
              className="whitespace-pre-wrap text-base-content dark:text-white font-mono text-sm sm:text-base [&_a]:text-blue-500 [&_a]:hover:text-blue-600 dark:[&_a]:text-blue-400 dark:[&_a]:hover:text-blue-300"
              dangerouslySetInnerHTML={{ __html: metrics }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Metrics;