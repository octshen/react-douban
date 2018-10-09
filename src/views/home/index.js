import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import SubNav from '@/components/subNav'
import List from '@/components/list'
import Spinner from '@/components/Spinner'
import { loadMore } from '@/store/actions/activities' 
import { PullToRefresh } from 'antd-mobile'

class Home extends React.Component {
  state = {
    refreshing: false,
    down: false,
    height: document.documentElement.clientHeight,
    data: [],
  }
  constructor(props) {
    super(props)
    this.ptr = React.createRef()
  }
  componentDidMount() {
    let height = this.state.height - ReactDOM.findDOMNode(this.ptr.current).offsetTop
    let { events, loadMore } = this.props
    events.length === 0 && loadMore().then((data) => {
      this.setState({
        height,
        data
      })
    })
  }
  render() {
    let { events, loadMore } = this.props
    return (
      <div data-role='home-view'>
        <PullToRefresh
          damping={100}
          ref={this.ptr}
          style={{
            height: this.state.height,
            overflow: 'auto',
          }}
          distanceToRefresh={60}
          indicator={this.state.down ? {} : {release: <Spinner style={{height: '60px'}} />, deactivate: '上拉刷新' }}
          direction={this.state.down ? 'down' : 'up'}
          refreshing={this.state.refreshing}
          onRefresh={() => {
            this.setState({ refreshing: true })
            loadMore().then(() => {
              this.setState({ refreshing: false })
            })
          }}
        >  
          <SubNav mold='quickNav'/>
          {
            events.length !== 0 ? <List mold='thumbnail' items={events}/> : <Spinner/>
          }
        </PullToRefresh>
      </div>
    )
  }
}
  
const mapStateToProps = state => ({
  events: state.activities.events
})
const mapDispatchToProps = {
  loadMore
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
