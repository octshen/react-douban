import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMovie } from '@/store/actions/movie'
import DownloadApp from '@/components/downloadApp'
import Scroller from '@/components/scroller'
import Types from '@/components/types'
import Spinner from '@/components/Spinner'
import './style.less'

class Moive extends Component {
  state = {
    showLoading: true
  }
  componentDidMount() {
    this.props.getMovie().then(() => {
      this.setState((prevState) => ({
        showLoading: !prevState.showLoading
      }))
    })
  }
  render() {
    let { showLoading } = this.state
    let { hotMovies, topMovies, newMovies, movieTags } = this.props.movie
    return (
      <div className='has-header'>
        {
          showLoading || <React.Fragment>
            <Scroller title='影院热映' type='hasCover' items={hotMovies}/>
            <Scroller title='免费在线观影' type='hasCover' items={topMovies}/>
            <Scroller title='新片速递' type='hasCover' items={newMovies}/>
            <Scroller title='发现好电影' type='onlyString' items={movieTags}/>
            <Types />
            <DownloadApp />
          </React.Fragment>
        }
        {showLoading && <Spinner />}
      </div>
    )
  }
}
const mapStateToProps = state => ({
  movie: state.movie
})

const mapDispatchToProps = {
  getMovie
}
export default connect(mapStateToProps, mapDispatchToProps)(Moive)
