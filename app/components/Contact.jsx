

const Contact = () => {
  return (
    <div className="contact mt-20" >
        <h2> Contact Me</h2>
        <div className="flex justify-center w-[500px] m-auto">
        <form action="">
            <label htmlFor="">Name</label>
            <input type="text" placeholder = "Enter your name" />
            <label htmlFor="">Email</label>
            <input type="email" name="" id="" placeholder ="Enter your email" />
            <label htmlFor="">Message</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>

            <button type ="submit" className ='btn' >Hit Send</button>
        </form>
        </div>
    </div>
  )
}

export default Contact