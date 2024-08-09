import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='hero' className='hero'>
      <img src="/src/assets/dumi.jpeg" alt="" />
      <h1><span>I'm Neo Subasinghe,</span><br></br> Graphic Designer based in Sri Lanka.</h1>
      <p>I am a Graphic Designer from Kalutara, Sri Lanka with 2 years of experience multiple companies like Microsoft, Tesla and Apple</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume"><a href="/src/assets/resume.pdf" download className='hero-resume-new'>My resume</a></div>
      </div>
    </div>
  )
}

export default Hero
