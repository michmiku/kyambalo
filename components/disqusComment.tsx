import { DiscussionEmbed } from "disqus-react";
const DisqusComments = ({ post }) => {
  const disqusShortname = "your-disqus-shortname";
  const disqusConfig = {
    url: `https://kyambalo.com/blog/${post.slug}`,
    identifier: post.slug, // Single post id
    title: post.slug, // Single post title
  };
  return (
    <div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};
export default DisqusComments;
