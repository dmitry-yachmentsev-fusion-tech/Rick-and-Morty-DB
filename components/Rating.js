import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Star } from './icons/Star';
import { setRating } from '../redux/feedback/reducer';

const RateWrapper = styled.div`
  max-width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledRate = styled.button`
`

const initialRates = [
  {
    index: 1,
    selected: false,
  },
  {
    index: 2,
    selected: false,
  },
  {
    index: 3,
    selected: false,
  },
  {
    index: 4,
    selected: false,
  },
  {
    index: 5,
    selected: false,
  },
]

const Rating = () => {
  const dispatch = useDispatch();
  const { feedback } = useSelector(state => state);
  const [rates, setRates] = useState(initialRates);

  const selectRate = (index) => {
    const selectedRate = rates.find(rate => rate.selected && rate.index === index);
    let initialRates = rates.map(item => {
      const rate = { ...item };
      rate.selected = false;
      return rate;
    });

    if (selectedRate?.index === feedback.rating) {
      setRates(initialRates);
      dispatch(setRating(0));
      return;
    } else if (!selectedRate) {
      initialRates = [...rates];
    };

    const formattedRates = initialRates.map(item => {
      const rate = { ... item };
      rate.selected = rate.index <= index;
      return rate;
    })
    dispatch(setRating(index));
    setRates(formattedRates);
  }

  return (
    <RateWrapper>
      {rates.map(({ index, selected }) => {
        return (
            <StyledRate
              key={index}
              onClick={() => selectRate(index)}
            >
              <Star fill={selected ? "gold" : "white"} stroke={selected ? "gold" : "black"} />
            </StyledRate>
        )
      })}
    </RateWrapper>
  )
};

export default Rating;