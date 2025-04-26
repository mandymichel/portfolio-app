import React, { useEffect, useState } from "react"
import { marked } from "marked"

const BlogPage = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          "https://7sfn2pqx07.execute-api.us-east-1.amazonaws.com/posts"
        )
        const data = await res.json()

        // Fetch and render each blog markdown
        const markdowns = await Promise.all(
          data?.map(async (post) => {
            const resp = await fetch(post.url)
            const md = await resp.text()
            return {
              title: post.title || post.url.split("/").pop(),
              content: marked.parse(md),
            }
          })
        )

        setPosts(markdowns)
      } catch (err) {
        console.error("Error fetching blog posts:", err)
      }
    }

    fetchPosts()
  }, [])

  return (
    <div className="blog-page">
      {posts.map((post, i) => (
        <div key={i} className="blog-post" style={{ marginBottom: "2rem" }}>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      ))}
    </div>
  )
}

export default BlogPage
