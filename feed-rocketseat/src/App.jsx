import { Header } from "./components/Header";
import { Post } from "./components/Post";

import styles from './App.module.css';
import './global.css';
import { Sidebar } from "./components/SideBar";

export function App() {
  
  return (
    <>   
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>

        <main>
          <Post
            author="Kaique Oliveira"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolores expedita voluptatum debitis suscipit inventore veritatis repudiandae exercitationem veniam! Sint perspiciatis similique ullam numquam ipsa officiis consectetur quisquam, aperiam neque."
          />

          <Post
            author="Airon Guimaraes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolores expedita voluptatum debitis suscipit inventore veritatis repudiandae exercitationem veniam! Sint perspiciatis similique ullam numquam ipsa officiis consectetur quisquam, aperiam neque."
          />
        </main>
      </div>
    </>
  )
}


