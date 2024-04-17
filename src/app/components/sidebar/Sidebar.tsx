"use client"
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { gql } from "@apollo/client"; 
import './Sidebar.css';
import React from 'react'
import { BsTrash } from "react-icons/bs";
import { GrNotes } from "react-icons/gr";
import { GrAdd } from "react-icons/gr";
import { IoSettingsSharp } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { useRouter } from "next/navigation"

interface SidebarProps {
    onTrashClick: () => void
}

export const Sidebar = ({ onTrashClick } : SidebarProps) => {

    const router = useRouter();
 // const { data } = useSuspenseQuery();

 function handleOnTrashClick(){
    onTrashClick();
    router.push('/sasd');
 }

  return (
    <div className='sidebar-wrapper'>  
    <div className='sidebar-container'>
        <div className='upper-section'>
            <div className='upper-section-element'>
                <GrNotes />
                <span>All Notes</span>
            </div>
            <div className='upper-section-element' onClick={handleOnTrashClick}>
                <BsTrash />
                <span>Trash</span>
            </div>
        </div>
        <div className='middle-section'>
            <div className='add-category-container'>
                <span className='bold-el'>CATEGORIES</span>
                <GrAdd />
            </div>
            <ul className='categories'>
                <li><span>Business</span><span>23</span></li>
                <li><span>Design</span><span>17</span></li>
                <li><span>General</span><span>42</span></li>
                <li><span>Journal</span><span>16</span></li>
                <li><span>Programming</span><span>35</span></li>
            </ul>
        </div>
        <div className='bottom-section'>
            <div className='bottom-section-element'>
                <span className='bold-el'>COLORS</span>
                <GrAdd />
            </div>
        </div>
    </div>
    </div>
  )
}
