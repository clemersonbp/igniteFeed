import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar';
import { Post } from './Post'

import styles from './App.module.css';

import './global.css'

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego"
            content="Lorem ipsum dolor sit amet. Voluptatum aut, tempore laboriosam repellat consequatur inventore nihil hic beatae alias doloribus praesentiu"
          />
          <Post
            author="Clemerson"
            content="Lorem ipsum dolor sit amet, tempore laboriosam repellat consequatur inventore nihil hic beatae alias doloribus praesentiuLorem ipsum dolor sit amet, consectetur adipisicing elit."
          />
        </main>
      </div>
    </>
  )
}
