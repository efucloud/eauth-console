// CaptchaCreate 行为式校验码创建
export type CaptchaCreate = { 
  //编码
  //最大长度: 255
  code: string;
  //校验类型
  //最大长度: 20
  category: string;
  //校验内容
  content?: string;
}; 
// CaptchaDetail 行为式校验码详情
export type CaptchaDetail = { 
  //主键
  id: number;
  //创建时间
  createdAt: string;
  //编码
  //最大长度: 255
  code: string;
  //校验类型
  //最大长度: 20
  category: string;
  //校验内容
  content?: string;
}; 
// CaptchaDetailList 行为式校验码列表响应
export type CaptchaDetailList = { 
  //当前页数据
  data?: CaptchaDetail[];
  //数据库满足条件的数据总数
  total: number;
}; 
