import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getBook } from '@/store/actions/book'
import { loadingChange } from '@/store/mainReducer'

import DownloadApp from '@/components/downloadApp'
import Scroller from '@/components/scroller'
import Types from '@/components/types'
import Spinner from '@/components/Spinner'
import './style.less'

class Book extends Component {
 
  componentDidMount() {
    this.props.getBook()
    .then(() => {
      this.props.loadingChange(false)
    })
  }
  render() {
    let { loading } = this.props
    let { novel, reality, travel, bookTags } = this.props.book
    return (
      <div className='has-header'>
        {
          loading || <React.Fragment>
            <Scroller title='最受关注图书｜虚构类' type='hasCover' items={novel}/>
            <Scroller title='最受关注图书｜非虚构类' type='hasCover' items={reality}/>
            <Scroller title='豆瓣纸书' type='hasCover' items={travel}>
              <div styleName='promItem'>
                <img styleName='corver' src={require('../../assets/img/book_zw.jpg')} alt='' />
                <div styleName='content'>
                  <span styleName='price'>¥ 68</span>
                  <p styleName='name'>造物</p>
                  <p styleName='info'>改变世界的万物图典，3000幅图里的发明与冒险</p>
                </div>
              </div>
            </Scroller>
            <Scroller title='发现好书' type='onlyString' items={bookTags} />
            <Types />
            <DownloadApp />
          </React.Fragment>
        }
        {loading && <Spinner />}
      </div>
    )
  }
}
const mapStateToProps = state => ({
  book: state.book,
  loading: state.main.loading
})

const mapDispatchToProps = {
  getBook,
  loadingChange
}
export default connect(mapStateToProps, mapDispatchToProps)(Book)
