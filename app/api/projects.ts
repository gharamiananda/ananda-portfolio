// pages/api/projects.ts
import dbConnect from '@/lib/dbConnect';
import Project from '@/models/Project';
import type { NextApiRequest, NextApiResponse } from 'next';
export  async function postProjectsHandler(req: NextApiRequest, res: NextApiResponse) {
    await dbConnect();

    if (req.method === 'POST') {
        const { name, description, skills } = req.body;

        const project = new Project({
            name,
            description,
            skills,
        });

        await project.save();
        res.status(201).json(project);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}

export  async function getProjectsHandler(req: NextApiRequest, res: NextApiResponse) {
    await dbConnect();

    if (req.method === 'GET') {
        const projects = await Project.find({});
        res.status(200).json(projects);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}