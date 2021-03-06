# 益装网api需求

- 0807更新：

  - 登录返回字段增加level、avatar等字段
  - 更改注册接口需要返回登录的数据，以便于自动登录

- 0728am更新：

  - 添加了各个接口的名称，[前端的模拟请求](./src/mock.js)使用了这些名称。路径待定。
  - 删除了两个讨论之后废弃/合并的接口

## 注册 （需要和登录返回同样的数据，实现自动登录）: register

### 返回数据

    {
        // ... status, message
        "content": {
            "token": String, // 用于自动登录,2小时有效期
        }
    }

### 说明

- 用户注册赠送用户积分,具体给多少通过平台后台配置

## 登录 （已经有了，添加字段）: login

### 添加字段

    {
        "level": int, // 用户的等级
        'avatar':{ // 头像
            'ori_path': '', // 原始图路径
            'big_path': '', // 大图路径
            'mid_path': '', // 中图路径
            'sml_path': '', // 小图路径
        },
    }

### 说明

- 每天第一次登陆送积分，之后不送，连续7天登陆额外送积分（如此循环） 具体给多少通过平台后台配置

## 获取行政区列表（省市区联动） （已经有了）: findRegion

## 上传图片: uploadPicture

### 场景

用户创建任务，设计师上传设计稿，工地上传施工图等

### 获取方式

    POST

### 参数

#### header

    token

#### query

    {
        'scene': Int, // 图片场景；0：用户发布订单时上传户型图；1：设计师上传稿件时的方案图
        'part_id': Int, // 房间id；此id与上传方案关联，户型图不需要
        'iamge_type': String, // 'image' || 'MP4'
        'width': Int, // 图片宽度 px
        'height': Int, // 图片高度 px
        'size': Int, // 图片大小 bye
        'info': String, // 设计师对房间设计的描述
        'process_id': Int, // 进度id；为空时新建进度；
    }

### 说明

每次调用接口，仅上传一张图片，需要根据processID关联该进度所有空间图片

### 返回数据

    {
        // ... status, message
        'content': {
            'content': {
                'id': Int, // 如果请求体里面的secne为户型图，返回订单id；如果为方案图，返回进度id；
                'img_id': Int // 图片ID
                'ori_path': // 原始图路径
                'big_path': // 大图路径
                'mid_path': // 中图路径
                'sml_path': // 小图路径
            }
        }
    }

## 删除图片: deletePicture

### 场景

用户上传图片时，撤回操作

### 获取方式

    POST

### 参数

#### header

    token

#### query

    {
        'img_id': Int // 图片ID
    }

### 返回数据

    {
        // ... status, message
    }

## （用  户）创建订单: createTask

### 场景

用户提交设计需求

### 获取方式

    POST

### 参数

#### header

    token

#### query

    {
        'designerID' Int, // 设计师ID，如果有此项，表示预约特定设计师
        'area': Number, // 房屋面积
        'unit': String, // 户型
        'village': String, // 所属小区
        'province_id': Int, // 省份ID
        'city_id': Int, // 市ID
        'district_id': Int, // 区县ID
        'budget': Number, // 设计预算
        'image_id': Int, // 户型图ID
        'task_id': Int, // 订单ID
        'info': String // 用户附加输入的需求详情
        'house_status': // 房屋状态，'旧房翻新'||'新房'
        'house_type': // 房屋类型，'跃层'||'平层'||'别墅'
    }

### 说明

- 用户发布订单，后台管理员审核通过，给予用户积分和益币（两种奖励都有）   具体给多少通过平台后台配置

### 返回数据

    {
        //... status，message
    }

## （用  户）完善订单信息（未定）

### 场景

客户创建订单（任务）后，填写的个人生活习惯等信息，提供给设计师

### 获取方式

    POST

### 参数

#### header

    token

#### query

    {
        'members': [  // 家庭成员 Array
            {
                'name': String, // 名字
                'age': Int, // 年龄
                'style': String, // 倾向风格
                'interest': String, // 爱好
                'color': String, // 偏爱颜色
                'info': String, // 备注
            },
            // ……
        ],
        'coustoms': {
            'intercourse': ''
        }
    }

### 说明

- 完善订单补充信息送积分 具体给多少通过平台后台配置

### 返回数据

    {
        // ... status, messages
    }

## （任务大厅）获取订单列表 getTaskList

### 场景

任务大厅展示

### 获取方式

GET

### 参数

    {
        'page': Int, // 分页参数
        'size': Int, // 每页数据量
        'order_status': Int, // 按订单状态筛选；默认为空，不筛选；1为招标中；2为已结标；
        'sort_by_time': Int, // 按审核时间排序；默认为空，不排序；1为倒序；2为正序；
        'sort_by_level': Int, // 按订单等级排序；默认为空，不排序；1为倒序；2为正序；
        'level': array, // 按等级筛选可抢单；默认为空，不筛选；[1，2，3，4，5，6]
    }

