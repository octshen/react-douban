import * as actionTypes from '../constants'

const updateGroup = (data) => ({
  type: actionTypes.UPDATEGROUP,
  data
})

const data = {
  group_a: [
    {
      title: '成都租房',
      subtype: 'group',
      id: 1234,
      images: {
        small: 'https://img3.doubanio.com/icon/g117205-2.jpg'
      },
      group_member: '43736',
      group_topic: {
        title: '天府四街临江苑套一出租个人 无中介费噢',
        time: '3分钟前更新：'
      }
    },
    {
      title: '北京租房（非中介）',
      subtype: 'group',
      id: 1234,
      images: {
        small: 'https://img3.doubanio.com/icon/g279962-3.jpg'
      },
      group_member: '53736',
      group_topic: {
        title: '9号线丰台南路站看丹桥新华街四里，次卧出租，押一付一',
        time: '刚刚更新：'
      }
    },
    {
      title: '深圳福田租房（个人房源免费推广）',
      subtype: 'group',
      id: 1234,
      images: {
        small: 'https://img3.doubanio.com/icon/g117205-2.jpg'
      },
      group_member: '4373',
      group_topic: {
        title: '福田福民岗厦复式单间整租，2800，可短租',
        time: '刚刚更新：'
      }
    }
  ],
  group_b: [
    {
      title: '想不想很多人帮你！',
      subtype: 'group',
      id: 1234,
      images: {
        small: 'https://img1.doubanio.com/icon/g14859-17.jpg'
      },
      group_member: '431999',
      group_topic: {
        title: '想转专业去学日语大家有神马建议？',
        time: '4分钟前更新：'
      }
    },
    {
      title: '我们都有秘密',
      subtype: 'group',
      id: 1234,
      images: {
        small: 'https://img5.doubanio.com/icon/g399184-6.jpg'
      },
      group_member: '96960',
      group_topic: {
        title: '北京 征个女生',
        time: '1分钟前更新：'
      }
    },
    {
      title: '文艺青年装逼会',
      subtype: 'group',
      id: 1234,
      images: {
        small: 'https://img1.doubanio.com/icon/g17947-8.jpg'
      },
      group_member: '43736',
      group_topic: {
        title: '文艺青年装逼会',
        time: '3分钟前更新：'
      }
    }
  ],
  group_c: [
    {
      title: '我爱代购&amp;海淘☺微信号',
      subtype: 'group',
      id: 1234,
      images: {
        small: 'https://img5.doubanio.com/icon/g37539-6.jpg'
      },
      group_member: '431999',
      group_topic: {
        title: '靠谱小日代 薇信直播定位+邮寄单号 可拼邮可直邮 保证品 ～笔芯',
        time: '4分钟前更新：'
      }
    },
    {
      title: 'PiaPia团✿团购',
      subtype: 'group',
      id: 1234,
      images: {
        small: 'https://img3.doubanio.com/icon/g573696-2.jpg'
      },
      group_member: '96960',
      group_topic: {
        title: '【想买】之前团过的包要吗？',
        time: '1小时前更新：'
      }
    },
    {
      title: '我们一起海淘',
      subtype: 'group',
      id: 1234,
      images: {
        small: 'https://img3.doubanio.com/icon/g25704-22.jpg'
      },
      group_member: '743736',
      group_topic: {
        title: '靠谱小日代 薇信直播定位+邮寄单号 可拼邮可直邮 保正品～笔芯',
        time: '3分钟前更新：'
      }
    }
  ]
}
const getGroup = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      dispatch(updateGroup(data))
      resolve()
    }, 500)
  })
}

export { getGroup }