import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const AxiosData = () => {
    const [phones, setphone] = useState([]);
    useEffect(() =>{
      // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
      // .then(res => res.json())
      // .then(data => setphone(data.data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
          const phoneData = data.data.data;
          const fakeWithPhoneData = phoneData.map(phone => {
            const obj = {
              name: phone.phone_name,
              price: parseInt(phone.slug.split('-')[1])
            }
            return obj;
          })
          setphone(fakeWithPhoneData)
          console.log(fakeWithPhoneData);
          
        })
    },[])
  return (
    <div>
      <h2 className='text-5xl'>Phone:{phones.length} </h2>
      <BarChart width={1200} height={400} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey={'name'}/>
          <YAxis />
          <Tooltip />
        </BarChart>
    </div>
  )
}

export default AxiosData