### 返回数据

    {
        // ... status, message
        'content': {
            'task_list': [
                {
                    'layout_pic': { // 户型图
                        'ori_path': '', // 原始图路径
                        'big_path': '', // 大图路径
                        'mid_path': '', // 中图路径
                        'sml_path': 'https://source.unsplash.com/random/600x480?a', // 小图路径
                    },
                    'id': 52, //订单id
                    'sn': '255454554', // 订单编号
                    'level': 5, // 订单等级，1，2，3，4，5，6
                    'budget': '8000', // 设计预算
                    'unit': '二室两厅', // 户型
                    'area': 79, // 面积
                    'style': '欧式', // 风格
                    'house_status': '新房', // '旧房翻新'||'新房'
                    'house_type': '平层', // '跃层'||'平层'||'别墅'
                    'village': '范德萨是', // 小区名
                    'province': '四川省', // 省份
                    'city': '成都市', // 市
                    'region': '金牛区', // 区
                    'release_time': '1533367887380', // 审核通过时间
                    'create_time': '1533367887380', // 创建时间
                    'end_time': '1533454287380', // 订单到期时间
                    'need_num': 7, // 允许最大抢单人数
                    'designder_num': 5, // 目前抢单设计师人数
                    'designer_list':[ // 已经抢单的设计师
                        {
                            'id': 58, // id
                            'name': '王羲之', // 名字
                            'avatar':{ // 头像
                                'ori_path': '', // 原始图路径
                                'big_path': '', // 大图路径
                                'mid_path': '', // 中图路径
                                'sml_path': 'https://source.unsplash.com/random/60x60?a', // 小图路径
                            },
                            'level': 5 // 设计师等级
                        }
                        // ..
                    ]
                },
                // ...
            ],
            'page_total': //数据总条数
        }
    }

## （任务大厅）获取订单详情: getTaskDetail

### 场景

用户任务大厅选择单个订单了解详情

### 获取方式

    GET

### 参数

    {
        'id': // 订单id
    }

### 返回数据

    {
        // ... status, message
        'content': {
            'content': [
                {
                    'layout_pic': { // 户型图路径
                        'ori_path': //原图
                        'big_path': //大图
                        'mid_path': //中图
                        'sml_path': //
                    },
                    'id': //点单id
                    'sn': // 订单编号
                    'level': // 订单等级，1，2，3，4，5，6
                    'budget': // 设计预算
                    'unit': // 户型
                    'area': // 面积
                    'style': // 风格
                    'house_status': // '旧房翻新'||'新房'
                    'house_type': // '跃层'||'平层'||'别墅'
                    'village': // 小区名
                    'province': // 省份
                    'city': // 市
                    'region': // 区
                    'release_time': // 审核通过时间
                    'create_tiem': // 创建时间
                    'end_time': // 订单到期时间
                    'need_num': //允许最大抢单人数
                    'designder_num': //目前抢单设计师人数
                    'designer_list':[ // 已经抢单的设计师
                        {
                            'id': //设计师id
                            'name': //设计师名称
                            'avatar':{ // 头像
                                'ori_path': //原图
                                'big_path': //大图
                                'mid_path': //中图
                                'sml_path': //小图
                            },
                            'level': //设计师等级
                        },
                        // ...
                    ],
                    'user_habit':{} // 用户完善订单的内容
                    'info': // 用户的补充说明
                },
                / ...
            ]
        }
    }

## （设计师）抢单: grabTask

### 场景

设计师抢单

### 获取方式

    POST

### 参数

#### header

    token

#### query

    {
        'id': // 订单id
    }

### 返回数据

    {
        // ... status, messages
    }

### 说明

- 后台需要判断登录、身份验证（只有设计师能够抢）、设计师的等级符合订单等级要求、排重是否抢过、是否达到最大抢单人数
- 冻结状态的设计师不能抢单
- 抢单成功给予积分奖励，多少由后台配置

## （设计师，用户，公司公用）获取订单列表: getMyTaskList

### 场景

设计师个人中心，查看我的订单

### 获取方式

    POST

### 参数

#### header

    token

#### query

    {
        'page': //页码
        'size': //每页数量
        'status': // 空：全部；1：订单进行中；2：订单已完结；此状态需从设计师与订单关联表中查看
    }

