import { lazy } from 'react'
import paths from './paths'

const TopPage = lazy(() => import('pages/TopPage'))
const MyRecord = lazy(() => import('pages/MyRecord'))
const Comlumn = lazy(() => import('pages/Column'))

const routes = [
  {
    path: paths.topPage,
    component: TopPage,
    exact: true,
  },
  {
    path: paths.myRecordPage,
    component: MyRecord,
    exact: true,
  },
  {
    path: paths.columnPage,
    component: Comlumn,
    exact: true,
  },
]

export default routes
