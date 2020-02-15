import React, { useState, useEffect, useCallback } from "react";
import Member from "./Memembers/Member";

function Clan() {
  const [data, setData] = useState([]);
  const fetchData = useCallback(async () => {
    const res = await fetch(
      "https://www.bungie.net/Platform/GroupV2/4097337/Members/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "9d868d3e372a49509cc3e1b850243937"
        }
      }
    );
    const resJson = await res.json();
    setData(resJson.Response.results);
  }, []);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  console.log(data);
  return (
    <div className="App">
      {data.map((e, i) => {
        return (
          <div key={i}>
            <Member
              name={e.destinyUserInfo.displayName}
              id={e.destinyUserInfo.membershipId}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Clan;
