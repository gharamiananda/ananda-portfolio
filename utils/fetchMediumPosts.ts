import Parser from 'rss-parser';

const MEDIUM_RSS_URL = 'https://medium.com/feed/@anandagharami';

export const fetchMediumPosts = async () => {
  const parser = new Parser();
  const feed = await parser.parseURL(MEDIUM_RSS_URL);
  return feed.items;
};
