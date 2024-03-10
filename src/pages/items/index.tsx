import React, { useState, useEffect } from "react";
import ItemApi from "../../pages/api/item.api";
import Link from "next/link";
export default function Item() {
  const [data, setData] = useState<FoodItem[]>([]);
  const itemApi = new ItemApi();
  const deleteItemList = (item_id: string) => {
    return async () => {
      console.log(item_id);
      await itemApi.deleteItems(item_id).then((res) => {
        if (res.status === 200) {
          console.log(res);
          window.location.reload()
        }
      });
    };
  };
  const defaultData = [
    {
      _id: "65e614549ce68ba31044ed96",
      food_name: "Aqz",
      category: "pastries",
      cover_photo:
        "https://images.unsplash.com/photo-1636743715220-d8f8dd900b87",
      price: "150.00",
      sale_price: "120.00",
      isActive: true,
      isAvailable: true,
      information: "No information pastries",
      sizes: [250, 500, 1000],
      photos: [
        "https://images.unsplash.com/photo-1636743715220-d8f8dd900b87",
        "https://images.unsplash.com/photo-1636743715220-d8f8dd900b87",
      ],
    },
  ];
  useEffect(() => {
    itemApi.getItems().then((fetchedData) => {
      if (fetchedData.length === 0) {
        setData(defaultData);
      } else {
        setData(fetchedData.data);
      }
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="bg-slate-500 p-8 rounded-xl border-2 border-slate-400">
          <Link className="bg-gray-600 text-white" href="/items/addItem">
            ADD Item +
          </Link>
        </div>
        <table className="mt-8">
          <thead>
            <tr>
              <th>ID</th>
              <th>Food Name</th>
              <th>Category</th>
              <th>Cover Photo</th>
              <th>Price</th>
              <th>Sale Price</th>
              <th>Active</th>
              <th>Available</th>
              <th>Information</th>
              <th>Sizes</th>
              <th>Photos</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item._id}</td>
                <td>{item.food_name}</td>
                <td>{item.category}</td>
                <td>
                  <img
                    src={item.cover_photo}
                    alt={item.food_name}
                    style={{ width: "100px" }}
                  />
                </td>
                <td>{item.price}</td>
                <td>{item.sale_price}</td>
                <td>{item.isActive.toString()}</td>
                <td>{item.isAvailable}</td>
                <td>{item.information}</td>
                <td>{item.sizes.join(", ")}</td>
                <td>
                  {item.photos.map((photo, photoIndex) => (
                    <img
                      key={photoIndex}
                      src={photo}
                      alt={`Photo ${photoIndex + 1}`}
                      style={{ width: "50px", marginRight: "5px" }}
                    />
                  ))}
                </td>
                <td>
                  <Link href={""}>Edit</Link>
                </td>
                <td>
                  <button onClick={deleteItemList(item._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
