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

  const handleSubmit = (e) => {
    e.preventDefault()
    setArticlesList([...articlesList, title])
  }

  return (
    <>
      <form className='d-flex' onSubmit={handleSubmit}>
        <input value={title} oncChange={handleChange} type='text' placeholder='Insert new article' />
        <button
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>

      </form>
      <div className="d-flex">
        <div className="card p-4">
          {articlesList.map((article) => (
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
