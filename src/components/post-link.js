import React from "react"
import { Link } from "gatsby"
const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.path}>
      <div>
        <p>
          {post.frontmatter.title} ({post.frontmatter.date})
        </p>
        <p>{post.excerpt}</p>
      </div>
    </Link>
  </div>
)

export default PostLink
