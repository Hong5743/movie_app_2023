import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    try {
      const {
        data: {
          boxOfficeResult: {
            dailyBoxOfficeList
          },
        },
      } = await axios.get('http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101');
      
      this.setState({ movies: dailyBoxOfficeList, isLoading: false }); // movies를 setState를 통해 정의
  
    } catch (error) {
      console.error('데이터를 가져오는 중 오류 발생: ', error);
    }
  }
  

  componentDidMount() {
    //영화 데이터 로딩!
    this.getMovies();
  }
 
  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading ? 'Loading...' : movies.map((movie) => {
          console.log(movie);
          return( 
          <Movie
            rank={movie.rank}
            openDt={movie.openDt}
            movieNm={movie.movieNm}
            audiCnt={movie.audiCnt}
            audiInten={movie.audiInten}
            audiChange={movie.audiChange}
            audiAcc={movie.audiAcc}
          />
          );
        })}
      </div>
    );
  }
}

export default App;
