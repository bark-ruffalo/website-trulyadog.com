export async function fetchWithRetry(
  url: string,
  options: RequestInit & { maxRetries?: number } = {},
): Promise<Response> {
  const { maxRetries = 3, ...fetchOptions } = options;
  let lastError: Error | null = null;

  for (let i = 0; i < maxRetries; i++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch(url, {
        ...fetchOptions,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (response.ok) return response;
      lastError = new Error(`HTTP error! status: ${response.status}`);
    } catch (error) {
      lastError = error as Error;
      console.warn(`Retry ${i + 1}/${maxRetries} failed:`, error);
      if (i < maxRetries - 1) {
        await new Promise(resolve => setTimeout(resolve, 2000 * (i + 1)));
      }
    }
  }

  throw lastError;
}

export async function retryContractCall<T>(fn: () => Promise<T>, fallbackValue: T): Promise<T> {
  let lastError: Error | null = null;
  const RPC_ENDPOINTS = ["endpoint1", "endpoint2"];

  for (let i = 0; i < RPC_ENDPOINTS.length; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;
      console.warn(`RPC attempt ${i + 1}/${RPC_ENDPOINTS.length} failed:`, error);
      if (i < RPC_ENDPOINTS.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
      }
    }
  }

  console.error("All RPC endpoints failed. Last error:", lastError);
  return fallbackValue;
}
