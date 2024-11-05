import './hero.css'
export default function Hero() {
  return (
    <section className='hero flex'>
      <div className='lefs-section '>

      <div className="parent-avatar flex">
        <img src="./me2.png" className='avatar' alt="" />
        <div className='icon-verified'></div>
      </div>

      <h1 className='title'>Taibi El Yakouti</h1>
      <p className='sub-title'>Hi, I'm Taibi El Yakouti, a 20-year-old AI student at the City of Trades and Skills (cmc) and a dedicated student ambassador. I'm a national and international robotics competition winner, robotics trainer, graphic designer, and cybersecurity learner, passionate about blending AI with robotics and organizing impactful events.</p>
      <div className="all-icons flex">
        <div className="icon icon-twitter"></div>
        <div className="icon icon-instagram"></div>
        <div className="icon icon-linkedin"></div>
        <div className="icon icon-github"></div>
        <div className='icon icon-behance2'></div>
      </div>
      </div>

      <div className='righ-section animation border'> animation </div>
    </section>
  )
}