### 返回数据

    {
        // ... status, message
       'tasklist': [ //array订单列表
            {
                'id': 1, // 订单id
                'sn': '', // 订单编号11为数字的字符串
                'level': 1, // 订单等级，1，2，3，4，5，6
                'free': true, // 免费订单，false为付费订单
                'budget': 1, // 设计预算
                'unit': '', // 户型
                'area': 1, // 面积
                'style': '', // 风格
                'house_status': '', // '旧房翻新'||'新房'
                'house_type': '', // '跃层'||'平层'||'别墅'
                'village': '', // 小区名
                'province': '', // 省份
                'city': '', // 市
                'region': '', // 区
                'release_time': int,// 审核通过时间
                'create_tiem': int,// 创建时间
                'remain_time': int,// 订单剩余时间戳
                'step_num': 1, // 当前步骤数
                'step_discript': '', // 当前步骤描述
                'layout_pic': { // 户型图路径
                    'ori_path': '', // 原
                    'big_path': '', // 大
                    'mid_path': '', // 中
                    'sml_path': '', // 小
                },
                'designer': [ // 订单当前设计师们
                    {
                        "name": "", // 名字
                        "objectId": 1, // id
                        'avatar': '', // 头像路径 120px左右那个图
                    }
                ]
            }
        ]
        'page_total': //数据总条数
    }

## （设计师）提交方案: commitDraft

### 场景

设计师提交设计方案

### 获取方式

    POST

### 参数

#### header

    token

#### query

    {
        'id': // 订单ID
        'solution': [//方案
            {
                'image_id': // 图片ID
                'explain': // 设计描述
            },
            // ...
        ],
        '3d_url': // 3d案例的链接
        'explain': // 设计说明
        'process_id': // 进度ID
        'type': // 1为初稿、2为终稿、3为上传设计师自己案例
    }

### 返回数据

    {
        // ... status, messages
    }

### 说明

- 提交设计稿给予设计师积分奖励，多少由后台配置

## （设计师）获取订单进度详情: getDesignerTaskProcess

### 场景

设计师查看自己单个订单的进度状态

### 获取方式

    GET

### 参数

#### header

    token

#### query

    {
        'id': // 订单ID
    }

### 返回数据

    {
        // ... status, messages
        'content': {
            'my_step_list':[
                {
                    'process_id': // 进度ID
                    'stepnum':  // 进度步骤数
                    'steptitle':  // 进度步骤名称
                    'choose':  // 用户选择状态
                    'examine':  // 步骤审核状态 判断是否需要修改设计
                }
                // ...
            ],
            'order_status': //订单状态，从设计师与订单关联表查
        }
    }

## （设计师）查看订单设计详情: getDesignerTaskDraft

### 场景

设计师查看自己提交的方案

### 获取方式

    GET

### 参数

#### header

    token

#### query

    {
        'process_id': // 进度ID
        'order_id': // 订单ID
    }

### 返回数据

    {
        // ... status, message
        {
            'solution': [//提交方案详情
                {
                    'image':{
                        'small_path': String, // 图片路径
                        'medium_path': String, // 图片路径
                        'big_path': String, // 图片路径
                    }
                    'explain': // 设计描述
                    'part': //房间名称
                },
                // ...
            ],
            '3d_url': // 3d案例的链接
            'explain': // 设计说明
        }
    }

## （用  户）查看订单设计详情: getTaskDraft

### 场景

用户个人中心查看设计师提交的方案

### 获取方式

    POST

### 参数

#### header

    token

#### query

    {
        'id': //
        'process_type': // 0：初稿；1：终稿；2：施工图
    }

### 返回数据

    {
        // ... status, message
        'content': {
            'content': [
                {
                    'processID': //
                    'designerID': //
                    'designer_name': //
                    '3durl': //
                    'explain': //
                    'solution': [
                        {
                            'image':{
                                'small_path': String, // 图片路径
                                'medium_path': String, // 图片路径
                                'big_path': String, // 图片路径
                            }
                            'part_name': // 房间名称
                            'explain': // 设计描述
                        },
                        // ...
                    ],
                    'examine_time': //
                    'useraction':  // 用户处理情况
                }
                // ...
            ]
        }
    }

## （用  户）选择设计方案: chooseTaskDraft

### 场景

用户在个人中心选择喜欢的方案（初稿、终稿）

### 获取方式

    POST

### 参数

#### header

    token

#### query

    {
        'id': Int, // 订单ID
        'process_id': Int, // 进度ID
        'isselected': Boolean // 选择||淘汰
        'explain': String // 理由
        'process_type': // 0：初稿；1：终稿；2：施工图
    }

### 说明

- 需要根据进度类型process_type判断该进度用户是否达到了选择案例数量上限，达到返回message错误提示
- 用户选择的设计稿给予设计师积分奖励，多少由后台配置
- 如果用户初稿，终稿选择个数够了，其余没有设计师的订单状态就全部改为完结，不能继续操作

