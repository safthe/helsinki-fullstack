const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.count}
    </p>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.course.parts[0]} />
      <Part part={props.course.parts[1]} />
      <Part part={props.course.parts[2]} />
    </>
  )
}

const Footer = (props) => {
  return (
    <p>
      Number of exercises {props.parts[0].count + props.parts[1].count + props.parts[2].count}
    </p>
  )
}

const App = () => {
  const course = {
    'name': 'Half Stack application development',
    'parts': [
      {
        'name': 'Fundamentals of React',
        'count': 10
      },
      {
        'name': 'Using props to pass data',
        'count': 7
      },
      {
        'name': 'State of a component',
        'count': 14
      },
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Footer parts={course.parts} />
    </div>
  )
}

export default App
