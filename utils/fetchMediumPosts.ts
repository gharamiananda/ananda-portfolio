import Parser from 'rss-parser';

const MEDIUM_RSS_URL = 'https://medium.com/feed/@anandagharami';

export const fetchMediumPosts = async () => {
  const parser = new Parser();
  const response = await fetch(MEDIUM_RSS_URL, {
    headers: {
      'Cache-Control': 'no-cache',
    },
  });
  const feed = await response.text();
  const parsedFeed = await parser.parseString(feed);
  return parsedFeed.items;
};
