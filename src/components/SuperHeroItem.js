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

const SuperHeroItem = ({ supers, onRemovePressed, onActivePressed }) => {
    const Container = supers.isActive ? HeroItemContainer : HeroItemContainerWithWarning;
    return (
    <Container createdAt={supers.createdAt}>
        <h3>{supers.text}</h3>
        <p>
            Created at:&nbsp;
            {(new Date(supers.createdAt)).toLocaleDateString()}
        </p>
        <p>Species: {supers.species}</p>
        <p>Powers: {supers.powers}</p>
        <p>Power Level: {supers.powerLevel}</p>
        <ButtonContainer>
            {supers.isActive
                ? null
                : <ActiveButton
                    onClick={() => onActivePressed(supers.id)}
                    className="active-button">Mark As Active</ActiveButton>}
            <RemoveButton
                onClick={() => onRemovePressed(supers.id)}
                className="remove-button">Remove</RemoveButton>
        </ButtonContainer>
    </Container>
);
}

export default SuperHeroItem;