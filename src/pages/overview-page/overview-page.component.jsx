import React from 'react';
import SearchBar from '../../components/search-bar/search-bar.component';
import OverviewContent from '../../components/overview-content/overview-content.component';
import OverviewRecommendCollection from '../../components/overview-recommend-collection/overview-recommend-collection.component';
const FirstPage = () => {
  return (
    <div>
      <SearchBar />
      <OverviewContent />
      <OverviewRecommendCollection />
    </div>
  );
};

export default FirstPage;
