import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Board from './index/Board';
import IndexTemplate from './index/IndexTemplate';

function App(){
  const [board, setBoard] = useState({
    lastPage: 1,
    boardList: []
  });

  const [limitPage, setLimitPage] = useState(11);
  const [boardList, setBoardList] = useState([]);
  
  useEffect(() => {
    axios({
      url: '/board/index/' + limitPage,
      method: 'GET',
    }).then((data) => {
        if(data.status === 200){
          setBoard({
            lastPage: data.data.lastPage,
            boardList: data.data.boardList
          });
        }
    }); 

    setBoardList(board.boardList.filter(data => data.boardNo < limitPage));
  }, [])

  const handleClick = () =>{
    setLimitPage(limitPage => limitPage + 10);
    setBoardList(board.boardList.filter(data => data.boardNo < limitPage));
  }

  return(
    <div>
      <IndexTemplate>
        <Board 
          boardList={boardList}
          onClick={handleClick}
        />
      </IndexTemplate>
    </div>
  );
}

export default App;
