import { useState } from "react";

const useConfidenceInterval = (
  mean,
  deviation,
  dataLength,
  confidenceLevel = 0.95
) => {
  const [ci, setCi] = useState(null);

  const calculateCI = () => {
    if (dataLength === 0 || mean == null || deviation == null) return;

    // Calculate margin of error
    const zScore = confidenceLevel === 0.95 ? 1.96 : 1.645; // 1.96 for 95%, 1.645 for 90%
    const marginOfError = zScore * (deviation / Math.sqrt(dataLength));
    setCi([mean - marginOfError, mean + marginOfError]);
  };

  return { ci, calculateCI };
};

export default useConfidenceInterval;
