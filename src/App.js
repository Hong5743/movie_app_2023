import React from 'react';
import PropTypes from 'prop-types';

function Movie({ name, picture, rating }) {
  // { fav } = props;
  return (
  <div>
    <h2>I love {name} movie</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name}/>
  </div>
  )
}

Movie.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

const movieLike = [
  {
    id: 1,
    name: 'horror',
    image: 'https://file.mk.co.kr/meet/neds/2023/08/image_readtop_2023_642055_16927752025596352.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'action',
    image: 'https://mblogthumb-phinf.pstatic.net/20160928_265/kkk10aaa10_1475072214030e2br2_JPEG/%BF%F8%C3%DF1-1.jpg?type=w800',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'comedy',
    image: 'https://image.tving.com/upload/cms/caim/CAIM2100/M000369853.jpeg/dims/resize/F_webp,480',
    rating: 4.9,
  }
];

function renderMovie(list) {
  return <Movie key={list.id} name={list.name} picture={list.image} rating={list.rating}/>;
}

function App() {
  console.log(movieLike.map(renderMovie));
  return (
    <div>
      {movieLike.map(renderMovie)}
      {/* <h1>Hello</h1> */}
      {/* <Movie fav="horror" />
      <Movie fav="action" />
      <Movie fav="comedy" /> */}
    </div>
  );
}

export default App;
