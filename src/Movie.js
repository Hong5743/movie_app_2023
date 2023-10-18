import React from "react";
import PropTypes from 'prop-types';

function Movie({ rank, openDt, movieNm, audiCnt, audiInten, audiChange, audiAcc}) {
  return <h4>{movieNm}</h4>;
}

Movie.propTypes = { 
  rank: PropTypes.string.isRequired,
  openDt: PropTypes.string.isRequired, //영화의 개봉일을 출력합니다.
  movieNm: PropTypes.string.isRequired,
  audiCnt: PropTypes.string.isRequired, //해당일의 관객수
  audiInten: PropTypes.string.isRequired, //전일 대비 관객수 증감 비율을 출력합니다.
  audiChange: PropTypes.string.isRequired, //전일 대비 관객수 증감 비율을 출력합니다.
  audiAcc: PropTypes.string.isRequired, //누적 관객수를 출력합니다.
};

export default Movie;