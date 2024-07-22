import React from 'react';

interface FacebookVideoEmbedProps {
  embedCode: string;
}

const FacebookVideoEmbed: React.FC<FacebookVideoEmbedProps> = ({ embedCode }) => {
  return (
    <div
      className="facebook-video-embed"
      dangerouslySetInnerHTML={{ __html: embedCode }}
    />
  );
};

export default FacebookVideoEmbed;
