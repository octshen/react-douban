import React from 'react'
import './style.less'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Banner from '@/components/banner'
import Tags from '@/components/tags'
import DownloadApp from '@/components/downloadApp'
import Spinner from '@/components/Spinner'
import { loadingChange } from '@/store/mainReducer'
import { getSingleEvent } from '@/store/actions/activities'

class Detail extends React.Component {
  toArray = (val) => {
    return val.split(',')
  }
  content() {
    /// Remove copyright imgs
    let { eventItem } = this.props
    return eventItem.content.replace(/<img.+?>/ig, '')
  }
  createContent = () => {
    return {
      __html: this.content()
    }
  }
  componentDidMount() {
    let { match, getSingleEvent } = this.props
    let id = match.params.id
    getSingleEvent(id).then(() => {
      this.props.loadingChange(false)
    })
  }
  render() {
    let { routes, eventItem, loading } = this.props
    return (
      <div className='has-header' data-role='detail-view'>
        <Banner title='每天看点好内容' />
        {
          loading 
            ? <Spinner />
            : (<div styleName='info'>
                <h2>
                  {eventItem.title}
                  <span styleName='badge'>{eventItem.loc_name}</span>
                </h2>
                <div styleName='poster'>
                  <img src={eventItem.image_hlarge} alt=''/>
                </div>
                <div styleName='detail'>
                  <span>时间:&nbsp;&nbsp;</span>
                  <ul>
                    <li>{eventItem.begin_time}</li>
                    <li>{eventItem.end_time}</li>
                  </ul>
                </div>
                <div styleName='detail'>
                  <span>地点:&nbsp;&nbsp;</span>
                  <ul>
                    <li>{eventItem.address}</li>
                  </ul>
                </div>
                <div styleName='detail'>
                  <span>费用:&nbsp;&nbsp;</span>
                  <ul>
                    <li>{eventItem.fee_str}</li>
                  </ul>
                </div>
                <div styleName='detail'>
                  <span>类型:&nbsp;&nbsp;</span>
                  <ul>
                    <li>{eventItem.category_name}</li>
                  </ul>
                </div>
                <div styleName='detail'>
                  <span>起始时间:&nbsp;&nbsp;</span>
                  <ul>
                    {
                      eventItem.owner && <li>{eventItem.owner.name}</li>
                    }
                  </ul>
                </div>
                {
                  eventItem.tags && <Tags items={this.toArray(eventItem.tags)}></Tags>
                }
                <div styleName='describe'>
                  <h2>活动详情</h2>
                  {
                    eventItem.content && <div styleName='content' dangerouslySetInnerHTML={this.createContent()}></div>
                  }
                </div>
                <DownloadApp />
              </div>)
        }
      </div>
    )
  }
}
const mapStateToProps = state => ({
  eventItem: state.activities.eventItem,
  loading: state.main.loading
})
const mapDispatchToProps = ({
  getSingleEvent,
  loadingChange
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Detail))
