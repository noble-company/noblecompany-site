import { useEffect, useState } from "react";
import { getUTMParams } from "@/lib/utils";

export function useUTMParams() {
  const [utmParams, setUtmParams] = useState({
    utm_source: "",
    utm_campaign: "",
    utm_medium: "",
    utm_content: "",
  });

  useEffect(() => {
    setUtmParams(getUTMParams());
  }, []);

  return utmParams;
}
