"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';
import ProjectRow from './ProjectRow';
import AddNewProject from './AddNewProject';


interface IProject extends Document {
  src: string;
  description: string;
  title: string;
  _id:string
}

const ProjectPage = () => {

    const [showModal, setShowModal] = useState(false);

  const [loading, setLoading] = useState(true);
  const [projectsList, setProjectsList] = useState<IProject[]>([])


    const fetchProjectList = async() =>{

     const token= localStorage.getItem('portfolio_ananda_token');

     if(!token){
      setLoading(false);
      return ;
     }

      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
    });

    setLoading(false)

    if (!response.ok) {
        const errorData = await response.json();
    toast.warning(errorData.message||'Enter value for password or email!')

        return;
    }

    const data = await response.json();
    setProjectsList(data?.projects)
    }


    useEffect(()=>{
      fetchProjectList();
    },[])


  return (
    <>

   <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 w-full">
  <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800 ">
    <div className="flex w-full justify-between">

    <div className="">

            My Projects
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p>
    </div>
    <div className="">
      
      <button onClick={()=>setShowModal(true)} type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Add new</button>
    </div>

    </div>
        </caption>
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Project title
        </th>
        <th scope="col" className="px-6 py-3">
          Project Image
        </th>
        <th scope="col" className="px-6 py-3">
          Project Description
        </th>
      
      
      </tr>
    </thead>
    <tbody>
     {(projectsList||[]).map(it=>(
    <tr key={it?.title} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">

      <ProjectRow  it={it} key={it?._id} fetchProjectList={fetchProjectList}  />
    </tr>

    
     ))

    }
    </tbody>
  </table>
</div>
<AddNewProject  
setShowModal={setShowModal}
showModal={showModal}

/>

</>
  )
}

export default ProjectPage