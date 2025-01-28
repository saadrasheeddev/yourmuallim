// api/getVideoId.js

// This function will be responsible for fetching and returning the video ID
const getVideoId = (req, res) => {
  // Replace this with your logic to fetch the video ID from your data source
  // const videoId = 'BXx8rzklFBY'; // Not working in Saudia
  const videoId = 'K5xvuvRQkBs';
  // const videoId = null; // testing fallback (pass)
  res.json({ videoId });
};

export default getVideoId;
