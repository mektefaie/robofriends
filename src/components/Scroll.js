const Scroll = props => {
  return (
    <div
      style={{
        overflowY: 'scroll',
        borderTop: '1px solid gray',
        borderBottom: '1px solid gray',
        height: '700px',
      }}
    >
      {props.children}
    </div>
  )
}
export default Scroll
