import React from 'react';

function Products() {
  return <div className='homediv'>
      <h2>Products List</h2>
      {[...Array(10)].map((elementInArray, index) => {
    console.log(index)
    return (<div key={index} className='banner' > 
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4mPh1wCHM1LxdHHTQqTk_JP7HWhJJL20dgQ&usqp=CAU'></img> 
    </div> );
  })
  }
  </div>;
}

export default Products;
