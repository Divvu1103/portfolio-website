import client from "../../lib/client";
import nc from "next-connect";
import axios from "axios";
import { data } from "autoprefixer";

export default async function handler( req, res)  {
  const projectId = '3yvwgusg';
  const dataset = 'production';
  const token = process.env.NEXT_PUBLIC_SANITY_TOKEN;
const data =JSON.parse(req.body);
 
  const mutations = {
    mutations: [
      {
        create: {
            _type: "contact",
            name: data.name,
            email: data.email,
            message: data.message,
        },
      },
    ],
  }
  const apiEndpoint = `https://${projectId}.api.sanity.io/v2021-06-07/data/mutate/${dataset}`
  const result = await fetch(apiEndpoint, {
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(mutations),
    method: 'POST',
  })
  const json = await result.json()

  res.status(200).json({ message: 'Added!' })
//   const { data } = await axios.post(
//     `https://${projectId}.api.sanity.io/v2021-06-07/data/mutate/${dataset}`,
//     {mutations: createMutations},
//     {
//       headers: {
//         "Content-type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );
  
};

