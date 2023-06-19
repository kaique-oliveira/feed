import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/SideBar";

import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    constent: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'paragraph', content: '👉 jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-06-18 20:00:00')
  },
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'CTO @Rocketseat'
    },
    constent: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'paragraph', content: '👉 jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-06-17 21:00:00')
  }
]

export function App() {
  
  return (
    <>   
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>

        <main>
         {
          posts.map(post => {
            return (
              <Post  
                key={post.id}
                author={post.author}
                content={post.constent}
                publishedAt={post.publishedAt}
              />
            )
          })
         }
        </main>
      </div>
    </>
  )
}


