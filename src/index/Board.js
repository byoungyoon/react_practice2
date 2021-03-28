import React from 'react';

function Board({boardList, onClick}){
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>boardNo</th>
                        <th>boardTitle</th>
                        <th>userId</th>
                        <th>createDate</th>
                        <th>boardCount</th>
                    </tr>
                </thead>
                <tbody>
                {
                    boardList.map((data) => (
                    <tr key={data.boardNo}>
                        <td>{data.boardNo}</td>
                        <td>{data.boardTitle}</td>
                        <td>{data.userId}</td>
                        <td>{data.createDate}</td>
                        <td>{data.boardCount}</td>
                    </tr>
                    ))
                }
                </tbody>
            </table>
            <div>
                <button onClick={onClick}>More</button>
            </div>
        </div>
    ); 
}

export default Board;