// // pages/api/skills.ts
// import dbConnect from '@/lib/dbConnect';
// import type { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     await dbConnect();

//     if (req.method === 'POST') {
//         const { name } = req.body;

//         const skill = new Skills({
//             name,
//         });

//         await skill.save();
//         res.status(201).json(skill);
//     } else {
//         res.status(405).json({ message: 'Method not allowed' });
//     }
// }
