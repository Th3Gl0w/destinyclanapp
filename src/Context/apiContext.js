import React, { useState, createContext, useCallback, useEffect } from "react";

const hashContext = createContext();

function HashDataProvider(props) {
  const [itemsInfo, setItemInfo] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const itemInfo = useCallback(async () => {
    const res = await fetch(
      "https://www.bungie.net/common/destiny2_content/json/en/aggregate-2fbe1829-dfcd-44ec-84d3-bb04a3777dc1.json"
    );
    const resJson = await res.json();
    setItemInfo(resJson.DestinyInventoryItemDefinition);
    setShowLoading(false);
  }, []);
  useEffect(() => {
    itemInfo();
  }, [itemInfo]);
  return (
    <hashContext.Provider value={{ itemsInfo, showLoading }}>
      {props.children}
    </hashContext.Provider>
  );
}
export { HashDataProvider, hashContext };
