//Todo : 투두리스트의 레이아웃을 설정하는 컴포넌트로, 페이지 중앙에 그림자가 적용된 흰색 박스를 보여준다.

import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
width : 900px;
height: 920px;
position: relative;
background: #f5f5f555;
border-radius: 16px;
box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
margin:  0 auto;
margin-top : 200px;
margin-bottom: 32px;
display: flex;
flex-direction: column;
`

const TodoTemplate = ({children}) => {
    return (
        <div>
            <TodoTemplateBlock>{children}</TodoTemplateBlock>
        </div>
    );
};

export default TodoTemplate;
