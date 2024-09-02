import { useEffect, useState } from "react";
import { Market } from "../../api/Market";
import styled from "../market.module.css";

interface IProps {
  product_id: string;
  product_title: string;
  product_description: string;
  product_photos: string[];
}

export function MarketGetAll() {
  //
  const [allData, setAllData] = useState<IProps[]>([]);
  const [images, setImages] = useState<string>();
  async function getAll() {
    const data = await Market.getLLData().then((value) => value);

    setAllData(data);

    console.log(data.data);
  }

  useEffect(() => {
    const photos = allData.map((e) => e.product_photos);
    const getOnePhoto = photos.map((value: any, index: any) => {
      return (
        <div>
          <img src={value[index]} alt="" />
        </div>
      );
    });
    console.log(images);
    console.log(getOnePhoto);
  }, []);

  return (
    <>
      <h1>MarketGetAll</h1>
      <button onClick={getAll}>GetAll</button>
      <div>
        {allData.map((value: IProps) => {
          return (
            <div key={value.product_id + Math.random() * 10000}>
              {/* {value} */}
              <div className={styled.container}>
                {/* <div>product_id: {value.product_id}</div> */}
                <div>product_title: {value.product_title}</div>
                <hr />
                <div>{images}</div>
                <br />
                <div>product_description: {value.product_description}</div>
                <br />
                <div>
                  "product_photos":
                  {value.product_photos.map((src, index) => (
                    <img
                      style={{ width: "100px" }}
                      key={index}
                      src={src}
                      alt={`Image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
