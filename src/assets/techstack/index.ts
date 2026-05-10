
import C from './C.svg';
import CS from './CS.svg';
import CSS from './CSS.svg';
import GithubLight from './Github-Light.svg';
import HTML from './HTML.svg';
import NotionLight from './Notion-Light.svg';
import VercelLight from './Vercel-Light.svg';

export const techStackIcons = {
  C,
  CS,
  CSS,
  HTML,
  GithubLight,
  NotionLight,
  VercelLight,
};

export const techStackArray = Object.entries(techStackIcons).map(([name, icon]) => ({
  name,
  icon,
}));

export default techStackIcons;