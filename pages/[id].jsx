import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { LinkButton } from "../components/LinkButton";
import CharacterCard from "../components/CharacterCard";

export async function getServerSideProps(ctx) {
    return {
        props: {
            id: ctx.query.id,
            value: ctx.query.value,
            url: ctx.query.url
        }
    }
}

function Page (props) {
    const [data, setData] = useState([]);

    useEffect(() => {
      function fetchData() {
        try {
          const res = fetch(
              `/api/profile/?id=${props.id}`
          ).then((response) =>{
            const newData = response.json();
            newData.then((data) => setData(data));
          });
        } catch (err) {
          console.log(err);
        }
      }
      fetchData();
    }, []);
  

    return (<Layout location="dashboard" aside={
        <>
            <CharacterCard character={{
                value: props.value,
                url: props.url,
                id: props.id
            }} />
            <LinkButton href={`/dashboard?name=${props.id}`} title="Dashboard" />
        </>
    }>
        <h1>Test ID: {props.id}</h1>
        <ul>
            <li>Value: {props.value}</li>
            <li>URL: {props.url}</li>
            <li>ID: {props.id}</li>
        </ul>
        {data? 
        JSON.stringify(data)
        :
        "Loading profile"}
    </Layout>);
}

export default Page;