
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { DataStore } from '@aws-amplify/datastore';
import { Post } from '../models';

export default function Home() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetchPosts()
    async function fetchPosts() {
      const postData = await DataStore.query(Post);
      console.log(postData);
      setPosts(postData)
      DataStore.observe(Post).subscribe(() => {
        fetchPosts()
      });
    }
  }, [])
  return (
    <div className={styles.container}>
      <h1>Posts</h1>
      {
        posts.map( post => (
          <Link href={`/posts/${post.id}`} key={post.id}>
            <a>
              <h2>{post.title}</h2>
            </a>
          </Link>
        ))
      }
    </div>
  )
}
