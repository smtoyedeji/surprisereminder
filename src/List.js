function List(props) {

    //declare a variable called people and set it to the value of the people prop
    const people = props.people.map(person => {
        return (
            <article key={person.id} className="person">
                <img src={person.image} alt={person.name}/>
                <div>
                    <h4>{person.name}</h4>
                    <p>{person.age} years</p>
                </div>
            </article>
        )
    })

  return (
    <div>
        {people}
    </div>
  )
}

export default List