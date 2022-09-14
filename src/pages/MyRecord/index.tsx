import { useCallback } from 'react'
import Recommend, { RecomendProps } from './components/Recommend'
import BodyRecord from './components/BodyRecord'
import MyExercise from './components/MyExercise'
import Img from 'assets/images'
import Button from 'components/Button'
import { scrollIntoView } from 'utils/helperFuncs'
import MyDiary, { MyDiaryProps } from './components/MyDiary'
import SectionWrapper from 'components/SectionWrapper'
import styles from './index.module.scss'

enum ElementId {
  bodyRecord = 'body-record',
  recommends = 'recommends',
  myExercise = 'my-exercise',
  myDiary = 'my-diary',
}

const MyRecord = () => {
  const recommends: RecomendProps[] = [
    {
      img: Img.Recommend1,
      title: 'BODY RECORD',
      description: '自分のカラダの記録',
      elementId: ElementId.bodyRecord,
    },
    {
      img: Img.Recommend2,
      title: 'MY EXERCISE',
      description: '自分のカラダの記録',
      elementId: ElementId.myExercise,
    },
    {
      img: Img.Recommend3,
      title: 'MY DIARY',
      description: '自分の日記',
      elementId: ElementId.myDiary,
    },
  ]

  const myDiaries: MyDiaryProps[] = [
    {
      date: '2021.05.21   23:25',
      content:
        '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
    },
    {
      date: '2021.05.21   23:25',
      content:
        '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
    },
    {
      date: '2021.05.21   23:25',
      content:
        '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
    },
    {
      date: '2021.05.21   23:25',
      content:
        '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
    },
    {
      date: '2021.05.21   23:25',
      content:
        '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
    },
    {
      date: '2021.05.21   23:25',
      content:
        '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
    },
    {
      date: '2021.05.21   23:25',
      content:
        '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
    },
    {
      date: '2021.05.21   23:25',
      content:
        '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
    },
  ]

  const handleScrollIntoElement = useCallback((elementId: string) => {
    if (elementId) {
      scrollIntoView(document?.getElementById(elementId))
    }
    return
  }, [])

  return (
    <div className={styles.container}>
      <SectionWrapper>
        <section className={styles.recommends} id={ElementId.recommends}>
          {recommends.map((item, index) => (
            <Recommend
              {...item}
              key={item.title + index}
              onClick={() => handleScrollIntoElement(item?.elementId || '')}
            />
          ))}
        </section>
      </SectionWrapper>

      <SectionWrapper>
        <section className={styles.section} id={ElementId.bodyRecord}>
          <BodyRecord />
        </section>
      </SectionWrapper>

      <SectionWrapper>
        <section className={styles.section} id={ElementId.myExercise}>
          <MyExercise />
        </section>
      </SectionWrapper>

      <SectionWrapper>
        <p className={styles.title}>MY DIARY</p>
        <section className={styles.my_diary} id={ElementId.myDiary}>
          {myDiaries.map((item, index) => (
            <MyDiary {...item} key={index} />
          ))}
        </section>
      </SectionWrapper>

      <section className={styles.submit_btn}>
        <Button label="記録をもっと見る" />
      </section>
    </div>
  )
}

export default MyRecord