### 返回数据

    {
        // ... status, message
    }

## （用  户）评价: commentTask

### 场景

订单完成，用户对设计师评价

### 获取方式

    POST

### 参数

#### header

    token

#### query

    {
        'id': // 订单ID
        'designer_id': // 设计师ID
        'service_score': Int, // 服务分数
        'design_score': Int, // 设计分数
        'comment': String // 评价详情
    }

### 返回数据

    {
        // ... status, message
    }

### 说明

- 用户评价成功给与积分奖励，多少由后台配置


## （公  司）查看订单详情: getCompanyTaskDetail

### 场景

公司个人中心查看订单详情和设计师提交的方案

### 获取方式

    GET

### 参数

#### header

    token

#### query

    {
        'id': // 订单id
        'designer_id': // 设计师id
    }

### 返回数据

    {
        // ... status, message
        'content': {
            'content': [
                {
                    'task': {
                        'sn': // 订单编号
                        'release_time': // 订单发布时间
                        'area': // 面积
                        'unit': // 户型
                        'house_status': // '旧房翻新'||'新房'
                        'house_type': // '跃层'||'平层'||'别墅'
                        'province': // 省
                        'city': // 市
                        'region': // 区
                        'village': // 小区名称
                        'design_budget': // 设计预算
                        'budget': // 装修预算
                        'info': // 备注内容
                        'address': // 地址
                        'measure_time': // 量房时间
                        'customer': {
                            'name': // 客户姓名
                            'hobby': // 爱好
                            'phone': // 客户电话，此字段需鉴权，用户选择初稿后才返回此字段
                            'members': [
                                {
                                    'relation': // 与用户的关系，父亲、母亲..
                                    'age': // 年龄
                                    'hobby': // 爱好
                                    'style': // 偏爱风格
                                    'color': // 偏好颜色
                                    'info': // 备注
                                }
                                // ...
                            ]
                        },
                        'step_title': // 进度状态，从进度表查询
                    },
                    'solution': { // 方案
                        'designer_id': // 设计师id
                        'designer_name': // 设计师姓名
                        'first_draft': { // 初稿
                            'process_id': // 进度id
                            '3d_url': //3d
                            'examine_time': // 审核时间
                            'content': [
                                {
                                    'image':{
                                        'small_path': String, // 图片路径
                                        'medium_path': String, // 图片路径
                                        'big_path': String, // 图片路径
                                    }
                                    'part_name': // 房间名称
                                    'explain': // 设计描述
                                },
                                // ...
                            ],
                            'explain': //
                            'useraction':  // 用户处理情况
                        },
                        'final_draft':{ // 终稿
                            'process_id': // 进度id
                            '3d_url': //3d链接
                            'examine_time': //审核时间
                            'content': [
                                {
                                    'image':{
                                        'small_path': String, // 图片路径
                                        'medium_path': String, // 图片路径
                                        'big_path': String, // 图片路径
                                    }
                                    'part_name': // 房间名称
                                    'explain': // 设计描述
                                },
                                // ...
                            ],
                            'explain': //
                            'useraction':  // 用户处理情况
                        },
                        'cad':{ // 施工图凭证
                            'process_id': //进度id
                            'examine_time': //审核时间
                            'image':{
                                'small_path': String, // 图片路径
                                'medium_path': String, // 图片路径
                                'big_path': String, // 图片路径
                            }
                            'explain': // 施工图凭证描述
                        },
                    }
                }
                // ...
            ]
        }
    }

## （公  司）审核设计师的设计: reviewDraft

### 获取方式

    post

### 参数

#### header

    token

#### query

    {
        'process_id': // 进度id
        'ispass': Int // 1通过，2不通过
        'explain': String // 处理说明
    }

### 返回数据

    {
        // ... status, message
    }

### 说明

- 需要判断公司权限
- 最后施工图审核通过后订单完结，给予公司积分奖励，多少由平台配置

## （公  司）查看员工列表: getStaffList

### 获取方式

    GET

### 参数

#### header

    token

#### query

    {
        'type': // 默认为空查询在职
        'role_id': // 角色id；默认为3；设计师3，工长11，工程部经理12，材料部经理13，监理14，巡检15
        'page': // 当前页
        'size': // 每页显示数量
    }

### 返回数据

    {
        // ... status, message
        'content':{
            'staff_list':[
                {
                    'name': // 设计师名字
                    'id': // 设计师id
                    'level': // 设计师等级
                    'title': // 设计师称谓；高级设计师、中级设计师、资深设计师...
                    'isincumbent': 1||2 // 1:入职；2：在职；3.离职。
                    'location': {
                        'province': // 省
                        'city': // 市
                        'region': // 区
                    }
                    'work_years': // 从业年限
                    'good_style': // 擅长风格
                    'photo':{
                        'ori_path': // 原始图路径
                        'big_path': // 大图路径
                        'mid_path': // 中图路径
                        'sml_path': // 小图路径
                    }
                },
                // ...
            ],
            'page_total': // 数据总条数
        }
    }

