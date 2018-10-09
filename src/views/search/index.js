import React, { Component } from 'react'
import { connect } from 'react-redux'

import './style.less'

import { getSearchResult } from '@/store/actions/search'
import { loadingChange } from '@/store/mainReducer'

import GroupC from '@/components/groupC'

class Search extends Component {
  state = { 
    queryStr: ''
  }
  componentDidMount() {
    let { queryStr } = this.props.match.params
    this.setState({
      queryStr
    })
    this.props.getSearchResult({queryStr})
    .then(() => {
      this.props.loadingChange(false)
    })
  }
  searchRes() {
    let { getSearchResult, loadingChange } = this.props  
    let { queryStr } = this.state
    loadingChange(true)
    getSearchResult(queryStr)
    .then(() => {
      loadingChange(false)
    })
  }
  query = (charCode) => {
    if (charCode === 13) {
      console.log('search')
      this.searchRes()
    }
  }
  render() {
    let { queryStr } = this.state
    let { queryRes_movie, queryRes_book, queryRes_music } = this.props.queryRes
    return (
      <div className='has-header' styleName='search-view'>
        <div styleName='search'>
          <input
            type='text'
            name='query'
            value={queryStr}
            onChange={e => this.setState({queryStr: e.target.value})}
            onKeyPress={e => this.query(e.charCode)}
            placeholder='搜索 书 / 影 / 音 / 标签' />
          <a onClick={() => this.query(13)}>搜索</a>
        </div>
        {
          queryStr && <div>
            <GroupC title='影视' items={queryRes_movie}>
              <a styleName='list-link'>查看更多影视结果</a>
            </GroupC>
            <GroupC title='图书' items={queryRes_book}>
              <a styleName='list-link'>查看更多图书结果</a>
            </GroupC>
            <GroupC title='音乐' items={queryRes_music}>
              <a styleName='list-link'>查看更多音乐结果</a>
            </GroupC>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.main.loading,
  queryRes: state.search
})

const mapDispatchToProps = {
  loadingChange,
  getSearchResult
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)