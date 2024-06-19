import React from "react";
import Layout from "../components/Layout";
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
    return (<Layout>
        <h1>Test ID: {props.id}</h1>
    <div className='grid-container'>
        <CharacterCard character={{
            value: props.value,
            url: props.url,
            id: props.id
        }} />
    </div>
    <a href="/derp">Back to derp page</a>
    </Layout>);
}

export default Page;