## （公  司）员工操作: manageStaff

### 获取方式

   post

### 参数

#### header

    token

#### query

    {
        'staff_id_list': Array, // 员工们的id集合
        'isincumbent': 1||2 // 1:入职；2：在职；3.离职。
        'coin': //公司分配给设计师的虚拟币数量
    }

### 说明

- 员工离职其账户的益币员工不予退回

### 返回数据

    {
        // ... status, message
    }

## （公  司）查看工地列表: getCompanyProjectList

### 获取方式

    GET

### 参数

#### header

    token

#### query

    {
        'process': // 默认全部 1:施工中；2：已竣工；
        'start_time': // 开工时间；
        'end_time': // 结束时间；
        'step_id': // 节点；
        'keywords': // 查询关键字；
        'page': //当前页
        'size': //每页数量
    }

### 返回数据

    {
        // ... status, message
        'content':{
            'project_list': [
                {
                    'project_id': 工地id
                    'village': // 小区名称
                    'costomer_name': // 业主姓名
                    'area': // 面积
                    'unit': // 户型
                    'style': // 风格
                    'complete_status': // 施工状态
                    'province': // 省
                    'city': // 市
                    'region': // 区
                    'address': // 地址
                    'cover':{ //封面图
                        'ori_path': // 原始图路径
                        'big_path': // 大图路径
                        'mid_path': // 中图路径
                        'sml_path': // 小图路径
                    }
                }
                // ...
            ],
            'page_total': // 数据总条数
        }
    }

## （平台首页）获取公司列表：getCompanyList

### 获取方式

    GET

### 参数

    {
        'query': {
            'keyword': // 用户查询的关键字，默认为空。
            'service_type': // 家装公司、工装公司、软装公司
            'region': // 区
            'credit_level': // 信用等级
            'ensure': // 装修保障
            'isrecommend': // 默认空；1为推荐的公司
            'isindex': // 默认为空，获取全部。1为获取index的。
        },
        'sort': String, // total_score总评分\praise口碑\design设计分\service服务分\quality工程质量分\project_score工地分\（字段存在正序，不存在默认倒序）
        'page': // 页码
        'size': // 页长
    }

### 返回数据

    {
        // ... status, message
        'content': {
            'company_list': [
                {
                    'id': // 公司ID
                    'name': // 公司名
                    'credit_level': // 信用级别
                    'case_num': // 案例数
                    'project_num': // 工地数
                    'comment_num': // 公司评论数
                    'location': {
                        'province': // 省
                        'city': // 市
                        'region': // 区
                        'address': // 地址
                        'longitude': // 经度
                        'latitude': // 纬度
                    }
                    'phone': // 公司电话
                    'consult_num': // 公司咨询量
                    'praise': // 口碑值
                    'design_score': // 设计分
                    'service_score': // 服务分
                    'quality_score': // 工程质量分
                    'project_score': // 工地分
                    'logo': { // logo图
                        'ori_path': // 原始图路径
                        'big_path': // 大图路径
                        'mid_path': // 中图路径
                        'sml_path': // 小图路径
                    }，
                    'cover': { // 公司首页封面图
                        'ori_path': // 原始图路径
                        'big_path': // 大图路径
                        'mid_path': // 中图路径
                        'sml_path': // 小图路径
                    }
                },
                // ...
            ],
            'page_total': // 数据总条数
        }
    }

## （公司首页）查看公司设计师列表: getCompanyDesignerList

### 场景

用户查看公司信息，只展示在职设计师

### 获取方式

    GET

### 参数

    {
        'id': // 公司ID
        'keyword': // 用户查询的关键字，默认为空。
        'style': // 风格id，现代、田园 ...
        'sort_by': //排序按: 1人气，2评分，3案例数，4从业年限，5收费标准（字段不存在默认倒序，字段存在正序）
        'page': // 当前页
        'size': // 每页显示数量
    }

### 返回数据

    {
        // ... status, message
        'content':{
            'designer_list':[
                {
                    'id': // 设计师id
                    'name': // 设计师名字
                    'level': // 设计师等级
                    'title': // 设计师称谓；高级设计师、中级设计师、资深设计师...
                    'location': {
                        'province': // 省
                        'city': // 市
                        'region': // 区
                    }
                    'work_years': // 从业年限
                    'good_style': // 擅长风格
                    'photo':{ // 设计师照片
                        'ori_path': // 原始图路径
                        'big_path': // 大图路径
                        'mid_path': // 中图路径
                        'sml_path': // 小图路径
                    },
                    'case_num': // 案例数
                    'case_list': [ // 3条案例
                        {
                            'id': // 案例id
                            'name': // 案例名
                            'cover': { // 案例封面图
                                'ori_path': // 原始图路径
                                'big_path': // 大图路径
                                'mid_path': // 中图路径
                                'sml_path': // 小图路径
                            }
                        }
                        // ...
                    ]
                },
                // ...
            ],
            'page_total': // 数据总条数
        }
    }

