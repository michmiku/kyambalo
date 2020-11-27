import { DiscussionEmbed } from "disqus-react";
const DisqusComments = ({ post }) => {
  const disqusShortname = "kyambalo";
  const disqusConfig = {
    url: `https://kyambalo.com/blog/${post !== undefined ? post.slug : null}`,
    identifier: `${post !== undefined ? post.slug : null}`, // Single post id
    title: `${post !== undefined ? post.slug : null}`, // Single post title
  };
  return (
    <div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};
export default DisqusComments;
