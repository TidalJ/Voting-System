import { TabBar } from 'antd-mobile'
import { AppOutline, AddCircleOutline, UserOutline } from 'antd-mobile-icons'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import styles from '../styles/tab.module.scss'
const Tab = () => {
    const tabs = [
      {
        key: '/home',
        title: 'home',
        icon: <AppOutline />
      },
      {
        key: '/add',
        title: 'add',
        icon: <AddCircleOutline />
      },
      {
        key: '/center',
        title: 'center',
        icon: <UserOutline />,
      }
    ]
    const [pathname, setPathName] = useState('home')
    const localtion = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
      setPathName(localtion.pathname)
    }, [localtion.pathname])
    const routeChange = (path) => {
      navigate(path)
    }
    return (
        <div className={ styles.main }>
            <div className={ styles.content }>
              <Outlet />
            </div>
            <div className={ styles.tab }>
              <TabBar onChange={ (key) => routeChange(key) } activeKey={ pathname }>
                  {tabs.map(item => (
                      <TabBar.Item key={ item.key } icon={item.icon} title={item.title} />
                  ))}
              </TabBar>
            </div>
        </div>
    )
}

export default Tab