## 获取装修公司活动列表: getPromotionList

### 获取方式

    GET

### 场景

前端页面展示最新装修公司活动的推荐列表

### 参数

    {
        'company_id': // 装修公司id。
        'keyword': // 用户查询的关键字，默认为空。
        'mark': // 默认为空 ，显示位置。
        'isrecommend': // 默认为空，获取全部；1为获取推荐的。
        'valid': // 默认为空，获取全部。1为获取有效期内的，2为过期的。
        'ishot': // 默认为空，获取全部。1为获取hot的。
        'isindex': // 默认为空，获取全部。1为获取index的。（平台的字段）
        'page': // 页码
        'size': // 页长
    }

### 返回数据

    {
        // ... status, message
        'content': {
            'action_list': [
                {
                    'id': // 活动id
                    'title': // 活动标题
                    'discription': // 活动描述
                    'url': // 活动详情页
                    'cover': { // 封面图
                        'ori_path': // 原始图路径
                        'big_path': // 大图路径
                        'mid_path': // 中图路径
                        'sml_path': // 小图路径
                    }
                },
                // ...
            ],
            'page_total': // 总页数
        }
    }

### 说明

- 返回数据按level倒序排序

## （平台/公司/设计师）获取在建工地列表: getWorkingProjectList

### 获取方式

    GET

### 参数

    {
        'company_id': // 公司id，默认为空。
        'designer_id': // 设计师id，默认为空。
        'keyword': // 用户查询的关键字，默认为空。
        'process': // 默认全部 1:施工中；2：已竣工；
        'isrecommend': // 默认为空，获取全部；1为获取推荐的。
        'isindex': // 默认为空，获取全部。1为获取index的。
        'style': // 风格id。
        'unit': // 户型id。
        'page':
        'size':
    }

### 返回数据

    {
        // ... status, message
        'content':{
            'project_list': [
                {
                    'project_id': 工地id
                    'village': // 小区名称
                    'costomer_name': // 业主姓名
                    'designer': // 设计师
                    'foreman': // 工长
                    'supervisor': // 监理
                    'area': // 面积
                    'unit': // 户型
                    'style': // 风格
                    'cost': // 造价
                    'complete_status': // 施工状态
                    'current_step': // 当前施工进度（大阶段nodeid）
                    'location': {
                        'province': // 省
                        'city': // 市
                        'region': // 区
                        'address': // 地址
                        'longitude': // 经度
                        'latitude': // 纬度
                    }
                    'fans_num': // 关注数
                    'cover':{
                        'ori_path': // 原始图路径
                        'big_path': // 大图路径
                        'mid_path': // 中图路径
                        'sml_path': // 小图路径
                    }
                }
                // ...
            ],
            'page_total': // 数据总条数
        }
    }

## （用  户）喜欢点赞: like

### 获取方式

    post

### 场景

用户点击喜欢在建工地

### 参数

    {
        'project_id': // 工地id
    }

### 返回数据

    {
        // ... status, message
    }

## （平台首页）推荐设计师列表: getIndexDesignerList

### 获取方式

    GET

### 参数

    {
        'isrecommend': // 默认为空，获取全部；1为获取推荐的。
        'isindex': // 默认为空，获取全部。1为获取index的。
        'page': // 页码
        'size': // 页长
    }

### 返回数据

    {
        // ... status, message
        'content': {
            'designer_list': [
                {
                    'id': // 设计师id
                    'name': // 设计师名字
                    'level': // 设计师等级
                    'concept': // 设计师理念
                    'photo': { // 照片
                        'ori_path': // 原始图路径
                        'big_path': // 大图路径
                        'mid_path': // 中图路径
                        'sml_path': // 小图路径
                    }
                    'case_num': // 案例数
                },
                // ...
            ],
            'page_total': // 总页数
        }
    }

## （平台/公司/设计师）获取案例列表: getCaseList

### 获取方式

    GET

### 参数

    {
        'keyword': // 用户查询的关键字，默认为空。
        'company_id': // 公司id，为空查询全部
        'designer_id': // 设计师id，为空查询全部
        'isrecommend': // 默认为空，获取全部；1为获取推荐的。
        'isindex': // 默认为空，获取全部。1为获取index的。
        'style': // 风格id
        'unit': // 户型id。
        'type': // 类型id。家装、工装、软装
        'page': //当前页
        'size': //每页数量
    }

