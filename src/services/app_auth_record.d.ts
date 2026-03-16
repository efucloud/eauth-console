// AppAuthRecordCreate 应用认证记录创建
export type AppAuthRecordCreate = { 
  //应用ID
  applicationId?: number;
  //响应编码 返回给浏览器客户端
  //最大长度: 50
  code: string;
  //用户ID
  userId: number;
}; 
// AppAuthRecordDetail 应用认证记录详情
export type AppAuthRecordDetail = { 
  //主键
  id: number;
  //创建时间
  createdAt: string;
  //创建时间
  updatedAt: string;
  //应用ID
  applicationId?: number;
  //响应编码 返回给浏览器客户端
  //最大长度: 50
  code: string;
  //用户ID
  userId: number;
}; 
// AppAuthRecordDetailList 应用认证记录列表响应
export type AppAuthRecordDetailList = { 
  //当前页数据
  data?: AppAuthRecordDetail[];
  //数据库满足条件的数据总数
  total: number;
}; 
