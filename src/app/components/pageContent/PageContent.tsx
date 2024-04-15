import './PageContent.css';
import { BsFillTrashFill } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import { BsFillShareFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { AiFillInfoCircle } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

import React from 'react'
export const PageContent = () => {
  return (
    <div className='page-wrapper'>
      <div className='page-container'>
        <div className='header'>
          <p>Last edited: 15h ago</p>
          <div>
          <AiOutlineStar />
        <BsFillTrashFill />
        <AiFillEdit />
        <FiDownload />
        <BsFillShareFill />
        <AiFillInfoCircle />
          </div>
        </div>
        <div className='col-1'>
          <span className='circle'></span><p className='page-title'>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className='col-2'>
          <p className='page-content'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat minima tenetur repellendus enim voluptatem voluptatibus quo, natus pariatur voluptate nemo cupiditate doloribus assumenda et excepturi commodi temporibus illum beatae debitis. Corrupti dolorem vel laboriosam similique cumque, nesciunt numquam rerum. <br /> <br />Voluptatum dignissimos commodi iure dolor numquam blanditiis exercitationem laborum nesciunt animi molestiae. Ratione, fugit. Iste modi voluptatem labore! Eligendi accusamus nam necessitatibus et eius? Earum, eius itaque. Doloremque aliquam, itaque illo sed consequatur ipsa minus architecto quam velit corrupti animi eius hic dicta dolorum deserunt ipsam, excepturi adipisci magni suscipit est tenetur. Culpa consequatur rem perspiciatis eos expedita obcaecati aliquam reprehenderit fugiat maxime neque! Temporibus, quaerat at explicabo cumque qui inventore repudiandae maxime deleniti velit voluptas, consequuntur est, quis dignissimos accusamus sed commodi aut! Iure, beatae eaque. Perferendis assumenda illo possimus maxime, voluptate libero repudiandae doloremque debitis consequatur eum cum aperiam commodi veniam at quibusdam nisi quasi est culpa. Eligendi facere rerum nobis, ducimus cupiditate molestias voluptatibus dolor accusamus unde, pariatur asperiores. Doloribus nostrum velit et expedita quas in est, aliquid, adipisci aspernatur consectetur commodi possimus itaque dignissimos numquam dolorem perspiciatis, beatae dolor quia illum repudiandae mollitia? Optio maiores, hic rerum rem ab quasi adipisci sed dolorem alias quidem laboriosam nemo.</p>
        </div>
      </div>
    </div>
  )
}
