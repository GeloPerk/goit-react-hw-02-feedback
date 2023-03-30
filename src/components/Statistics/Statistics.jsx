import React from 'react';
import PropTypes from 'prop-types';
import { Stats, Value } from './Statistics.styled';

const Statistics = ({good, neutral, bad, total, positiveFeedback}) => {
  return (
    <div>
      <Stats>Good: <Value>{good}</Value></Stats>
      <Stats>Netural: <Value>{neutral}</Value></Stats>
      <Stats>Bad: <Value>{bad}</Value></Stats>
      <Stats>Total: <Value>{total}</Value></Stats>
      <Stats>Positive feedback: <Value>{positiveFeedback}</Value></Stats>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])
}

export default Statistics;