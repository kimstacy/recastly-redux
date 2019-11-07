import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import thunk from 'redux-thunk';

var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
  return (dispatch) => {
    var params = {
      key: YOUTUBE_API_KEY,
      query: q
    };

    searchYouTube(params, (videos) => {
      // dispatch actions to the store
      dispatch(changeVideoList(videos));
      dispatch(changeVideo(videos[0]));
    });

  };
};

export default handleVideoSearch;
