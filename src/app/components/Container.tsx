const Container = ({ children }) => {

  return (
//    <div className="container">
    <div className="border border-zinc-800 rounded p-8">
      {children}
    </div>
  )
}

export default Container;
