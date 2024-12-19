import { useCallback, useEffect } from "react";
import { useTargetNetwork } from "./useTargetNetwork";
import { useInterval } from "usehooks-ts";
import scaffoldConfig from "~~/scaffold.config";
import { useGlobalState } from "~~/services/store/store";
import { fetchPawsyPriceFromUniswap } from "~~/utils/scaffold-eth";

const enablePolling = false;

/**
 * Get the price of PAWSY based on PAWSY/DAI trading pair from Uniswap SDK
 */
export const useInitializePawsyPrice = () => {
  const setPawsyPrice = useGlobalState(state => state.setPawsyPrice);
  const setIsPawsyFetching = useGlobalState(state => state.setIsPawsyFetching);
  const { targetNetwork } = useTargetNetwork();

  const fetchPrice = useCallback(async () => {
    setIsPawsyFetching(true);
    const price = await fetchPawsyPriceFromUniswap();
    setPawsyPrice(price);
    setIsPawsyFetching(false);
  }, [setIsPawsyFetching, setPawsyPrice, targetNetwork]);

  // Get the price of PAWSY from Uniswap on mount
  useEffect(() => {
    fetchPrice();
  }, [fetchPrice]);

  // Get the price of PAWSY from Uniswap at a given interval
  useInterval(fetchPrice, enablePolling ? scaffoldConfig.pollingInterval : null);
};