### 返回数据

    {
        // ... status, message
        'content': {
            'case_list': [
                {
                    'id': // 案例id
                    'name': // 案例name
                    'style': // 案例风格
                    'unit': // 案例户型
                    'area': // 面积
                    'cost': // 案例造价
                    'funs_num': // 赞数
                    'cover': { // 封面图
                        'ori_path': // 原始图路径
                        'big_path': // 大图路径
                        'mid_path': // 中图路径
                        'sml_path': // 小图路径
                    },
                    'designer':{ // 设计师
                        'id': //
                        'name': //
                        'avatar': { // 照片
                            'ori_path': // 原始图路径
                            'big_path': // 大图路径
                            'mid_path': // 中图路径
                            'sml_path': // 小图路径
                        },
                    }
                }
                // ...
            ],
            'page_total': //数据总条数
        }
    }

## （公司首页）获取装修公司详情: getCompanyDetail

### 获取方式

    GET

### 参数

    {
        'company_id': // 装修公司id
    }

### 返回数据

    {
        // ... status, message
        'content': {
            'content': {
                'id': // 装修公司id
                'name': // 装修公司名字
                'phone': // 电话
                'credit_level': // 装修公司信用等级
                'total_score': // 总评分
                'praise': // 装修公司口碑
                'design': // 装修公司设计分
                'service': // 装修公司服务分
                'quality': // 装修公司工程质量分
                'project': // 装修公司工地分
                'back_image': // 装修公司背景图路径
                'logo': { // logo图
                    'ori_path': // 原始图路径
                    'big_path': // 大图路径
                    'mid_path': // 中图路径
                    'sml_path': // 小图路径
                },
                'location': {
                    'province': // 省
                    'city': // 市
                    'region': // 区
                    'address': // 地址
                },
                'case_num': // 案例数
                'fans_num': // 人气数
                'introduce': // 公司简介
                'license': [ // 资质证书
                    {
                        'ori_path': // 原始图路径
                        'big_path': // 大图路径
                        'mid_path': // 中图路径
                        'sml_path': // 小图路径
                    }
                    // ...
                ],
                'service_content': {//服务
                    'type_list': Array, // id=>名称
                    'region_list': Array, // id=>名称
                    'price': String,
                    'style': Array, // id=>名称
                }
            }
        }
    }

## （公司页面）获取设计师详情: getDesignerDetail

### 获取方式

    GET

### 参数

    {
        'id': // 设计师id
    }

### 返回数据

    {
        // ... status, message
        'content': {
            'content': {
                'id': // 设计师id
                'name': // 设计师名字
                'phone': // 设计师电话
                'level': // 设计师等级
                'location': {
                    'province': // 省
                    'city': // 市
                    'region': // 区
                }
                'score': // 评分
                'case_num': // 案例数
                'fans_num': // 人气数
                'work_years': // 从业年限
                'education': // 学历
                'school': // 学校
                'field': // 专业
                'good_part': // 擅长空间
                'good_style_list':[ // 擅长风格
                    // ...
                ],
                'company': // 所属公司
                'photo':{ // 设计师照片
                    'ori_path': // 原始图路径
                    'big_path': // 大图路径
                    'mid_path': // 中图路径
                    'sml_path': // 小图路径
                },
                'honor': String // 个人荣誉
            }
        }
    }

## （公司页面）获取公司评价: getCommentList

### 获取方式

    GET

### 参数

    {
        'id': // 公司id
        'query': // 1为工地，2为设计，3为案例，默认为1
    }

### 返回数据

    {
        // ... status, message
        'content': {
            'comment_list': [
                {
                    'user': { // 评论人
                        'avatar': { // 头像
                            'ori_path': // 原始图路径
                            'big_path': // 大图路径
                            'mid_path': // 中图路径
                            'sml_path': // 小图路径
                        },
                        'nick': // 昵称
                    },
                    'time': // 评论时间
                    'content': // 评论内容
                },
                // ...
            ]
        }
    }

## 非业主评论（工地、设计、案例）: discuss

### 获取方式

    post

### 参数

#### header

    token

#### query

    {
        'type': // 1工地，2设计，3案例
        'id': // 工地id、设计id、案例id
        'content': String // 评论内容
    }

### 返回数据

    {
        // ... status, message
    }

### 说明

- 评论成功给予积分奖励，多少由后台配置

## 所有用户提交认证操作: certificate

### 请求方式

    POST

### 参数

    token

