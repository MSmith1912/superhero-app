import React from 'react';
import styled from 'styled-components';

const HeroItemContainer = styled.div`
    background: #fff;
    border-radius: 8px;
    
    margin-top: 8px;
    padding: 16px;
    position: relative;
    box-shadow: 0 4px 8px grey;
`;

const HeroItemContainerWithWarning = styled(HeroItemContainer)`
    border-bottom: ${props => (new Date(props.createdAt) > new Date(Date.now() - 864000 * 5)
    ? 'none'
    : '2px Solid red')};
`;

const ButtonContainer = styled.div`
    position: absolute;
    right: 12px;
    bottom: 12px;
`;

const Button = styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    display: inline-block;
`;

const ActiveButton = styled(Button)`
    background-color: #22ee22;
`;

const RemoveButton = styled(Button)`
    background-color: #ee2222;
    margin-left: 8px;
`;

const TodoListItem = ({ hero, onRemovePressed, onActivePressed }) => {
    const Container = hero.isActive ? HeroItemContainer : HeroItemContainerWithWarning;
    return (
    <Container createdAt={hero.createdAt}>
        <h3>{hero.text}</h3>
        <p>
            Created at:&nbsp;
            {(new Date(hero.createdAt)).toLocaleDateString()}
        </p>
        <ButtonContainer>
            {hero.isActive
                ? null
                : <ActiveButton
                    onClick={() => onActivePressed(hero.id)}
                    className="active-button">Mark As Active</ActiveButton>}
            <RemoveButton
                onClick={() => onRemovePressed(hero.id)}
                className="remove-button">Remove</RemoveButton>
        </ButtonContainer>
    </Container>
);
}

export default TodoListItem;