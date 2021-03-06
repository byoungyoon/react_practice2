import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Board from './index/Board';
import Form from './index/Form';
import IndexTemplate from './index/IndexTemplate';

function App(){
  const [board, setBoard] = useState({
    lastPage: 1,
    boardList: []
  });

  const [limitPage, setLimitPage] = useState(11);
  const [boardList, setBoardList] = useState([]);
  const [inputs, setInputs] = useState({
    boardTitle: '',
    userId: ''
  });

  const {boardTitle, userId} = inputs;
  
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
          setBoardList(board.boardList);
        }
      }); 
  }, [])

  const handleClick = () =>{
    setLimitPage(limitPage + 10);
    setBoardList(board.boardList.slice(0, limitPage));
  }

  const handleChange = (e) => {
    const {value, name} = e.target;
    setInputs({
      ...inputs,
      [name] : value
    })
  }

  const handleCreate = () => {
    const formData = new FormData();
    formData.append("boardTitle", boardTitle);
    formData.append("userId", userId);
    axios({
      url: '/board/addBoard',
      method: 'POST',
      data: formData
    }).then((data) => {
        if(data.status === 200){
          setBoardList(
            boardList.concat({
              boardTitle: boardTitle,
              userId: userId,
            })
          );

          setInputs({
            boardTitle: '',
            userId: ''
          });
          alert('입력하신 데이터가 추가 되었습니다.');
        }
    });
  }

  const handleRemove = (boardNo) => {
    axios({
      url: '/board/removeBoard/' + boardNo,
      method: 'GET',
    }).then((data) => {
        if(data.status === 200){
          setBoardList(boardList.filter(data => data.boardNo !== boardNo));
        }
      }); 
  }

  return(
    <div>
      <IndexTemplate form={
        <Form 
          onChange={handleChange}
          boardTitle={boardTitle}
          userId={userId}
          onCreate={handleCreate}
        />
      }>
        <Board 
          boardList={boardList}
          onClick={handleClick}
          onRemove={handleRemove}
        />
      </IndexTemplate>
    </div>
  );
}

export default App;
