import InputField from '@/components/form/InputField';
import Modal from '@/components/modal/Modal';
import { IaddProjectFormInput, addProjectSchema } from '@/utils/validationSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { ReactNode, useState } from 'react'
import { useForm, Controller, SubmitHandler } from "react-hook-form"



interface ModalProps {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
    showModal: boolean
}


const AddNewProject: React.FC<ModalProps> = ({ showModal, setShowModal }) => {
    const handleAddNewProject = (e: any) => {
        e.preventDefault();


    }


    const { control, handleSubmit,formState:{errors} ,} = useForm({
        defaultValues: {
            title: "",
            description: "",
            src:""
        },
        resolver: zodResolver(addProjectSchema),
        mode:"all"

    });


    const onSubmit: SubmitHandler<IaddProjectFormInput> = (data) => {
    }

    return (
        <>




            <Modal show={showModal} onClose={() => setShowModal(false)}>


                <div id="crud-modal" tabIndex={-1} aria-hidden="true" className="fixed inset-0 flex items-center justify-center z-50 overflow-y-auto overflow-x-hidden bg-gray-800 bg-opacity-50">
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Create New Project
                                </h3>
                                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"

                                    onClick={() => { setShowModal(false) }}
                                >
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <form noValidate className="p-4 md:p-5" onSubmit={handleSubmit(onSubmit)}>
                                <div className="grid gap-4 mb-4 grid-cols-2">
                                    <div className="col-span-2">


                                        <Controller
                                            name="title"
                                            control={control}
                                            render={({ field ,formState:{errors},fieldState}) =>{ 

                                                const errMessage= fieldState.error?.message;
                                                const errorClassName= errMessage ? 'red' :'green'
                                            
                                            return <div className="mb-6">

                                               
                                                <label  className={`block mb-2 text-sm font-medium text-green-700 dark:text-${errorClassName}-500`}>Project title</label>
                                                <input {...field} type="text" className={`bg-${errorClassName}-50 border border-${errorClassName}-500 text-${errorClassName}-900 dark:text-${errorClassName}-400 placeholder-${errorClassName}-700 dark:placeholder-${errorClassName}-500 text-sm rounded-lg focus:ring-${errorClassName}-500 focus:border-${errorClassName}-500 block w-full p-2.5 dark:bg-gray-700 dark:border-${errorClassName}-500`} placeholder="Project title" />
                                              {errMessage &&  <p className="mt-2 text-sm text-red-600 dark:text-red-500">{fieldState.error?.message}</p>}
                                            </div>}}
                                        />


                                    </div>


                                    <div className="col-span-2">


                                    <Controller
                                            name="description"
                                            control={control}
                                            render={({ field ,formState:{errors},fieldState}) =>{ 
                                                const errMessage= fieldState.error?.message;
                                                const errorClassName= errMessage ? 'red' :'green'
                                           return <>
                                                 <label htmlFor="description" className={`block mb-2 text-sm font-medium text-gray-900 dark:text-${errorClassName}-500`}>Project Description</label>
                                                 <textarea  {...field}  id="description" rows={4} className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-${errorClassName}-500 focus:border-${errorClassName}-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-${errorClassName}-500 dark:focus:border-${errorClassName}-500`} placeholder="Write product description here" />
                                              {errMessage &&  <p className="mt-2 text-sm text-red-600 dark:text-red-500">{fieldState.error?.message}</p>}

                                            </>}}
                                        />



                                       
                                    </div>

                                    <div className="col-span-2">

                                        <div className="flex items-center justify-center w-full">
                                            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                    </svg>
                                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                                </div>
                                                <input id="dropzone-file" type="file" className="hidden" />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" /></svg>
                                    Add new Project
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <button
                    className="px-4 py-2 bg-red-500 text-white rounded"
                    onClick={() => setShowModal(false)}
                >
                    Close Modal
                </button>
            </Modal>
        </>
    )
}

export default AddNewProject