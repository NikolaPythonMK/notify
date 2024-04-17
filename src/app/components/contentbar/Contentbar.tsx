import './Contentbar.css';
import React from 'react'
import { GrAdd } from "react-icons/gr";
import { AiOutlineSearch } from "react-icons/ai";

interface ContentBarProps {
  enableAddButton: boolean
}

export const Contentbar = ({ enableAddButton }: ContentBarProps) => {
  return (
    <div className='contentbar-wrapper'>
        <div className='contentbar-container'>
            <div className='upper-part'>
              <p className='category-name'>General</p>
              <div className='search-container'>
                <span>42 Notes</span>
                <div className='search-group'>
                  <input type='text' className='add-input search-input' placeholder='Search notes...'></input>
                  <button type="submit" id="search-button"><AiOutlineSearch /></button>
                </div>
                {enableAddButton ? (<button><GrAdd /> <span>ADD NOTE</span></button>) : (null)}
              </div>
              <div className='tabs'>
                <span className='selected-tab'>All</span>
                <span>Favorites</span>
              </div>
            </div>

            <ul className='pages'>
              <li>
                <div className='row-1'>
                  <div className='page-color-title'>
                  <span className='color'></span>
                    <p className='category-name-card'>General</p>             
                  </div>
                  <div className='page-date'>
                    <p>01/04/2020</p>
                  </div>
                </div>
                <div className='row-2'>
                  <p className='title'>Lorem Ipsum</p>
                  <p className='short-content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, consequatur...</p>
                </div>
              </li>
              <li>
                <div className='row-1'>
                  <div className='page-color-title'>
                  <span className='color' style={{backgroundColor: '#00ff00'}}></span>
                    <p className='category-name-card'>General</p>             
                  </div>
                  <div className='page-date'>
                    <p>01/04/2020</p>
                  </div>
                </div>
                <div className='row-2'>
                  <p className='title'>Lorem Ipsum</p>
                  <p className='short-content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, consequatur...</p>
                </div>
              </li>
              <li>
                <div className='row-1'>
                  <div className='page-color-title'>
                  <span className='color' style={{backgroundColor: '#ffa500'}}></span>
                    <p className='category-name-card'>General</p>             
                  </div>
                  <div className='page-date'>
                    <p>01/04/2020</p>
                  </div>
                </div>
                <div className='row-2'>
                  <p className='title'>Lorem Ipsum</p>
                  <p className='short-content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, consequatur...</p>
                </div>
              </li>
              <li>
                <div className='row-1'>
                  <div className='page-color-title'>
                  <span className='color' style={{backgroundColor: 'red'}}></span>
                    <p className='category-name-card'>General</p>             
                  </div>
                  <div className='page-date'>
                    <p>01/04/2020</p>
                  </div>
                </div>
                <div className='row-2'>
                  <p className='title'>Lorem Ipsum</p>
                  <p className='short-content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, consequatur...</p>
                </div>
              </li>
              <li>
                <div className='row-1'>
                  <div className='page-color-title'>
                  <span className='color'></span>
                    <p className='category-name-card'>General</p>             
                  </div>
                  <div className='page-date'>
                    <p>01/04/2020</p>
                  </div>
                </div>
                <div className='row-2'>
                  <p className='title'>Lorem Ipsum</p>
                  <p className='short-content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, consequatur...</p>
                </div>
              </li>
              <li>
                <div className='row-1'>
                  <div className='page-color-title'>
                  <span className='color' style={{backgroundColor: 'red'}}></span>
                    <p className='category-name-card'>General</p>             
                  </div>
                  <div className='page-date'>
                    <p>01/04/2020</p>
                  </div>
                </div>
                <div className='row-2'>
                  <p className='title'>Lorem Ipsum</p>
                  <p className='short-content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, consequatur...</p>
                </div>
              </li>
            </ul>
        </div>
    </div>
  )
}
