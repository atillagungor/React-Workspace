import './App.css'
import Course from './components/Course'
import Header from './components/Header'
import { courses } from './Data'
import './components/Course.css'

function App() {

  return (
    <>
      <Header />
      <div className='course-main'>
        {courses?.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
    </>
  )
}

export default App