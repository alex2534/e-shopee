import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Market } from "../api/Market";
import { useEffect, useState } from "react";

interface IProps {
  product_id: string;
  product_title: string;
  product_description: string;
  product_photos: string[];
}

export default function SearchImagens() {
  const [allData, setAllData] = useState<IProps[]>([]);

  async function getAllImages() {
    const data = await Market.getLLData().then((value) => value);
    setAllData(data);
    console.log(data.data);
  }
  useEffect(() => {
    getAllImages();
  }, []);
  return (
    <div>
      <div>
        {allData.map((value: IProps) => {
          return (
            <div key={value.product_id + Math.random() * 10000}>
              {/* {value} */}
              <div>
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
    </div>
  );
}
