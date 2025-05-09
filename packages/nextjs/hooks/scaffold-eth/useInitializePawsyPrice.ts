import { useCallback, useEffect } from "react";
import { useTargetNetwork } from "./useTargetNetwork";
import { useInterval } from "usehooks-ts";
import scaffoldConfig from "~~/scaffold.config";
import { useGlobalState } from "~~/services/store/store";
import { fetchPawsyPriceFromUniswap } from "~~/utils/scaffold-eth";

/**
 * Get the price of PAWSY based on PAWSY/DAI trading pair from Uniswap SDK
 */
export const useInitializePawsyPrice = () => {
  const setPawsyPrice = useGlobalState(state => state.setPawsyPrice);
  const setIsPawsyFetching = useGlobalState(state => state.setIsPawsyFetching);
  const { targetNetwork } = useTargetNetwork();

  const fetchPrice = useCallback(async () => {
    try {
      setIsPawsyFetching(true);
      const price = await fetchPawsyPriceFromUniswap();
      setPawsyPrice(price);
    } catch (error) {
      console.error("Error fetching PAWSY price:", error);
    } finally {
      setIsPawsyFetching(false);
    }
  }, [setIsPawsyFetching, setPawsyPrice, targetNetwork]);

  // Get the price of PAWSY from Uniswap on mount
  useEffect(() => {
    fetchPrice();
  }, [fetchPrice]);

  // Get the price of PAWSY from Uniswap at a given interval
  useInterval(fetchPrice, scaffoldConfig.enablePolling ? scaffoldConfig.pollingInterval : null);
};
