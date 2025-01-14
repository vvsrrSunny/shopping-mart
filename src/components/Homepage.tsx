import React from 'react';

interface HomepageProps {
  title: string;
}

const Homepage: React.FC<HomepageProps> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default Homepage;