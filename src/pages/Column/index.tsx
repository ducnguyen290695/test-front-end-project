import Button from 'components/Button'
import SectionWrapper from 'components/SectionWrapper'
import RecommendColumn, {
  RecommendColumnProps,
} from './components/RecommendColumn'
import RecommendedPost, {
  RecommendedPostProps,
} from './components/RecommendedPost'
import Img from 'assets/images'
import styles from './index.module.scss'

const Comlumn = () => {
  const recommeneds: RecommendColumnProps[] = [
    {
      title: 'RECOMMENDED COLUMN',
      description: 'オススメ',
    },
    {
      title: 'RECOMMENDED DIET',
      description: 'ダイエット',
    },
    {
      title: 'RECOMMENDED BEAUTY',
      description: '美容',
    },
    {
      title: 'RECOMMENDED HEALTH',
      description: '健康',
    },
  ]

  const recommendedPosts: RecommendedPostProps[] = [
    {
      date: '2021.05.17 23:25',
      title:
        '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ食べるメ食べるメ',
      description: '#魚料理  #和食  #DHA',
      img: Img.Column1,
    },
    {
      date: '2021.05.17 23:25',
      title:
        '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ食べるメ食べるメ',
      description: '#魚料理  #和食  #DHA',
      img: Img.Column1,
    },
    {
      date: '2021.05.17 23:25',
      title:
        '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ食べるメ食べるメ',
      description: '#魚料理  #和食  #DHA',
      img: Img.Column1,
    },
    {
      date: '2021.05.17 23:25',
      title:
        '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ食べるメ食べるメ',
      description: '#魚料理  #和食  #DHA',
      img: Img.Column1,
    },
    {
      date: '2021.05.17 23:25',
      title:
        '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ食べるメ食べるメ',
      description: '#魚料理  #和食  #DHA',
      img: Img.Column1,
    },
    {
      date: '2021.05.17 23:25',
      title:
        '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ食べるメ食べるメ',
      description: '#魚料理  #和食  #DHA',
      img: Img.Column1,
    },
    {
      date: '2021.05.17 23:25',
      title:
        '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ食べるメ食べるメ',
      description: '#魚料理  #和食  #DHA',
      img: Img.Column1,
    },
    {
      date: '2021.05.17 23:25',
      title:
        '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ食べるメ食べるメ',
      description: '#魚料理  #和食  #DHA',
      img: Img.Column1,
    },
  ]

  return (
    <div className={styles.container}>
      <SectionWrapper>
        <section className={styles.recommened_columns}>
          {recommeneds.map((item, index) => (
            <RecommendColumn {...item} key={item.title + index} />
          ))}
        </section>
      </SectionWrapper>

      <SectionWrapper>
        <section className={styles.recommended_posts}>
          {recommendedPosts.map((item, index) => (
            <RecommendedPost {...item} key={item.title + index} />
          ))}
        </section>
      </SectionWrapper>

      <section className={styles.submit_btn}>
        <Button label="記録をもっと見る" />
      </section>
    </div>
  )
}

export default Comlumn