### query

    {
        'nick_name': //昵称
        'name': //用户真实姓名或者公司的全称
        'sex': //性别
        'province': // 省
        'city': // 市
        'region': // 区
        'address':// 详细地址
        'company_id': //公司id（认证设计师，工长，监理，材料经理，巡检等使用）（普通用户公司选项禁用默认益装网，其余角色必须选公司）
        'type': //1个人认证，2公司认证(单选)
        'role_id': //角色id（下拉框，默认普通用户）
        'service_type': //公司服务类型：家装，工装，软装（多选）
        'service_region': //服务区域（多选）
        'good_style': //擅长风格（多选）
        'good_port': //擅长空间（多选）
        'year': //从业经验
        'honor': string //荣誉
        'idea': //理念
        'school'://毕业学校
        'education'://学历
        'field': //专业
        'introduction ':string //公司简介
        'header_id'://头像id
        'logo_id'://公司logo_id
        'qualification_id'://资质证书id
    }

### 说明

- 完成认证送积分 具体给多少通过平台后台配置

### 返回数据

    {
        // ... status, message
    }  

## 认证专用上传图片: certificateUpload

### 场景

-用户上传头像，公司上传logo，公司设计师工长等上传从业资质证书公用接口，公司上传自己首页封面图，上传充值凭证

### 获取方式

    POST

### 参数

### header

    token

### query

    {
        'scene': Int, // 图片场景；0：用户上传头像；1：公司上传logo；2：公司设计师工长等上传从业资质证书；3公司上传自己首页封面图；4上传充值凭证
        'iamge_type': String, // 'image'
        'width': Int, // 图片宽度 px
        'height': Int, // 图片高度 px
        'size': Int, // 图片大小 bye
    }

### 说明

每次调用接口，仅上传一张图片,关联用户

### 返回数据

    {
        // ... status, message
        'content': {
            'content': {
                'img_id': Int // 图片ID
                'ori_path': // 原始图路径
                'big_path': // 大图路径
                'mid_path': // 中图路径
                'sml_path': // 小图路径
            }
        }
    }

## （设计师/公司）充值: recharge

### 请求方式

    post

### 参数

    token

### query

    {
        'money': // 充值金额
        'proof_id': // 凭证id (保存在充值日志表)
    }  

### 说明

该充值信息都是保存在充值日志表中，该日志每条都需要财务后台审核填写金额与凭证是否一致，通过后才充值到其账户

### 返回

    {
        // ... status, message
    }

### 说明

- 财务审核通过后给与对应账户积分奖励  （该积分多少由金额乘以换算比例，换算比例由后台配置）

## 公司名模糊查询: getCompanyName

### 请求方式

    get

### query

    {
        'search_msg': //查询关键字
        'size': //查询条数，默认为5条
    }

### 返回数据

    {
        'id': //公司id
        'name': //公司名称
    }

### 说明

- 根据关键字模糊查询公司名称
  
## 设计师发起公司变更操作: changeMyCompany

### 请求方式
  
    post

### 参数
  
    token

### query

    {
        'company_id': //公司id
    }  

### 返回数据
  
    {
        //...status,message
    }

### 说明
  
- 只有属于平台设计师才可发起申请，已有公司的设计师没有此操作

## 获取系统参数列表（rest-macro-controller 该接口已有）

## (公司)提交活动操作

### 请求方式

    POST

### query

    {
        'position_id': //展示位置id
        'ad_title': //广告名称
        'ad_content': //广告内容
        'ad_link': //广告链接
        'area_name': string //活动有效地区
        'start_time':  //活动开始时间
        'end_time':  //活动结束时间
        'link_type': int //活动内链或外链 0-外部链接 1-内容链
        'link_type': int //活动内链或外链 0-外部链接 1-内容链
        'is_show': //是否公司首页显示
        'is_hot': //是否热门
        'is_recommend': //是否推荐
        'cover_id': //封面图id
        'province_id': //所属省
        'city_id': //所属城市
        'region_id': //所属区
        'type':int //该活动属于公司1为平台，2为公司
    }  

### 返回数据

    {
        //...status,message
    }

## （公司）上传活动封面图

### 请求方式

    POST

### 参数

    token

### query

    {
        'iamge_type': String, // 'image'
        'width': Int, // 图片宽度 px
        'height': Int, // 图片高度 px
        'size': Int, // 图片大小 bye
    }

### 返回数据

    {
        // ... status, message
        'content': {
            'content': {
                'img_id': Int // 图片ID
                'ori_path': // 原始图路径
                'big_path': // 大图路径
                'mid_path': // 中图路径
                'sml_path': // 小图路径
            }
        }
    }  

## 提交申请等级

### 请求方式

    POST

### 参数

    token

### query

    {
        'level': //申请等级
        'content': //申请说明
    }

### 返回数据

    {
        // ... status, message
    }