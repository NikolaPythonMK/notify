"use client"
import { Contentbar } from "../components/contentbar/Contentbar";
import { PageContent } from "../components/pageContent/PageContent";
import { Sidebar } from "../components/sidebar/Sidebar";
import '../page.css';
import client from '../../../apollo-client';
import gql from '@apollo/client'
import { useState } from "react";


export default function Home() {

  const [trashButtonClick, setTrashButtonClick] = useState<boolean>(false);

  function handleOnTrashClick(){ 
    setTrashButtonClick(!trashButtonClick);
  }


  return (
    <div className="wrapper">
        <div className="sidebar">
          <Sidebar  onTrashClick={handleOnTrashClick} />
        </div>
        <div className="content-bar">
          <Contentbar enableAddButton={!trashButtonClick} />
        </div>
        <div className="content">
          <PageContent />
        </div>
    </div>
  );
}
