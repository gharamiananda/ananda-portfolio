import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import Project from "@/models/Project";
import { v2 as cloudinary } from 'cloudinary';


cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

export async function POST(request: Request) {
    await dbConnect();

   
    const projects = await Project.find();

    


    return NextResponse.json({ projects});
}



export async function PUT(request: Request) {
    await dbConnect();


    const accessToken = request.headers.get("AccessToken");

    if (!accessToken) {
        return NextResponse.json({ message: "AccessToken is missing" }, { status: 401 });
    }


    const { id,imageBase64,...restRequestInfo } = await request.json();

    const project:Record<string, string>=restRequestInfo;
    try {

        let imageUrl = null;
        
        // Check if there's a new image to upload
        if (imageBase64) {
            const uploadResponse = await cloudinary.uploader.upload(imageBase64, {
                folder: 'projects', // adjust folder as needed
            });
            imageUrl = uploadResponse.secure_url;
            
        }
if(!!imageUrl){
    project.src = imageUrl;

}
        const updatedProject = await Project.findByIdAndUpdate(id,project);

        if (!updatedProject) {
            return NextResponse.json({ message: "Project not found" }, { status: 404 });
        }


    //   const updatedProject =   await project.upda();

        return NextResponse.json({ message: "Project updated successfully", project :updatedProject});
    } catch (error:any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}