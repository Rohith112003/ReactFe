import React, { useEffect, useState } from 'react';

export default function LifeCycleHook() {
  const [data, setdata] = useState([]);

  const fetchapi = async () => {
    let res = await fetch("https://fakestoreapi.com/products/")
    let a = await res.json();
    setdata(a);
    console.log(a, "kiiii");
  };

  useEffect(() => {

    fetchapi()
  }, []);

  return (
    <div>
      { data.map((dd, i) => (

        <div key={i}>

          <h1>{dd.title}</h1>
          {/* <image>"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._U</image> */}

          <button>click</button>

        </div>
        ))}
    </div>
  )
}


