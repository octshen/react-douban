import React from 'react'
import './style.less'
import Card from '@components/card'
import Banner from '@components/banner'
import UserBar from '@components/userBar'
import DownLoadApp from '@components/downloadApp'
class Status extends React.Component {
  state = {
    items: new Array(10).fill('cardItem')
  }
  render() {
    let { items } = this.state
    return (
      <div>
        <Banner />
        <UserBar />
        {items && items.map((item, index) => (
          <Card mold='quote' key={index} />
        ))}
        <span styleName='list-link'>显示更多广播</span>
        <DownLoadApp />
      </div>
    )
  }
}
export default Status