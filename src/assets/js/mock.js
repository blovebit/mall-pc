// 模拟请求的配置在最下面
// 上面是返回数据的模拟配置

// 引入mock
const Mock = require('mockjs');


// mock 数据 ------------------ start ---
const register = () => ({ // 注册
    "content": "",
    "message": "注册成功,快去登录体验吧!",
    "status": 200
})
const login = () => ({ // 登录
    "content": {
        "easemobId": "",
        "easemobPwd": "",
        "hasHouse": false,
        "head": null,
        "mobile": "17898192008",
        "name": "17898192008",
        "objectId": 662,
        "passScore": 80,
        "region": null,
        "roleType": "owner",
        "roles": [
          {
            "objectId": 16,
            "remark": "",
            "roleName": "",
            "roleSign": ""
          }
        ],
        "sex": null,
        "sign": "",
        "token": "TOKEN 662/88af2cf1-701d-49c6-a79e-8274a572d090",
        "username": "17898192008",
        "videoTime": "20"
    },
    "message": "登陆成功",
    "status": 200
})
const findRegion = () => ({ // 地区列表
    "content": {
        "regionList": [
          {
            "acronyms": "B",
            "hot": false,
            "name": "北京市",
            "objectId": 1,
            "regionStatus": false,
            "type": "PROVINCE"
          },
          {
            "acronyms": "T",
            "hot": false,
            "name": "天津市",
            "objectId": 20,
            "regionStatus": true,
            "type": "PROVINCE"
          },
          {
            "acronyms": "H",
            "hot": false,
            "name": "河北省",
            "objectId": 39,
            "regionStatus": true,
            "type": "PROVINCE"
          },
          {
            "acronyms": "S",
            "hot": false,
            "name": "山西省",
            "objectId": 234,
            "regionStatus": true,
            "type": "PROVINCE"
          },
          {
            "acronyms": "N",
            "hot": false,
            "name": "内蒙古自治区",
            "objectId": 376,
            "regionStatus": true,
            "type": "PROVINCE"
          },
          {
            "acronyms": "L",
            "hot": false,
            "name": "辽宁省",
            "objectId": 498,
            "regionStatus": true,
            "type": "PROVINCE"
          },
          {
            "acronyms": "J",
            "hot": false,
            "name": "吉林省",
            "objectId": 627,
            "regionStatus": true,
            "type": "PROVINCE"
          },
          {
            "acronyms": "H",
            "hot": false,
            "name": "黑龙江省",
            "objectId": 705,
            "regionStatus": true,
            "type": "PROVINCE"
          },
          {
            "acronyms": "S",
            "hot": false,
            "name": "上海市",
            "objectId": 863,
            "regionStatus": true,
            "type": "PROVINCE"
          },
          {
            "acronyms": "J",
            "hot": false,
            "name": "江苏省",
            "objectId": 884,
            "regionStatus": true,
            "type": "PROVINCE"
          },
          {
            "acronyms": "Z",
            "hot": false,
            "name": "浙江省",
            "objectId": 1016,
            "regionStatus": true,
            "type": "PROVINCE"
          },
          {
            "acronyms": "A",
            "hot": false,
            "name": "安徽省",
            "objectId": 1129,
            "regionStatus": true,
            "type": "PROVINCE"
          },
          {
            "acronyms": "F",
            "hot": false,
            "name": "福建省",
            "objectId": 1262,
            "regionStatus": true,
            "type": "PROVINCE"
          },
          {
            "acronyms": "J",
            "hot": false,
            "name": "江西省",
            "objectId": 1366,
            "regionStatus": true,
            "type": "PROVINCE"
          },
          {
            "acronyms": "S",
            "hot": false,
            "name": "山东省",
            "objectId": 1489,
            "regionStatus": true,
            "type": "PROVINCE"
          },
          {
            "acronyms": "H",
            "hot": false,
            "name": "河南省",
            "objectId": 1663,
            "regionStatus": true,
            "type": "PROVINCE"
          },
          {
            "acronyms": "H",
            "hot": false,
            "name": "湖北省",
            "objectId": 1857,
            "regionStatus": true,
            "type": "PROVINCE"
          },
          {
            "acronyms": "H",
            "hot": false,
            "name": "湖南省",
            "objectId": 1987,
            "regionStatus": true,
            "type": "PROVINCE"
          },
          {
            "acronyms": "G",
            "hot": false,
            "name": "广东省",
            "objectId": 2137,
            "regionStatus": true,
            "type": "PROVINCE"
          },
          {
            "acronyms": "G",
            "hot": false,
            "name": "广西壮族自治区",
            "objectId": 2297,
            "regionStatus": true,
            "type": "PROVINCE"
          },
          {
            "acronyms": "H",
            "hot": false,
            "name": "海南省",
            "objectId": 2436,
            "regionStatus": true,
            "type": "PROVINCE"
          },
          {
            "acronyms": "Z",
            "hot": false,
            "name": "重庆市",
            "objectId": 2465,
            "regionStatus": true,
            "type": "PROVINCE"
          },
          {
            "acronyms": "S",
            "hot": false,
            "name": "四川省",
            "objectId": 2508,
            "regionStatus": true,
            "type": "PROVINCE"
          },
          {
            "acronyms": "G",
            "hot": false,
            "name": "贵州省",
            "objectId": 2730,
            "regionStatus": true,
            "type": "PROVINCE"
          },
          {
            "acronyms": "Y",
            "hot": false,
            "name": "云南省",
            "objectId": 2831,
            "regionStatus": true,
            "type": "PROVINCE"
          },
          {
            "acronyms": "X",
            "hot": false,
            "name": "西藏自治区",
            "objectId": 2985,
            "regionStatus": true,
            "type": "PROVINCE"
          },
          {
            "acronyms": "S",
            "hot": false,
            "name": "陕西省",
            "objectId": 3067,
            "regionStatus": true,
            "type": "PROVINCE"
          },
          {
            "acronyms": "G",
            "hot": false,
            "name": "甘肃省",
            "objectId": 3195,
            "regionStatus": true,
            "type": "PROVINCE"
          },
          {
            "acronyms": "Q",
            "hot": false,
            "name": "青海省",
            "objectId": 3308,
            "regionStatus": true,
            "type": "PROVINCE"
          },
          {
            "acronyms": "N",
            "hot": false,
            "name": "宁夏回族自治区",
            "objectId": 3361,
            "regionStatus": true,
            "type": "PROVINCE"
          },
          {
            "acronyms": "X",
            "hot": false,
            "name": "新疆维吾尔自治区",
            "objectId": 3394,
            "regionStatus": true,
            "type": "PROVINCE"
          }
        ],
        "update": 1509937871000
    },
    "message": "获取数据成功!",
    "status": 200
})
const uploadPicture = () => ({ // 上传图片
    'content': {
        'content': {
            'id': 5, // 如果请求体里面的secne为户型图，返回订单id；如果为方案图，返回进度id；
            'img_id': 5, // 图片ID
            'ori_path': 'https://source.unsplash.com/random/800x600', // 原始图路径
            'big_path': 'https://source.unsplash.com/random/600x400', // 大图路径
            'mid_path': 'https://source.unsplash.com/random/400x300', // 中图路径
            'sml_path': 'https://source.unsplash.com/random/200x200', // 小图路径
        }
    },
    "message": "上传图片成功!",
    "status": 200
})

// mock 拦截请求 -------------- start ---
// Mock.mock(url, post/get, 返回的数据)
Mock.mock('/register', 'post', register); // 注册
Mock.mock('/login', 'post', login); // 登录
Mock.mock('/findRegion', 'post', findRegion); // 地区列表
Mock.mock('/uploadPicture', 'post', uploadPicture);  // 上传图片