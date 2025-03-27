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
    setArticlesList([...articlesList, { title: title, id: articlesList.length + 1 }])
  }

  return (
    <>
      <form className='d-flex' onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          value={title}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>

      </form>
      <div className="d-flex">

        {articlesList.map((article) => (
          <div className="card p-4 m-3">
            <div key={article.id}>
              <h2>{article.title}</h2>
            </div>
          </div>
        ))}

      </div>
    </>
  )
}

export default App
