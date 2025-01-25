const Title = ({ course }) => <h2>{course}</h2>

const Total = ({ sum }) => {
  const total = sum.reduce((count, exercises) => count + exercises, 0)
  return <p><strong>total of {total} exercises</strong></p>
}

const Part = ({ part }) =>
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) =>
  <>
    {parts.map( part => <Part key={part.id} part={part}/> )}
  </>

const Course = ({ course }) =>
  <div>
    <Title course={course.name} />
    <Content parts={course.parts} />
    <Total sum={course.parts.map(part => part.exercises)} />
  </div>

export default Course
