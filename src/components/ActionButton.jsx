import React, { useState } from 'react';
import { Plus } from '@styled-icons/bootstrap/Plus';
import TextArea from 'react-textarea-autosize';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

const ActionButton = (props) => {
  const [formOpen, setFormOpen] = useState(false);
  const [formText, setFormText] = useState('');

  const { column } = props;

  const handleInputForm = (e) => {
    setFormText(e.target.value);
  };

  const renderAddButton = () => {
    const buttonText = column ? 'Add column' : 'Add a note to this column';
    const buttonTextOp = column ? 1 : 0.5;

    return (
      <ButtonContainer
        onClick={() => setFormOpen(true)}
        style={{ opacity: buttonTextOp }}
      >
        <PlusIcon>Add</PlusIcon>
        <p>{buttonText}</p>
      </ButtonContainer>
    );
  };

  const renderForm = () => {
    const placeholder = column ? 'Enter a column name' : 'Enter a note';
    const buttonTitle = column ? 'Create column' : 'Add';

    return (
      <FlexContainer>
        <AddForm>
          <TextArea
            placeholder={placeholder}
            autoFocus
            onBlur={() => setFormOpen(false)}
            value={formText}
            onChange={(e) => handleInputForm(e)}
            style={{
              resize: 'none',
              width: '100%',
              outline: 'none',
              border: 'none',
              boxShadow:
                'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
            }}
            minRows={4}
          />
        </AddForm>
        <Buttongroup>
          <Button
            variant="contained"
            size="small"
            disableElevation
            style={{ backgroundColor: '#2DA54E', color: '#fff' }}
          >
            {buttonTitle}
          </Button>
          <Button variant="outlined" size="small" disableElevation>
            Cancel
          </Button>
        </Buttongroup>
      </FlexContainer>
    );
  };

  return formOpen ? renderForm() : renderAddButton();
};

export default ActionButton;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 2px;
  height: 36px;
  min-width: 285px;
  margin: 8px;
  :hover {
    background-color: #dbdbdb;
  }
`;

const PlusIcon = styled(Plus)`
  width: 30px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const AddForm = styled.div`
  padding: 6px;
  margin-bottom: 8px;
`;

const Buttongroup = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 285px;

  button {
    font-size: 0.7rem;
    width: 46%;
  }
`;
