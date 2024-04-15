import { Contentbar } from "./components/contentbar/Contentbar";
import { PageContent } from "./components/pageContent/PageContent";
import { Sidebar } from "./components/sidebar/Sidebar";
import './page.css';
import client from '../../apollo-client';
import gql from '@apollo/client'


export default function Home() {
  return (
    <div className="wrapper">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content-bar">
          <Contentbar />
        </div>
        <div className="content">
          <PageContent />
        </div>
    </div>
  );
}
