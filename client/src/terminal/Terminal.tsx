import React, {useState} from 'react';
import './terminal.css';
import { BsSearch } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import '../shared/palette.css';
import '../shared/common/common.css';
import { debug, time } from 'console';
import { debuglog } from 'util';

function Terminal(props: any) {

 

  function handleSign() {
    console.log('sign');
    props.signupin();
  }

  return (
    <div className={props.value ? 'terminal dark mini' : 'terminal dark'}>

      <div className='terminal-header'>

        <div className='testlet'>testlet</div>

        <div className='fill-horizontal'></div>

        <div className='search'>
          <input
            type="text"
            id="header-search"
            placeholder="Search tests, quizzes, etc "
            name=""
          />
          <button><BsSearch /></button>
        </div>

        <div className='spacer-50'></div>

        <div className="signuporin">
          <button className='signin' >
            sign in
          </button>
          <button className='signup creme' onClick={event => handleSign()}>
            sign up
          </button>
        </div>
      </div>


    </div>
  );
}

export default Terminal;