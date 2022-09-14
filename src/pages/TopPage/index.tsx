import styles from './index.module.scss'
import DateAchievement from './components/DateAchievement'
import BodyWeightGraph from './components/BodyWeightGraph'
import MealCard from './components/MealCard'
import { SvgIcon } from 'assets/icons'
import { MealCardProps } from './components/MealCard'
import MealOption, { MealOptionProps } from './components/MealOption'
import Img from 'assets/images'
import Button from 'components/Button'

const TopPage = () => {
  const meals: MealCardProps[] = [
    {
      icon: <SvgIcon.MealIcon />,
      label: 'Morning',
    },
    {
      icon: <SvgIcon.MealIcon />,
      label: 'Lunch',
    },
    {
      icon: <SvgIcon.MealIcon />,
      label: 'Dinner',
    },
    {
      icon: <SvgIcon.MealIcon />,
      label: 'Snack',
    },
  ]

  const mealOptions: MealOptionProps[] = [
    {
      img: Img.Dinner1,
      label: '05.21.Morning',
    },
    {
      img: Img.Dinner2,
      label: '05.21.Lunch',
    },
    {
      img: Img.Dinner1,
      label: '05.21.Dinner',
    },
    {
      img: Img.Dinner1,
      label: '05.21.Snack',
    },
    {
      img: Img.Dinner1,
      label: '05.20.Morning',
    },
    {
      img: Img.Dinner1,
      label: '05.20.Lunch',
    },
    {
      img: Img.Dinner2,
      label: '05.20.Dinner',
    },
    {
      img: Img.Dinner1,
      label: '05.21.Snack',
    },
  ]
  return (
    <div className={styles.container}>
      <section className={styles.date_achievement_rate}>
        <div className={styles.date_achievement}>
          <div className={styles.over_lay} />
          <DateAchievement percent={75} date={'05/21'} />
        </div>

        <div className={styles.body_weight_graph}>
          <BodyWeightGraph />
        </div>
      </section>

      <div className={styles.content}>
        <section className={styles.meals}>
          {meals.map((item) => (
            <MealCard {...item} key={item.label} />
          ))}
        </section>

        <section className={styles.meal_options}>
          {mealOptions.map((item, index) => (
            <MealOption {...item} key={item.label + index} />
          ))}
        </section>

        <section className={styles.submit_btn}>
          <Button label="記録をもっと見る" />
        </section>
      </div>
    </div>
  )
}

export default TopPage
