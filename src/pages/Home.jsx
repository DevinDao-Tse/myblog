import classes from './Home.module.css'
import MainHeader from '../components/MainHeader/MainHeader'

export default function Home() {

  return (
    <>
      <MainHeader />
      <div className={classes.HomeContainer}>
        <ul>
          <li>lol</li>
          <li>lol</li>
          <li>lol</li>
          <li>lol</li>
          <li>lol</li>
        </ul>
      </div>
    </>
  )
}

