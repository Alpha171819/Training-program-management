"use client"

import React, { useEffect, useState } from "react";
import axios from "axios";
const URL = process.env.NEXT_PUBLIC_SERVER_URL


function PreferredSubjects() {
    const [subjectsData, setSubjectsData] = useState({})
    const [instData, setInstData] = useState({})
    useEffect(() => {
        axios.get(`${URL}/subjects`).then((res) => {
            setSubjectsData(res.data);
        }).catch((err) => {
            console.log(err);
        })
        axios.get(`${URL}/instructors`).then((res) => {
            setInstData(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])
  return (
    <div>
        <select name="ingredients[]" id="ingredients" multiple="multiple">
    <option value="cheese">Cheese</option>
    <option value="tomatoes">Tomatoes</option>
    <option value="mozarella">Mozzarella</option>
    <option value="mushrooms">Mushrooms</option>
    <option value="pepperoni">Pepperoni</option>
    <option value="onions">Onions</option>
</select>
    </div>
  )
}


export default PreferredSubjects
