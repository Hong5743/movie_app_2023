import React from 'react';

function Movie({ name, picture }) {
  // { fav } = props;
  return (
  <div>
    <h2>I love { name } movie</h2>
    <img src={picture}/>
  </div>
  )
}

const movieLike = [
  {
    id: 1,
    name: 'horror',
    image: 'https://file.mk.co.kr/meet/neds/2023/08/image_readtop_2023_642055_16927752025596352.jpg',
  },
  {
    id: 2,
    name: 'action',
    image: 'https://mblogthumb-phinf.pstatic.net/20160928_265/kkk10aaa10_1475072214030e2br2_JPEG/%BF%F8%C3%DF1-1.jpg?type=w800',
  },
  {
    id: 3,
    name: 'comedy',
    image: 'https://image.tving.com/upload/cms/caim/CAIM2100/M000369853.jpeg/dims/resize/F_webp,480',
  }
];

function renderMovie(list) {
  return <Movie key={list.id} name={list.name} picture={list.image}/>;
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
