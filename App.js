import React, { useState, useEffect } from 'react'
import Table from './table'
export default function App() {

  
  const [data1, setData1] = useState([])
  const [data2, setData2] = useState([])
  const [data3, setData3] = useState([])
  

  const getData = async () => {
    await fetch("http://localhost:3800/getdata")
      .then(res => res.json())
      .then(data => {

        //ALL DATA
        

        //Question 1
        var a = data.filter((row) => parseInt(row.income.slice(1)) < 5 && (row.car === "BMW" || row.car === "Mercedes-Benz"));
        setData1(a);

        //QUESTION 2
        var b=data.filter((row)=>row.gender==="Male" && parseInt(row.phone_price)>10000  );
        setData2(b);

        //QUESTION 3
       
        var c=data.filter((row)=>row.last_name[0]===("M") &&  row.email.includes(row.last_name.toLowerCase()) && row.quote.length > 15);  
        setData3(c);

        

        

        

        
      })
  }

  useEffect(() => {
    getData();
  }, [])

 
  return (
<div>

  

  <h1>Question 1</h1>
  <Table data={data1} />

  <h1>Question 2</h1>
  <Table data={data2} />

  <h1>Question 3</h1>
  <Table data={data3} />

  
</div>

  )
}