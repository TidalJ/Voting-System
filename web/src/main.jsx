import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from "antd-mobile";
import enUS from 'antd-mobile/es/locales/en-US'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/index.js'
import Loading from './pages/Loading.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={ store }>
    <Suspense fallback={<Loading />}>
      <HashRouter>
          <ConfigProvider locale={enUS}>
            <App />
          </ConfigProvider>
      </HashRouter>
    </Suspense>
  </Provider>
)
