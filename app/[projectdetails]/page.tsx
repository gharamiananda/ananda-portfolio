import Image from 'next/image';
import React from 'react';

const projects=[
  {
    src: "/blloddonation.png",
    title: "Blood Donation System",
    slug:"blood-donation-system",
    technologiesUsed:['Html', 'Css','Typescript','Nextjs','Redux toolkit'],
    description:
      "Web app for blood donation system, it is build with nextjs with postgresql database",
  },
  {
    src: "/propertycontroll.png",
    title: "property control",
    slug:"propertycontrol",
    technologiesUsed:['Html', 'Css','Typescript','Nextjs','Redux toolkit'],


    description:
      "It is web app for properties management, here 4 role, owner, tenenant, manager, worker,",
  },
  {
    src: "/hrms.png",
    title: "hrms -employee management website",
    slug:"hrms-employee-management",
    technologiesUsed:['Html', 'Css','Typescript','Nextjs','Redux toolkit'],

    description:
      "It is web app for employee management, employee esi, epf salary deduction all are calculated here, emplye employee leave calculation",
  },
  {
    src: "/knighthunt.png",
    title: "knighthunt - Ecommerce website",
    slug:"ecommerce-website-techwens",
    technologiesUsed:['Html', 'Css','Typescript','Nextjs','Redux toolkit'],

    description:
      "It is a ecommerce website for mainly Tshirts, it is build with nextjs with typescript with postgresql database",
  },
  {
    src: "/techwenssite.png",
    title: "Techwens Website",
    slug:"techwens-website",
    technologiesUsed:['Html', 'Css','Typescript','Nextjs','Redux toolkit'],

    description:
      "COmpany website for tech wens, it is build with nextjs with postgresql database",
  },
]

const ProjectDetailspage = ({ params }: { params: { projectdetails: string } }) => {

  const findProject=projects.find(it=>it.slug===params.projectdetails);

    return (
        <><section className="text-white my-20" id="about"><div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">


         {findProject?.src ? <Image  alt='fghjkl' width={500} height={500}  style={{ color: 'transparent' }}  src={findProject?.src} />
         
        : 
        <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M18.435 7.546A2.32 2.32 0 0 1 17.7 5.77a3.354 3.354 0 0 0-3.47-3.47 2.322 2.322 0 0 1-1.776-.736 3.357 3.357 0 0 0-4.907 0 2.281 2.281 0 0 1-1.776.736 3.414 3.414 0 0 0-2.489.981 3.372 3.372 0 0 0-.982 2.49 2.319 2.319 0 0 1-.736 1.775 3.36 3.36 0 0 0 0 4.908A2.317 2.317 0 0 1 2.3 14.23a3.356 3.356 0 0 0 3.47 3.47 2.318 2.318 0 0 1 1.777.737 3.36 3.36 0 0 0 4.907 0 2.36 2.36 0 0 1 1.776-.737 3.356 3.356 0 0 0 3.469-3.47 2.319 2.319 0 0 1 .736-1.775 3.359 3.359 0 0 0 0-4.908ZM8.5 5.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm3 9.063a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm2.207-6.856-6 6a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 1.414Z"/>
    </svg>
        }
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full"><h2 className="text-4xl font-bold text-white mb-4">About Project</h2><p className="text-base lg:text-lg">{findProject?.description}</p>
        
      <div className="flex gap-4 my-4">    

                 {(findProject?.technologiesUsed ||[]).map(it=>(

                   <kbd key={it} className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">{it}</kbd>
                   
                  ))
                   }
      </div>


        </div>
        </div>
        </section>
        </>
    )
}

export default ProjectDetailspage