// 引入mock
const Mock = require('mockjs');
// 获取 mock.random 对象
const Random = Mock.Random;
// mock一组数据
const produceNewsData = function () {
    let articles = [];
    for (let i = 0; i < 5; i++) {
        let newArticleObject = {
            title: Random.csentence(5, 30), // Random.csentence(min, max)
            thumbnail_pic_s: Random.dataImage('300x250', 'mock图片'), // 生成一段随机的 Base64 图片编码
            author_name: Random.cname(), // 随机生成一个常见的中文姓名
            date: Random.date() + ' ' + Random.time() // 生成日期 YY-MM-DD ，以及一个随机时间字符串
        };
        articles.push(newArticleObject)
    }
    
    return {
        articles: articles
    }
}

// Mock.mock(url, post/get, 返回的数据)
Mock.mock('./news/index', 'post', produceNewsData);