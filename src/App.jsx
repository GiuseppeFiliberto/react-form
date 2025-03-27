import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const articles = [
    {
      id: 1,
      title: 'Article 1',
      content: 'This is the content of article 1',
    },
    {
      id: 2,
      title: 'Article 2',
      content: 'This is the content of article 2',
    },
    {
      id: 3,
      title: 'Article 3',
      content: 'This is the content of article 3',
    },

  ]

  const [articlesList, setArticlesList] = useState(articles)

  const [title, setTitle] = useState('')
  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  return (
    <>
      <form className='d-flex'>
        <input type='text' placeholder='Search' />
        <button
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>

      </form>
      <div className="d-flex">
        <div className="card p-4">
          {articles.map((article) => (
            <div key={article.id}>
              <h2>{article.title}</h2>
              <p>{article.content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
