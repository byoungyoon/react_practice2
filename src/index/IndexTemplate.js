import React from 'react';  

function IndexTemplate({children}){
    return(
        <main className="board-template">
            <div className="title">
                boardList
            </div>
            <div class="form-wrapper">

            </div>
            <div class="board-wrapper">
                {children}
            </div>
        </main>
    );
}

export default IndexTemplate;