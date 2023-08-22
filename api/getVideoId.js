// api/getVideoId.js

// This function will be responsible for fetching and returning the video ID
const getVideoId = (req, res) => {
  // Replace this with your logic to fetch the video ID from your data source
  // const videoId = 'hrnT2IFqyro'; // Not working in Saudia
  const videoId = 'xZtG7Bn2B5c';
  // const videoId = null; // testing fallback (pass)
  res.json({ videoId });
};

export default getVideoId;
