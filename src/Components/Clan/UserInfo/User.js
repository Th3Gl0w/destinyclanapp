import React, { useCallback, useState, useEffect, useContext } from "react";
import "./User.css";
import { hashContext } from "../../../Context/apiContext";

function User(props) {
  const appContext = useContext(hashContext);
  const { itemsInfo, showLoading } = appContext;
  const id = props.match.params.id;
  const [usersInfo, setUserInfo] = useState([]);
  const userInfo = useCallback(async () => {
    const res = await fetch(
      `https://www.bungie.net/Platform/Destiny2/3/Profile/${id}/?components=200,205,400`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "9d868d3e372a49509cc3e1b850243937"
        }
      }
    );
    const resJson = await res.json();
    setUserInfo(resJson.Response.characterEquipment.data);
  }, [id]);
  useEffect(() => {
    userInfo();
  }, [userInfo]);
  console.log(usersInfo);
  return (
    <div className="bg">
      {/* test
      {id} */}
      {showLoading ? (
        <div>Loading...</div>
      ) : (
        Object.keys(usersInfo).map((e, i) => (
          <div>
            **************
            {usersInfo[e].items.map((e, i) => {
              return <div>{itemsInfo[e.itemHash].displayProperties.name}</div>;
            })}
            **************
          </div>
        ))
      )}
    </div>
  );
}

export default User;
