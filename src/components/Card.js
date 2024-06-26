const Card = props => (
  <div className='tc bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5'>
    <img
      src={`https://robohash.org/${props.id}?size=200x200`}
      alt={`${props.name}`}
    />
    <div>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  </div>
)

export default Card
