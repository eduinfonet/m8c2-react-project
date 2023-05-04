import React, { useEffect, useState } from "react";
import SingleData from "../SingleData/SingleData";
import "./Card.css";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

const Card = () => {
  const [data, setData] = useState([]);
  const [singleData, setSingleData] = useState({});
  const [showAll, setShowAll] = useState(false);
  const [uniqueId, setUniqueId] = useState(null);
  // console.log(singleData);

  const handleShowAll = () => {
    setShowAll(true);
  };

  const handleSort = () => {
    const sortedData = data.sort((a, b) => {
      return new Date(b.published_in) - new Date(a.published_in);
    });
    setData([...data, sortedData]);
  };

  useEffect(() => {
    console.log("hello from useEffect");
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
      .then((res) => res.json())
      .then((data) => setSingleData(data.data));
  }, [uniqueId]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(
        `https://openapi.programming-hero.com/api/ai/tools`
      );
      const value = await res.json();
      //   console.log(value.data.tools);
      setData(value.data.tools);
    };

    loadData();
  }, []);
  // console.log(singleData);
  return (
    <div className="card">
      <span onClick={handleSort}>
        <Button>Sort By Date</Button>
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-12 lg:py-12">
        {data?.slice(0, showAll ? 12 : 6).map((singleData) => (
          <SingleData
            singleData={singleData}
            key={singleData.id}
            setUniqueId={setUniqueId}
          ></SingleData>
        ))}
        {/* {data.map((singleData) => {
          // console.log(sinleData);
          return <SingleData singleData={singleData}></SingleData>;
        })} */}
      </div>
      {!showAll && (
        <p onClick={handleShowAll}>
          <Button>Shoe More</Button>
        </p>
      )}
      <Modal singleData={singleData}></Modal>
    </div>
  );
};

export default Card;
