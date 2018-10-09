import React, { Component } from 'react'
import { connect } from 'react-redux'

import GroupC from '@/components/groupC'
import UserBar from '@/components/userBar'
import DownLoadApp from '@/components/downloadApp'
import Spinner from '@/components/Spinner'
import './style.less'

import { getGroup } from '@/store/actions/group'
import { loadingChange } from '@/store/mainReducer'
class Group extends Component {

  componentDidMount() {
    this.props.getGroup()
    .then(() => {
      this.props.loadingChange(false)
    })
  }
  render() {
    let { group_a, group_b, group_c } = this.props.group
    let { loading } = this.props
    return (
      <div className='has-header'>
        {
          loading || <React.Fragment>
            <UserBar />
            <GroupC title='租房找室友' items={group_a}>
              <a styleName='list-link'>更多相关小组</a>
            </GroupC>
            <GroupC title='来聊五块钱' items={group_b}>
              <a styleName='list-link'>来聊五块钱</a>
            </GroupC>
            <GroupC title='买买买' items={group_c}>
              <a styleName='list-link'>更多相关小组</a>
            </GroupC>
            <DownLoadApp />
          </React.Fragment>
        }
        {loading && <Spinner />}
      </div>
    )
  }
}
const mapStateToProps = state => ({
  group: state.group,
  loading: state.main.loading
})

const mapDispatchToProps = {
  getGroup,
  loadingChange
}
export default connect(mapStateToProps, mapDispatchToProps)(Group)
