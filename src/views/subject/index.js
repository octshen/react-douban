import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom' 
import { connect } from 'react-redux'

import { loadingChange } from '@/store/mainReducer'
import { getSingleSubject } from '@/store/actions/subject'
import { summary, genres, subjectMeta } from '@/store/reducers/subject'

import Banner from '@/components/banner'
import Rating from '@/components/rating'
import Marking from '@/components/marking'
import Card from '@/components/card'
import List from '@/components/list'
import Scroller from '@/components/scroller'
import Tags from '@/components/tags'
import DownloadApp from '@/components/downloadApp'
import Spinner from '@/components/Spinner'

import './style.less'

class Subject extends Component {
  state = {
    items: new Array(5).fill(1),
    isExpand: true
  }
  componentDidMount() {
    let { match, location } = this.props
    let { classify, id } = match.params
    this.props.getSingleSubject({
      classify,
      id
    })
    .then(() => {
      this.props.loadingChange(false)
    })
  }
  render() {
    let { isExpand, items } = this.state
    let { loading, movieTags, subjectMeta, summary, genres } = this.props
    let { subject, adImgUrl, questions } = this.props.subject
    return (
      <div className='has-header'>
        <Banner title='聊聊你的观影感受'></Banner>
        {
          !loading 
            ? <React.Fragment>
                <div styleName='subject-card'>
                  <h1>{subject.title}</h1>
                  <div styleName='subject-info'>
                    <div styleName='right'>
                      <a>
                        {
                          subject.images && <img src={subject.images.large} alt='cover' />
                        }
                      </a>
                    </div>
                    {
                      subject.rating && <div styleName='left'>
                        <Rating rating={subject.rating}>
                          <span>{subject.ratings_count}人评价</span>
                        </Rating>
                        {
                          subject.genres && subjectMeta && <React.Fragment>
                            <p styleName='meta'>{subjectMeta}</p>
                            <a styleName='open-app'>用App查看影人资料</a>
                          </React.Fragment>
                        }
                        {
                          subject.author && subjectMeta && <React.Fragment>
                            <p styleName='meta'>{subjectMeta}</p>
                            <a styleName='buy'>在豆瓣购买</a>
                          </React.Fragment>
                        }
                      </div>
                    }
                  </div>
                  {
                    subject.author && <div styleName='vendors-link'>
                      <a styleName='link'>
                        在哪儿买这本书？
                        <span styleName='info'>
                          豆瓣阅读电子书 66.00元起
                        </span>
                      </a>
                    </div>
                  }
                  <Marking>
                    {
                      subject.author 
                        ? <React.Fragment>
                            <Link to='login'>想读</Link>
                            <Link to='login'>在读</Link>
                            <Link to='login'>读过</Link>
                          </React.Fragment>
                        : <React.Fragment>
                            <Link to='login'>想看</Link>
                            <Link to='login'>看过</Link>
                          </React.Fragment>
                    }
                  </Marking>
                  <div styleName='subject-intro'>
                    <h2>{subject.title}的简介</h2>
                    <p>
                      {
                        summary && subject.summary && `${isExpand ? summary : subject.summary}……`
                      }
                      {
                        isExpand && <a onClick={() => this.setState({isExpand: false})}>
                          (展开)
                        </a>
                      }
                    </p>
                  </div>

                  <div styleName='genres'>
                    <h2>查看更多相关分类</h2>
                    {
                      genres && <Tags items={genres} />
                    }
                  </div>

                  <div styleName='subject-pics'>
                    <h2>{subject.title}的图片</h2>
                    {
                      subject.images && <ul>
                        <li>
                          <img src={subject.images.large} alt='poster' />
                        </li>
                        <li>
                          <img src={subject.images.large} alt='poster' />
                        </li>
                        <li>
                          <img src={subject.images.large} alt='poster' />
                        </li>
                      </ul>
                    }
                  </div>
                </div>
                <div styleName='subject-comments'>
                  <h2>{subject.title}的短评</h2>
                  <div>
                  {
                    items && items.length > 0 && items.map((item, ind) => <Card key={ind} mold='comment'/>)
                  }
                    <a styleName='list-link'>显示更多评论</a>
                  </div>
                </div>
                <div styleName='ad'>
                  <Banner adImg={adImgUrl}></Banner>
                </div>
                <div styleName='subject-question'>
                  <h2>关于{subject.title}的问答</h2>
                  <List items={questions}></List>
                  <a styleName='list-link'>显示更多问答</a>
                </div>
                <Scroller title='推荐的豆列' type='onlyString' items={movieTags}></Scroller>
                <DownloadApp></DownloadApp>
              </React.Fragment>
            : <Spinner />
        }
      </div>
    )
  }
}

// const mapStateToProps = state => ({
//   loading: state.main.loading,
//   subject: state.subject,
//   movieTags: state.movie.movieTags,
//   subjectMeta: subjectMeta(state.subject),
//   summary: summary(state.subject),
//   genres: genres(state.subject)
// })
const mapStateToProps = state => {
  console.log(state, 'state')
  return {
    loading: state.main.loading,
    subject: state.subject,
    movieTags: state.movie.movieTags,
    subjectMeta: subjectMeta(state.subject),
    summary: summary(state.subject),
    genres: genres(state.subject)
  }
}
  

const mapDispatchToProps = {
  getSingleSubject,
  loadingChange
}
export default connect(mapStateToProps, mapDispatchToProps)(Subject)