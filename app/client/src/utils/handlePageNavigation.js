// navigationUtils.js

import { useHistory } from 'react-router-dom';

const handlePageNavigation = (history, link) => {
  history.push(link);
};

export default handlePageNavigation;
