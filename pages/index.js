import Layout from "../components/Layout";
import Aside from "../components/Aside";
import Welcome from "../components/Welcome";

export default function Home(props) {
  return (<Layout aside={<Aside />}><Welcome /></Layout>)
}
