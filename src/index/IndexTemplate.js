import React from 'react';  

function IndexTemplate({children, form}){
    return(
        <main className="board-template">
            <div className="title">
                boardList
            </div>
            <div class="form-wrapper">
                {form}
            </div>
            <div class="board-wrapper">
                {children}
            </div>
        </main>
    );
}

export default IndexTemplate;