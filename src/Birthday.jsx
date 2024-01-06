import { getAge } from "./util";

const Birthday = ({ data }) => {
  return <section className='birthday'>
    {
      data.map((buddy) => {
        const { id, name, dob, img } = buddy;
        return <article className='person' key={id}>
          <div className="img-container">
            <img src={img} alt="image" className="img" />
          </div>
          <div className='data'>
            <span className="name">{name}</span>
            <span className="age">{getAge(dob)} years</span>
          </div>
        </article>
      })
    }
  </ section>
}

export default Birthday;