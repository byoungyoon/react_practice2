import React from 'react';

function Form({onChange, boardTitle, userId, onCreate}){
    return(
        <div>
            <input
                placeholder="제목을 입력해주세요"
                name="boardTitle"
                value={boardTitle}
                onChange={onChange}
            />
            <input 
                placeholder="사용자를 입력해주세요."
                name="userId"
                value={userId}
                onChange={onChange}
            />
            <button onClick={onCreate}>추가</button>
        </div>
    );
}

export default Form;