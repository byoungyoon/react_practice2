import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App(){
  const [board, setBoard] = useState({
    test: '123',
    boardList: [{boardNo: 1}]
  });

  const {test, boardList} = board;
  
  useEffect(() => {
    axios.get('/board/index').then((data) => {
        if(data.status == 200){
          console.log(data.data); 
        }

    }); 
  }, [])

  return(
    <div>
      <h1>test</h1>
      <p></p>
    </div>
  );
}

export default App;
