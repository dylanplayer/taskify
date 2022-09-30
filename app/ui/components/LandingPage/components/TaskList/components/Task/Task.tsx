import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

import './Task.module.css';

interface Props {
  title: string;
}

export default function Task({ title }: Props) {
  return (
    <div className='Task'>
      <div className='TaskTitleContainer'>
        <p className='TaskTitle'>{title}</p>
      </div>
      <div className='TaskButtonContainer'>
        <button className='TaskButton'>
          <FaRegTrashAlt
            color='#E0E0E0'
            size={15}
          />
        </button>
      </div>
    </div>
  );
}
