import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App(){
  const [board, setBoard] = useState([]);

  const {test, boardList} = board;
  
  useEffect(() => {
    axios.get('/board/index').then((data) => {
        if(data.status == 200){
          setBoard(data.data);
        }

    }); 
  }, [])

  return(
    <div>
      <h1>test</h1>
        <table>
          <thead>
            <tr>
              <th>boardNo</th>
              <th>boardTitle</th>
              <th>userId</th>
              <th>boardCount</th>
              <th>createDate</th>
            </tr>
          </thead>
          <tbody>
            {
              board.map((data) => (
                <tr key={data.boardNo}>
                  <td>{data.boardNo}</td>
                  <td>{data.boardTitle}</td>
                  <td>{data.userId}</td>
                  <td>{data.boardCount}</td>
                  <td>{data.createDate}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
    </div>
  );
}

export default App;
