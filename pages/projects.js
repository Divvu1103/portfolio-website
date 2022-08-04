import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import Projects from "../components/Projects";

import { client } from '../lib/client';

export default function projects({projects}) {
  // console.log(projects)
  return (
    <ContainerBlock title="Projects">
      <Projects projects={projects}/>
    </ContainerBlock>
  );

}
export const getServerSideProps = async () => {
  const query = '*[_type == "project"]';
  const projects = await client.fetch(query);

  

  return {
    props: { projects }
  }
}
