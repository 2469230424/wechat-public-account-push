/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  USE_PASSAGE: 'push-plus',
  
  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx3fe798c15cb745e6',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'b83e164adbe9eced18ac6dbb8f31025a',

  PROVINCE: '江西',
  CITY: '九江',

  USERS: [
    {
      // 想要发送的人的名字
      name: '阿柒',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '494e93fbf13e4b90b1f548af56dee550',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0001',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '09-23',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '燃燃', year: '2007', date: '09-23',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '燃燃', year: '2007', date: '09-23',
        },
        {
          type: '节日', name: '相识纪念日', year: '2025', date: '02-12',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2025-02-23' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'Zx7aWrDhEcNIbuHkcqndiPULBt284FrMyEjdkt2NrAc',

  CALLBACK_USERS: [
    {
      name: '阿柒',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'on3D27ELh4WWWYq_oDoZBaprgPB4',
    }
  ],

}

module.exports = USER_CONFIG

