import ProvideRouter from './router/ProvideRouter'
import Element from './router'
import { useEffect } from 'react'
import { init, tokenGetId } from './api/user'
import { update } from './redux/actions/index'
import { connect } from 'react-redux'
import './app.scss'
const App = (props) => {

  useEffect(() => {
    if(localStorage.getItem('vote_token')) {
      tokenGetId({ token: localStorage.getItem('vote_token') }).then(res => {
        if(res.code === 200) {
          init({ id: res.data }).then(res => {
            if(res.code === 200) {
                props.update(res.data)
            }
          })
        }
      })
    }
  }, [])

  return (
    <div className="main">
      <ProvideRouter>
        <Element />
      </ProvideRouter>
    </div>
  )
}

export default connect(() => ({}), { update })(App)
