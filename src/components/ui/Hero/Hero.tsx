import style from './Hero.module.css'

const Hero = () => {
  return (
    <div className={style.heroContainer}>
        <div className={style.heroTitleContainer} >
          <h1>Super Flash Sale <span>50% off</span></h1>
        </div>
    </div>
  )
}

export default Hero
