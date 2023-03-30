import React from 'react';
import PropTypes from 'prop-types';
import { Button, DivBtns } from './FeedbackOptions.styled';

const FeedbackOptions = ({ onClickGood, onClickNeutral, onClickBad }) => {
  return (
    <DivBtns className="btns">
      <Button type="button" onClick={onClickGood}>
        Good
      </Button>
      <Button type="button" onClick={onClickNeutral}>
        Neutral
      </Button>
      <Button type="button" onClick={onClickBad}>
        Bad
      </Button>
    </DivBtns>
  );
};

FeedbackOptions.propTypes = {
  onClickGood: PropTypes.func.isRequired,
  onClickNeutral: PropTypes.func.isRequired,
  onClickBad: PropTypes.func.isRequired,
};

export default FeedbackOptions;