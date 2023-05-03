import React, { useEffect, useState } from "react";
import SingleData from "../SingleData/SingleData";
import "./Card.css";

const Card = () => {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(
        "https://openapi.programming-hero.com/api/ai/tools"
      );
      const value = await res.json();
      console.log(value.data.tools);
      setData(value.data.tools);
    };
    loadData();
  }, []);

  return (
    <div className="card">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-12 lg:py-12">
        {data.slice(0, showAll ? 12 : 6).map((singleData) => (
          <SingleData singleData={singleData} key={singleData.id}></SingleData>
        ))}
        {/* {data.map((singleData) => {
          // console.log(sinleData);
          return <SingleData singleData={singleData}></SingleData>;
        })} */}
      </div>
    </div>
  );
};

export default Card;
