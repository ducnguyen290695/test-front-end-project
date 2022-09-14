import { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from 'config/routes'
import MainLayout from 'layouts/MainLayout'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './index.scss'
import 'react-circular-progressbar/dist/styles.css'

AOS.init()

function App() {
  return (
    <Router>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {routes?.map((item, index) => {
              return <Route key={index} {...item} />
            })}
          </Switch>
        </Suspense>
      </MainLayout>
    </Router>
  )
}

export default App
