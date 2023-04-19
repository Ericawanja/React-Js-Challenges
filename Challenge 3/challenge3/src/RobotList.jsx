import React from "react";

function RobotList({ list }) {
    console.log(list)
  return (
    <div>
      {list.length === 0 ? (
        <p>Please enter a name</p>
      ) : (
        <>
          {list.map((name) => {

            return <>

              <img src={`https://robohash.org/hello${name}`} alt="genereted" />
              <p>{name}</p>
            </>;
          })}
        </>
      )}
    </div>
  );
}

export default React.memo(RobotList);
