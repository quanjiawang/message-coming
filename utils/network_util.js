// 测试环境
// var hostAddress = 'https://test.h5.bicaijia.com/';
// 预生产环境
var hostAddress = 'https://prd.h5.bicaijia.com/'
// demo环境
// var hostAddress = 'https://demo.h5.bicaijia.com/'
var version = '0.6.2';
var baiduMapKey = "S5U4ccafK5gr89gvB7Xg8jLRfOCU96zs";
var util = require('util.js');

var wxType = 3;
//请求sessionKey
var requestWXSession = "wxcx/sessionkey";
//微信小程序获取unionId
var postWxEncrypted = "wxcx/unionid";
//获取用户审核注册信息
var getUserAccountInfo = "saleuser/base";
//解密用户绑定微信的手机号
var wxBindingPhone = "wxcx/wxbindingphonebyactive";
//代卖注册获取区域
var getSaleArea = "base/getSaleArea";
//代卖注册获取区域市场
var getSaleAreaMarket = "base/getSaleAreaMarket";
//注册验证码
var getSms = "wxcx/sendvalidcode";
//不用验证码强绑
var forceBind = "wxcx/forceupdatebinded"
//通过验证码绑定
var forceCodeBind = "wxcx/bindingwithvalidcode";
//获取所有一、二级分类
var regCategory = "category/list";
//提交审核（注册代卖）
var agentRegister = "saleuser/saveMerchantMember";
//提交联系方式
var contactUs = "h5/daimai/addContact/";

var QINIU_ADDRESS = 'http://img1.bicaijia.com'
//七牛token 
var generateToken = 'picture/qiniu/generate.do'
//业务员登录（认证）
var login = "userlogin/login.do"
// 获取tokenn
var getToken = 'userlogin/generate.do'
//代卖列表
var saleuserList = 'saleuser/list'
//代卖车次列表
var bCarBatchList = 'daimai/bCarBatch/list'
//车次动态列表
var bcarbatchDynamicList = 'bcarbatch/mp/dynamic/list'
// 市场列表
var marketList = 'market/list'
//获取二级品类
var categoryList = 'category/list'
//代卖获取品类列表
var mainCategoryList = 'main-category/list'
//车次商品名称列表
var carGoodsClass = 'bcarbatch/mp/goods/list'
//车次商品动态类型
var goodsDynamicsType = 'bcarbatch/dynamic/type/list'
// 车次动态详情
var carDetailList = 'bcarbatch/dynamic/detail'
// 车次动态录入
var carInputting = 'bcarbatch/mp/dynamic/submit'
//市场行情录入
var quotationsInputting = 'bMarketQuotations/create'
//市场行情修改
var quotationsChange = 'bMarketQuotations/update'
//代卖个人信息
var saleuserBase = 'saleuser/base'
//行情列表
var bMarketQuotationsList = 'bMarketQuotations/list'
//市场行情商品品类列表
var bMarketQuotationsCategoryList = 'bMarketQuotations/category/list'
//市场行情添加二级类目
var bMarketQuotationsCategoryAdd = 'bMarketQuotations/category/add'
//市场经理录入
var SCJLInputting = 'bMarketQuotations/create'
//市场经理详情
var SCJLdetail = 'bMarketQuotations/detail'
//创建车次
var bCarBatchAddBCarBatch = 'daimai/bCarBatch/addBCarBatch'
//代卖车次详情
var bCarBatchDetail = 'daimai/bCarBatch/detail'
//市场行情代卖列表
var bMarketQuotations = 'bMarketQuotations/daimai/list'
var bCarBatchDetail = 'daimai/bCarBatch/detail'
//修改发货详情
var editSendGoodsInfo = 'daimai/bCarBatch/editSendGoodsInfo'
//修改收货详情
var editReceiveGoodsInfo = 'daimai/bCarBatch/editReceiveGoodsInfo'
//修改车次销售信息
var editCarBatchSaleInfo = 'daimai/bCarBatch/editCarBatchSaleInfo'
//修改车次商品信息
var editCarBatchGoods = 'daimai/bCarBatch/editCarBatchGoods'
//编辑代卖个人信息
var updateB1SaleUser = 'saleuser/updateB1SaleUser.do'
//代卖个人信息数据统计
var sellNumConut = 'saleuser/userData'
//删除车次动态
var bcarbatchDynamicDelete = 'bcarbatch/mp/dynamic/delete'
//市场经理绑定的市场列表
var userMarketList = 'h5/daimai/s13/user/market/list'
//获取一级品类列表
var getClassList = 'first-main-category/list'
//获取需求列表
var getAllDemand = 'b-delivery-goods/list'
//修改车次状态
var updataStatus = 'daimai/bCarBatch/updateBcarBatchStatus'
//车次数据
var trainData = 'daimai/bCarBatch/data'
//业务员接货数据
var receiveGoodsData = '/salesman/receiveGoodsData'
// 业务员发货数据
var sendGoodsData = '/salesman/sendGoodsData'

var ApiUrl = {
  //七牛token 
  QINIU_ADDRESS: 'http://img1.bicaijia.com',
  //货主推荐的代卖列表
  recommendAgentList: 'require/recommend/list',
  //合作和申请代卖接口 
  getAgentList: '/require/cooperate/list',
  //需求预览基础数据
  demandBaseInfo: 'require/data',
  //结束发货需求
  endDemand: 'b-delivery-goods/close',
  //代卖市场类别
  agentMarketList: '/market/list',
  //货主列表
  ownerList: 'goodsOwner/shipperList',
  //车次列表筛选数据
  screeningList: 'bcarbatch/select/datas',
  //0.2.3
  //创建申请需求
  createDemand: 'deliveryApply/create',
  //车次类型
  carTypeList: 'deliveryApply/carType/list',
  //申请详情
  demandDetails: 'deliveryApply/detail',
  //一级品类列表
  firstCategoriesList: '/category/bdelivery/first/list',
  //需求大厅
  demandList: '/bdeliverygoods/list',
  //提交拒绝需求理由
  refuseDemand: '/bdeliverygoods/refuse',
  // 发货需求代卖列表  0申请 1合作
  bdeliverygoodsList: '/bdeliverygoods/saler/list',
  //发货需求详情 0:预览数据 1：详情数据
  bdeliveryDetail: '/bdeliverygoods/detail',
  //创建申请时代卖列表
  daimaiList: 'deliveryApply/daimai/list',
  //获取编辑市场记录的列表
  ediMarketRecordList: 'market/fee/standard/list',
  //订单明细列表
  billList: 'daimai/bCarBatch/orderList',
  //新增订单记录
  currentRecord: 'daimai/bCarBatch/order/create',
  //修改订单
  changeRecord: 'daimai/bCarBatch/order/update',
  //删除订单
  deleteRecord: 'daimai/bCarBatch/order/delete',
  //代卖市场费用保存
  submitMarketRecord: 'user/market/fee/save',
  //查看市场费用详情  0编辑 1预览
  chekckMarketRecord: '/user/market/fee/detail',
  //市场费用列表
  marketCostList: 'user/market/fee/list',
  //调价提交
  adjustPriceSubmit: 'priceadjustment/notice',
  //提交所选规格
  screening: 'bDelivery/default/specification/save',
  //获取筛选规格
  getScreeningClass: 'bDelivery/default/specification',
  //获取省市列表
  getProvinceCity: '/base/provinceCitys/lists',
  //根据市获取区
  getRegionByCity: '/base/region/lists',
  //根据市获取市场
  getMarketByCity: '/base/getMarketListByCity',
  //创建发货需求（0.2.9）
  createMyDemand: '/bdeliverygoods/create',
  //需求结束招募（0.2.9）
  closeMyDemand: '/bdeliverygoods/close',
  //删除我的发货需求（0.2.9）
  deleteMyDemand: '/bdeliverygoods/delete',
  //需求合作（0.2.9）
  cooperateDemand: 'deliveryApply/cooperation',
  //需求车次列表（0.2.9）
  demandTrainList: 'daimai/bCarBatch/cooperation/list',
  getScreeningClass: 'bDelivery/default/specification',
  //authentication实名认证
  authentication_url: 'saleuser/idCard/saveAudit',
  //货主feedback列表
  feedBackList: 'bCarBatch/shipperEvaluation/option/list',
  //shipperFeedBackDetail
  feedBackDetail: 'bCarBatch/shipperEvaluation/option/detail',
  //提交反馈
  submitFeedBack: 'bCarBatch/shipperEvaluation/option/solution',
  //意向基础数据
  intentionBasedata: 'intention/basedata',
  //创建意向货主
  intentionCreate: 'intention/create',
  //意向统计数据
  intentionStatistics: 'intention/statistics',
  //意向列表
  intentionList: 'intention/list',
  //访问记录列表
  intentionVisitList: 'intention/visit/list',
  //单个拜访记录详情
  intentionVisitDetail: 'intention/visit/detail',
  //创建拜访记录
  intentionVisitCreate: 'intention/visit/create',
  //合作列表
  cooperative_daimaiList: 'saleuser/b1SaleList',
  //合作代卖品类
  daimaiClass: 'saleuser/getQueryData',
  //市场列表
  marketList: 'market/list',
  //获取分类列表
  categoryList: 'category/list',
  //水果车次
  fruitsList: 'bgcarbatch/list',
  //创建一级水果车次
  currentCarFruits: 'bgcarbatch/create',
  //水果、蔬菜二级品类
  listScreening: 'category/list',
  //水果代卖列表
  fruitsDemandList: 'bgcarbatch/saler/list',
  //库存管理列表
  inventory: 'bgcarbatch/item/stock/list',
  //水果代卖列表
  fruitsDemand: 'bgcarbatch/market/salers',
  //添加代卖，创建水二级车次列表
  currentFruits: 'bgcarbatch/item/create',
  //获取调货时候代卖车次列表
  shiftCargoList: 'bgcarbatch/item/other',
  //添加二次车次库存记录
  addFruitsRecord: 'bgcarbatch/item/stock/create',
  //撤销水果调货
  backoutFruits: 'bgcarbatch/item/stock/cancel',
  //代卖车次回款回账
  listBackout: 'bgcarbatch/item/receivableAccount',
  //获取水果订单费用
  fruitsBill: 'bgcarbatch/item/saleInfo',
  //更新水果订单费用
  changeFruitsBill: 'bgcarbatch/item/saleInfo',
  //获取销售记录
  getMarketRecord: 'bgcarbatch/item/dynamic/list',
  //删除销售记录
  closeMarketRecord: 'bgcarbatch/item/dynamic/delete',
  //添加销售记录
  addMarketRecord: 'bgcarbatch/item/dynamic/create',
  //市场行情添加品类
  addInteractionClass: 'category/marketQuotation/list',
  //水果商品
  fruitsClassList: 'bgcarbatch/goods/list',
  //水果详情
  fruitsDetail: 'bgcarbatch/detail',
  //修改水果详情
  changeFruitsDetail: 'bgcarbatch/detail',
  //校验意向货主是否已添加过
  checkoutShipperPhone: 'intention/phoneCheck',
  //代卖列表下车次商品列表
  demandCommodityList: 'bgcarbatch/item/goods/stock',
  //获取蔬菜代卖车次部分回款记录
  getPortionRecord: 'daimai/bCarBatch/part-amount',
  //填写蔬菜代卖车次部分汇款记录
  writePortionMoney: 'daimai/bCarBatch/part-amount',
  //添加水果车次中的车次商品
  addFruitsCommodity: 'bgcarbatch/goods',
  //修改密码
  updateUserPwd: '/userlogin/updatePwd',
  //版本列表
  versionList: '/base/getVersionList',
  //版本明细
  versionInfo: '/base/getVersionInfoById',
  //用户捡回
  redeem: 'intention/shipper/pickUp',
  //history——list
  history_inlist: 'intention/shipper/ownuser/list',
  // 新增
  //搜索热门词
  getSearchHots: '/h5/daimai/hotword/list',
  //搜索行情
  searchQuotation: '/bmarketquotations/solr/list',
  // 0.3.0
  //首页筛选列表
  cmsFilterItem: '/h5/daimai/cmsPage/baseData',
  //首页列表
  cmsPageList030: '/h5/daimai/cmsPageList',
  // 热点行情货主详情
  shipper_car_list: '/daimai/bCarBatch/shipper-list',
  //方案列表
  programList: 'bDeliveryPlan/list',
  //方案费用列表
  costList: 'deliveryApply/carFee/list',

  shipperDetail: '/intention/quotationsUser/detail',
  //创建方案_program
  createProgram: 'bDeliveryPlan/create',
  //方案列表
  //方案费用列表
  //接货方案详情
  costDetail: 'bDeliveryPlan/detail',
  //修改接货方案
  costChange: 'bDeliveryPlan/update',
  //转发之前
  beforForward: 'bDeliveryPlan/preForward',
  //转发之后
  afterForward: 'bDeliveryPlan/forwardConfirm',
  //代卖认证审核列表（0.34）
  agentDetail: 'saleuser/audit-apply-list',
  //承诺（0.34）
  promise: 'merchant-base-promise',
  //查看代卖身份证照片（0.34）
  getAgentPhoto: 'saleuser/id-view',
  //审核通过
  agentPass: 'saleuser/apply-audit',
  //货主确认方案
  shipperYes: 'bDeliveryPlan/confirm',
  //0.3.5
  //当日战报
  paperDay: 'bmarkettarget/day/today',
  //当月
  paperMonth: 'bmarkettarget/day/month',
  //明后日目标
  paperPurpose: 'bmarkettarget/day/next',
  //新开货主
  paperShipper: 'bmarkettarget/month/newshipper',
  //业务员绑定市场列表
  bindMarketList: 'base/getUserMarketByUserAccountId',
  //工作日志在售车次
  onsaleCar: 'bCarbatch/workDay/onSaleCarBatch',
  //月完成情况
  monthStatus: 'bCarbatch/workDay/monthTargetInfo',
  //在途车次
  inwayCar: 'bCarbatch/workDay/onWayCarBatch',
  //预计车次
  futureCar: 'bCarbatch/workDay/estimateCarBatch',
  //添加市场目标基础数据
  calendar_detail: 'bmarkettarget/month/calendar',
  //编辑市场目标
  edit_calendar: 'bmarkettarget/day/edit',
  //模糊查询货主信息
  grabbleShipper: 'goodsOwner/visit/list',
  //添加和确认意向
  createVisit: 'shipperVisit/create',
  // 0.3.6
  // 新建货主
  createShipper: '/goodsOwner/crm/create',
  //货主列表
  crmShipperList: 'goodsOwner/crm',
  //一级品类
  firstCategory: 'category/first/list',
  //二级品类
  secondCategory: 'category/list',
  //获取拜访数量
  unVisitNumber: '/shipperVisit/unVisitNumber',
  //获取状态、归属、意向列表
  getGroup: 'base/getBaseDataListByGroup',
  //货主CRM详情
  shipperDetail: 'goodsOwner/crm/detail',
  // 意向详情
  intentDetail: 'shipperIntention/getInfoByQuery',
  //拜访详情
  shipperVisit: 'shipperVisit/detail',
  //保存或确认意向
  shipperIntension: 'shipperIntention/saveOrUpdate',
  //意向列表
  intendList: 'shipperIntention/getListByQuery',
  //拜访列表
  visitShipperList: 'shipperVisit/list',
  //保存或确认拜访
  visitUpdate: 'shipperVisit/update',
  //0.3.8
  //签收单商品信息
  signatureInfo: '/bcarbatchgoodssignature/info',
  //0.3.9
  //认款管理列表
  claimMoneyList: 'bbankcollection/list',
  // 认款管理详情
  claimMoneyDetail: 'bbankcollection/detail',
  // 认款管理详情选代卖
  claimDetailAgent: 'bbankcollection/saler/list',
  // 认款管理详情选车次
  claimDetailCar: 'bbankcollection/carbatch/list',
  // 认款管理详情提交
  claimDetailPost: 'bbankcollection/save',
  //市场经理获取绑定市场列表
  getBindMarket: 'h5/daimai/s13/user/market/list',
  //0.4.0
  //根据货主id获取货主未完成车次
  getCarBatchListByOwnerId: '/bmarkettrends/shipper/carbatchlist',
  //新建行情动态
  createNewDynamic: '/bmarkettrends/save',
  //行情动态详情
  getDynamicDetail: '/bmarkettrends/detail',
  //个人信息
  salesmanInfo: '/salesman/base',
  //业绩日报-每日业绩
  marketToday: '/bmarkettarget/day/marketToday',
  // 业绩日报-月度业绩
  marketMonth: 'bmarkettarget/day/marketMonth',
  //业绩日报-城市每日业绩
  cityToday: 'bmarkettarget/day/cityToday',
  // 业绩日报-城市月度业绩
  cityMonth: 'bmarkettarget/day/cityMonth',
  //  CRM日报-新货主转化
  newShipperTranfer: 'bshippertransformationaldata/details',
  //  CRM日报-合作货主
  coperationShipper: 'bshippertransformationaldata/list',
  // 市场行情动态列表
  getDynamicList: 'bmarkettrends/list',
  // 货主推荐
  getRecommendShipper: 'bRecommendedShipper/list',
  //0.4.1
  //验证手机号是否注册
  vaildPhoneUsed: '/goodsOwner/crm/validatePhone',
  //获取市场业务员
  getSalesByMarket: '/daimai/bCarBatch/getUserByMarketId',
  //拜访分配列表
  visitList: '/shipperVisitAssign/list',
  // 拜访分配详情
  getVisitAllocationDetail: 'shipperVisitAssign/detail',
  // 被分配人列表
  getAllocationList: 'shipperVisitAssign/managerList',
  // 新增拜访分配
  addNewAllocation: 'shipperVisitAssign/create',
  //0.4.2
  //转运申请&&调拨申请
  transferApply: '/bcarbatchtransferapply/transfer/apply',
  //转运申请-提交转运申请
  saveTransitionInfo: 'bcarbatchtransferapply/saveTransitionInfo',
  //调拨申请-调入代卖
  transferSale: '/bcarbatchtransferapply/transfer/apply/sale',
  //调拨申请-提交
  saveTransferApply: 'bcarbatchtransferapply/saveTransferApply',
  // 获取市场列表
  getBindMarketList: 'h5/daimai/s13/user/market/list',
  // 调拨申请列表
  getAllocationApplyList: 'bcarbatchtransferapply/transferApplyCarBatchList',
  // 调拨记录列表
  getAllocationRecordList: 'bcarbatchtransferapply/transferRecord',
  // 转场申请列表
  getTransferApplyList: 'bcarbatchtransferapply/transferApplyCarBatchList',
  // 转出记录列表
  getTransferOutRecordList: 'bcarbatchtransferapply/outRecord',
  // 转入记录列表
  getTransferInRecordList: 'bcarbatchtransferapply/inRecord',
  //转运申请
  transferApply: '/bcarbatchtransferapply/transfer/apply',
  //转运申请-转入市场列表
  transferMarket: 'bcarbatchtransferapply/getTransferMarket',
  //转运申请-转入代卖列表
  transitionDaimaiList: 'bcarbatchtransferapply/transition/apply/sale',
  // 转入记录转场确认信息
  transferConfirmData: 'bcarbatchtransferapply/prepareConfirmTransition',
  // 0.4.3
  // 转场确认和拒绝
  transferFinalDecision: 'bcarbatchtransferapply/confirmTransition',
  //车次签收确认
  carbatchSignatureCreate: 'bcarbatchsignature/create',
  // 车次签收确认或拒绝
  signatureConfirm: 'bcarbatchsignature/comfirm',
  //车次签收详情
  getSignData: 'bcarbatchsignature/detail',
  // 卖车次入场, 验货, 签收, 签收确认列表
  multifunction: 'daimai/bCarBatch/multifunction/list',
  //代卖车次验货提交
  bCarBatchInspection: 'daimai/bCarBatch/inspection',
  transferFinalDecision: 'bcarbatchtransferapply/confirmTransition',
  // 市场热点品类列表
  getHotMarketCategoryList: 'bmarkethotcategory/market/hot/category/list',
  // 新增热点品类
  addHotMarketCategory: 'bmarkethotcategory/createMarketHotCategory',
  // 车次入场相关信息
  getEntranceCarMsg: 'daimai/bCarBatch/multifunction/bcarbatchinfo',
  // 提交车次入场数据
  sendEntranceCarMsg: 'daimai/bCarBatch/entrance',
  // 获取结构化意向
  getIntendList: 'shipperIntention/getStructuredByQuery',
  // 0.4.4
  // 验货详情
  inspectionDetail: '/daimai/bCarBatch/inspection/detail',
  // 确认发车
  confirmDepart: '/bDeliveryNote/confirmSend',
  // 发车单详情
  deliveryNoteDetail: '/bDeliveryNote/detail',
  //分货单列表
  orderList: 'bDeliveryOrder/order/list',
  //订单详情
  orderDetail: 'bDeliveryOrder/order/detail',
  //创建订单
  createOrder: 'bDeliveryOrder/create',
  // 发车单列表
  getDeliveryNoteList: 'bDeliveryNote/list',
  // 创建发车单
  createDeliveryNote: 'bDeliveryNote/createDeliveryNote',
  // 发车单详情
  getDeliveryNoteDetail: 'bDeliveryNote/detail',
  // 获取发车单商品列表
  sendGoodsList: 'bDeliveryNote/goods/list',
  // 确认发车
  confirmCar: 'bDeliveryNote/confirmSend',
  // 0.4.5
  //我的任务数量
  taskCount: '/bDeliveryNote/task-number',
  //我的任务列表
  taskList: '/bDeliveryNote/task',
  //热点品类详情
  hotCategoryDetail: '/bmarkethotcategory/hot/category/detail',
  // 查找代卖
  searchAgent: 'goodsOwner/replaceSaleList',
  // 今日销售总结
  saleSummarize: 'bDeliveryOrderItem/saleInfo',
  //批次损耗
  saleLost: 'bDeliveryOrderItem/saleLost',
  //倒包
  changePackage: 'bDeliveryOrderItem/changePackage',
  //售罄
  saleOut: 'bDeliveryOrderItem/saleout',
  //回款
  payment: 'bDeliveryOrder/payment/add',
  // 批次管理列表
  getBatchManageList: 'bDeliveryOrderItem/list',
  // 验货详情
  getCheckGoodsDetail: 'bDeliveryOrderItem/inspectionDetail',
  // 验货
  pushCheckGoodsData: 'bDeliveryOrderItem/inspection',
  // 申请签收
  applyForSign: 'bDeliveryOrderItem/signature',
  // 确认签收详情
  confirmSignDetail: 'bDeliveryOrderItem/signatureDetail',
  // 确认签收
  confirmSign: 'bDeliveryOrderItem/signatureConfirmed',
  // 入场
  enterMarket: '/bDeliveryNote/entrance',
  // 批次基本信息
  batchBase: '/bDeliveryOrderItem/detail',
  // 批次验货详情
  batchCheckDetail: '/bDeliveryOrderItem/inspectionDetail',
  // 批次签收详情
  batchSignDetail: '/bDeliveryOrderItem/signatureDetail',
  // 批次单日销售
  batchDailySale: '/bDeliveryOrderItem/saleInfoDetail',
  // 批次单日损耗
  batchDailyLoss: '/bDeliveryOrderItem/saleLost/details',
  // 批次单日倒包
  batchDailyPack: '/bDeliveryOrderItem/changePackage/details',
  // 批次售罄总结 
  batchSaleOut: '/bDeliveryOrderItem/saleOutDetail',
  //更改代卖
  editSaleUser: 'bDeliveryOrder/edit/saleUser',
  //批次详情
  bDeliveryDetail: 'bDeliveryOrderItem/detail',
  //0.4.6
  // 市场业绩GMV
  marketGmvData: '/provincemarketgmvdata/list',
  // 市场业绩GMV--个人详情
  marketgmvdataDetail: 'provincemarketgmvdata/list/salers',
  //市场发车数
  salerCar: 'salerCarPerformance/list',
  //市场发车数--个人详情
  salerCarDetail: 'salerCarPerformance/list/salers',
  // 货主平均发车数
  carPerformance: 'marketshippercarperformance/list',
  //货主平均发车数--货主详情
  carPerformanceDetail: 'marketshippercarperformance/list/shippers',
  //线索商机交易
  businessTransactions: 'businessTransactionsAnalysis/list',
  //新开留存分析
  newRetention: 'newopenretentionanlysis/list',
  //GMV指标
  gmvTarget: '/gmvindicatoranalysis/list',
  // 新开区域统计
  newAreStatistical: 'newshipperareadailystatistical/list',
  //转运申请列表
  transferRecordList: '/bDeliveryOrder/transferApply/list',
  //转运记录详情
  transferRecordDetail: '/bDeliveryOrder/transferApply/details',
  //转运确认
  transferRecordConfirm: '/bDeliveryOrder/confirmTransition',
  // 分货单申请调拨
  applyForAllocation: 'bDeliveryOrder/transitionApply',
  // 分货单转场调拨
  applyForTransfer: 'bDeliveryOrder/transferApply',
  //0.4.7
  //服务费
  getServiceFee: 'salesman/service-fee',
  // 品类一级小类
  getCategoryFirstStandard: 'bDeliveryNote/getProductSpecification',
  // 品类二级小类
  getCategorySecondStandard: 'bDeliveryNote/getProductSpecificationLabel',
  // 0.4.8
  // 货主详情交易记录
  tradeRecord: 'goodsOwner/crm/transaction',
  // 拜访人列表
  visistList: 'goodsOwner/crm/visituser',
  // 拜访记录
  visitRecord: 'goodsOwner/crm/visit',
  // 创建人列表
  createList: 'goodsOwner/crm/intentionuser',
  // 意向记录
  intentionRecord: 'goodsOwner/crm/intention',
  //0.4.8
  //根据货主市场品类获取在售批次列表
  getBatchList: 'bmarkettrends/onsaleorderitem/list',
  //获取当日同品类市场行情动态列表
  getSameproductlist: 'bmarkettrends/sameproductlist',
  //市场行情批量转发
  markettrendsForward: 'bmarkettrends/forwad',
  //确认合成
  composeSchema: 'bDeliveryStartScheme/create',
  // 市场行情批量转发展示
  marketTrendsList: 'bmarkettrends/batchlist',
  //代卖基本信息
  saleuserBase: 'saleuser/base',
  //代卖车次列表
  saleuserCarlist: 'saleuser/carlist',
  //代卖个人页面统计数据
  saleuserUserData: 'saleuser/userData',
  //发车方案列表
  deliveryProgramList: '/bDeliveryStartScheme/list',
  //删除发车方案
  delDeliveryProgram: '/bDeliveryStartScheme/delete',
  //代卖方案列表
  saleProgramList: '/bdeliverysalerscheme/getBDeliverySalerSchemeList',
  //新建代卖方案
  createSaleProgram: '/bdeliverysalerscheme/create',
  //删除代卖方案
  delSaleProgram: '/bdeliverysalerscheme/delete',
  //合成发车方案
  combineProgram: '/bdeliverysalerscheme/getBDeliverySalerSchemeList',
  //编辑代卖方案
  editProgram: '/bdeliverysalerscheme/edit',
  //代卖方案详情
  detailSaleProgram: '/bdeliverysalerscheme/getBDeliverySalerSchemeDetails',
  // 待调价列表
  adjustPriceList: 'bDeliveryOrderItemPriceAdjustment/wait-apply/list',
  // 调价记录列表
  recordPriceList: 'bDeliveryOrderItemPriceAdjustment/apply/list',
  // 批次详情调价详情
  adjustPriceDetail: 'bDeliveryOrderItem/priceAdjustment/details',
  // 调价详情
  adjustPageDetail: 'bDeliveryOrderItemPriceAdjustment/apply/detail',
  // 编辑调价
  editAdjustRecord: 'bDeliveryOrderItemPriceAdjustment/apply/edit',
  // 申请调价页数据
  adjustPriceData: 'bDeliveryOrderItemPriceAdjustment/apply',
  //合成后的发车方案详情
  composedList: 'bDeliveryStartScheme/detail',
  //未合成的发车方案详情
  unComposedList: 'bDeliveryStartScheme/readyCreate',
  // 根据市场搜索业务员
  getSalerByMarket: 'useraccount/getUserByMarketId',
  // 推送代卖方案
  pushProgram: 'bdeliverysalerscheme/push',
  // 获取小类
  gainGoodsSort: 'category/classify/list',
  // 合作案例
  gainRealCase: 'h5/daimai/cooperation/list',
  // 合作案例详情
  gainCaseDetail: 'h5/daimai/cooperation/detail',
  //0.4.9
  //拜访量统计日期列表
  getVisitDateList: 'visitStatistics/dateList',
  //拜访量统计数据列表
  getVisitDataList: 'visitStatistics/dateDetail',
  // 批次绩效列表
  batchPerformanceList: 'bDeliveryOrderItem/rateList',
  // 获取所有业务员
  gainAllUser: 'bDeliveryOrderItem/getAllSalerUser',
  // 当日市场行情
  todayQuotation: '/bmarkettrends/todaylist',
  // 行情推荐列表
  quotationRecommendList: '/bmarkettrendsrecommendcontroller/list',
  // 发车方案生成发车单
  generateDeliveryNote: '/bDeliveryNote/createDeliveryNote/new',
  //商机应答列表
  getChanceAnswerList: '/businessopportunitiesresponse/list',
  // 创建商机应答
  createChanceAnswer: '/businessopportunitiesresponse/create',
  // 商机推送列表
  pushChanceList: '/businessoppertunitiespush/list',
  // 商机应答汇总详情
  chanceAnswerDetail: '/businessoppertunitiespush/detail',
  // 通知市场创建代卖方案
  chanceInformMarket: '/businessoppertunitiespush/updateSalerFlag',
  // 商机搜索
  chanceList: 'businessoppertunitiespush/create/businessoppertunities',
  // 商机可推送市场
  chancePushMarket: 'businessoppertunitiespush/create/market',
  // 市场选维护人员
  changeMaintainPerson: 'businessoppertunitiespush/create/market/saler',
  // 推送商机
  pushChance: 'businessoppertunitiespush/create',
  // 获取小类一级规格
  firstStandard: 'businessoppertunitiespush/getProductSpecification',
  // 根据商机获取代卖方案
  programDetailByChance: '/businessopportunitiesresponse/salerScheme',
  // 修改今日销售总结
  modifySummary: 'bDeliveryOrderItem/saleInfo/edit',
  // 今日销售详情
  summaryDetail: 'bDeliveryOrderItem/saleInfo/detail',
  // 修改售罄
  modifySoldOut: 'bDeliveryOrderItem/saleout/edit',
  // 售罄详情
  soldOutDetail: 'bDeliveryOrderItem/saleout/detail',
  // 修改回款
  modifyMoney: 'bDeliveryOrder/payment/edit',
  // 行情图表数据
  quotationChartList: '/bmarkettrends/todayDetail',
  // 批次开售
  beginsale: 'bDeliveryOrderItem/beginsale',
  // 0.5.1
  // 商机应答详情
  chanceReplyDetail: 'businessopportunitiesresponse/detail',
  //是否有新消息
  isHaveNewMsg: 'messagenoticecontroller/unReadCount',
  // 消息列表
  msgList: 'messagenoticecontroller/list',
  // 0.5.2
  // 商机管理列表
  chanceManageList: '/businessOpportunities/list',
  // 商机详情
  chanceManageDetail: '/businessOpportunities/detail',
  // 创建代卖方案查询需求内容
  programDetailByDemand: '/receivingDemandPush/pushResponseSalerScheme',
  // 需求详情
  chanceDemandDetail: 'receivingdemandresponse/details',
  // 需求应答
  chanceDemandAnswer: '/receivingdemandresponse/edit',
  // 新开团队商机推送列表
  newTeamPushList: 'businessoppertunitiespush/newTeamPushList',
  //维护团队列表
  maintainTeamList: 'businessopportunitiesresponse/statistics',
  // 可接货商机详情列表
  getChanceDetailList: 'businessoppertunitiespush/pickUpBusinessList',
  //接货需求应答详情
  responseDetail: 'receivingdemandresponse/details',
  //区域总列表
  leaderList: 'useraccount/regionalLeader/list',
  //推送拒绝/创建代卖方案
  refuseOrCreate: 'receivingDemandPush/pushResponseSalerScheme',
  // 创建接货需求
  createDemandOfDelivery: 'receivingDemandPush/create',
  // 创建需求选择市场下人员
  getPersonUnderMarket: 'receivingDemandPush/market-users',
  // 接货需求推送列表
  demandOfList: 'receivingDemandPush/list',
  // 需求应答列表
  demandOfAnswerList: 'receivingdemandresponse/list',
  // 需求推送应答列表
  sendAnswerList: 'receivingDemandPush/pushResponseList',
  // 0.5.3
  // 新建行情列表
  dynamicHistoryList: '/bmarkettrends/createDynamicList',
  //市场行情动态详情
  marketTrendsDetail: 'bmarkettrends/detail',
  //每日维护日志列表
  dailyMaintanceList: 'dailyMaintenancedata/list',
  //每日维护日志保存
  saveDailyMaintance: 'dailyMaintenancedata/save',
  // 市场费用列表
  listOfMarketFee: 'base/marketFee',
  //0.5.4
  //维护团队个人的数据看板
  maintainceData: 'maintenanceTeamStatistics/personal-panel',
  // 维护团队区域总的数据看板
  maintainRegionalData: 'maintenanceTeamStatistics/regional-panel',
  //新开团队个人面板
  newlyopenData: 'newlyopenedteamstatistics/personal-panel',
  //新开团队区域总面板
  newlyopenRegionalData: 'newlyopenedteamstatistics/regional-panel',
  //新开团队个人-我的新开货主日期列表
  newshipperOpenDate: 'newlyopenedteamstatistics/personal-new-open-date',
  //新开团队个人-我的新开货主列表
  newOpenPersonalList: 'newlyopenedteamstatistics/personal-new-open',
  //新开团队区域总-我的新开货主列表
  newOpenRegionalList: 'newlyopenedteamstatistics/regional-new-open',
  //新开团队区域总-(业务员新开,商机推送情况)列表
  newOpenRegionalBase: 'newlyopenedteamstatistics/regional-base-statistics',
  //新开团队区域总-拜访货主列表
  newOpenShipperList: 'newlyopenedteamstatistics/regional-shipper-visit',
  // 新开团队区域总-业务员拜访情况列表
  newOpenVisitList: 'newlyopenedteamstatistics/regional-visit-statistics',
  //新开团队区域总-商机推送列表
  newOpenBusinessPush: 'newlyopenedteamstatistics/regional-business-push',
  //维护团队-我的区域商机应答情况
  maintenanceTeammyRegionBusiness: 'maintenanceTeamStatistics/myRegionBusiness',
  // 下级待回款列表
  subordinateReturnMoneyList: '/bDeliveryOrder/nextLevel',
  // 关注商机
  focusChance: '/businessOpportunities/focus',
  // 我的关注
  myFollowList: '/businessOpportunities/focusList',
  // 查询下属业务员
  subordinrateList: '/bDeliveryOrder/nextLevel/user',
  //0.5.5
  //销售vp面板
  getVpData: 'dailyVpPanelData/personal-panel',
  // 市场热点品类删除
  hotCategoryREmove: 'bmarkethotcategory/hot/category/remove',
  // 根据品类和货主获取默认商机方案
  getChanceByShipperAndCategory: '/shipperVisit/structuredDetail',
  // 批次退货
  applyReturnGoods: 'bDeliveryOrderItem/return/goods',
  // 批次退货详情
  returnGoodsDetail: 'bDeliveryOrderItem/salers/return/detail',
  // 接货需求再推送数据
  resendData: 'receivingDemandPush/againPush',
  //更改应答人
  changeAnswer: 'businessopportunitiesresponse/updateResponseUserAccountId',
  //0.5.7
  //商机跟踪
  getChanceFollowList: 'businessOpportunitiesFollow/list',
  //业务员的商机
  businessList: 'businessOpportunitiesFollow/userFollowList',
  //业务员的商机
  salesmanBusiness: 'businessOpportunitiesFollow/userBusinessOpportunities',
  changeAnswer: 'businessopportunitiesresponse/updateResponseUserAccountId',
  //业绩日期列表
  performanceDate: '/usersalerperformancetarget/date',
  //业绩列表
  performanceList: '/usersalerperformancetarget/list',
  //业绩详情
  performanceDetail: '/usersalerperformancetarget/detail',
  //业绩拆分
  performanceSave: '/usersalerperformancetarget/save',
  //我的市场行情
  getMyMarketQuotation: '/bmarkettrends/myList',
  //推荐行情列表
  getRecommendQuotation: '/shipperVisit/bMarketTrendPushList',
  // 代卖列表
  getNewAgentList: 'daimaiuser/list',
  // 代卖详情
  getNewAgentDetail: 'daimaiuser/details',
  // 新建代卖
  addNewAgent: 'daimaiuser/create',
  // 编辑代卖
  editNewAgent: 'daimaiuser/edit',
  // 作废代卖
  deleteNewAgent: 'daimaiuser/invalid',
  // 验证代卖是否存在
  validNewAgent: 'daimaiuser/validatePhone',
  // 拜访未接通
  setVisitOffline: '/shipperVisit/unconnected',
  // 获取商机推送列表
  getChancePushList: '/shipperVisit/businessOpportunitiesPushList',
  // 商机推送商机应答统计列表
  chancePushAndAnswerTotalList: '/businessoppertunitiespush/pushResponseList',
  // 我的评分
  myPersonalScore: 'userSalerScorePoint/list',
  //查询业务所属区域总
  getRegionalLeader: 'useraccount/regionalLeader',
  // 0.5.8
  // 索要資源
  applyMoreResource: 'shipperVisit/askForResource',
  //今日行情录入目标品类
  getTargetCategoryList: 'bmarkettrends/getTargetCategory',
  //售罄校验
  saleoutCheck: 'bDeliveryOrderItem/saleoutCheck',
  // 市场品类费用创建
  createMarketFee: 'syqMarketFee/create',
  // 市场品类费用列表
  marketFeeList: 'syqMarketFee/list',
  // 市场品类费用详情
  marketFeeDetail: 'syqMarketFee/detail',
  // 更改市场品类费用
  reEditMarketFee: 'syqMarketFee/edit',
  // 0.5.9
  //删除我的历史行情
  delMineDynamic: '/bmarkettrends/delete/history',
  //市场热点品类按大类
  monthHotByCategory: '/bmarkethotcategory/hot/category/list',
  //市场热点品类按区域
  monthHotByZone: '/bmarkethotcategory/hot/market/list',
  //我的拜访记录日期列表
  getVisitDateList: 'shipperVisit/visitRecordDateList',
  //我的拜访记录列表
  getVisitList: 'shipperVisit/visitRecordList',
  //我的区域市场列表
  myRegionMarketList: 'maintenanceTeamStatistics/myRegionMarket',
  //行情数统计
  trendStatistics: 'bmarkettrends/bMarketTrendStatistics',
  //我的区域市场异常情况
  myRegionAbormal: 'maintenanceTeamStatistics/myRegionMarketAbnormal',
  //我的区域市场在售发车单
  myRegionOnsale: 'maintenanceTeamStatistics/myRegionMarketOnSaleNote',
  // 发车单任务数量
  getDeliveryNoteListCount: 'bDeliveryNote/list/status-count',
  //货主详情页-商机方案
  structuredPlan: 'goodsOwner/crm/structured',
  //货主详情页-商机方案创建人列表
  getStructureduser: 'goodsOwner/crm/structureduser',
  // 0.6.0
  // 市场业绩GMV-区域
  areaList: 'provincemarketgmvdata/area-list',
  //获取继续发货意愿列表
  continueDelivery: 'dailyMaintenancedata/data-list',
  //获取继续发货意愿列表数量
  continueDeliveryData: 'dailyMaintenancedata/data-count',
  //数据看板-GMV
  dataGmv: 'gmvstatistical/details',
  //市场业绩-区域货主平均发车数
  areaDeliveryList: 'marketshippercarperformance/area-list',
  // 车型获取费用列表
  getFeeListByCarType: 'businessopportunitiesresponse/marketfee/list',
  // 根据商机品类获得相关信息
  getInfoByChance: 'businessoppertunitiespush/getPushRelatData',
  //0.6.0
  //获取省份
  getProvince: '/bmarkettrends/getProvince',
  // 0.6.1
  // 工单类型
  getWorkOrderType: 'base/getWorkOrderType',
  //获取省份
  getProvince:'/bmarkettrends/getProvince',
   //0.6.1
  // 周数列表
  weekList: '/base/weeks',
  // 区域总商机推送统计
  areaPushList:'businessoppertunitiespush/areaPushList',
  //区域总商机应答统计
  areaStatistics:'businessopportunitiesresponse/areaStatistics',
  // 工单数据看板
  dataBoard:'workOrderController/dataBoard',
  //业务员的商机
  userBusinessOpportunities:'businessOpportunitiesFollow/userBusinessOpportunities',
  // 市场业绩 市场发车数 - 区域
  areaMarketList:'salerCarPerformance/area-list',
  // 市场业绩 市场发车数
  salerCarList:'salerCarPerformance/list',
  //区域当前发车在售数列表
  getSendOnSaleNumListByArea:'/bSaleArea/sendOnSaleNumList/area',
  //市场当前发车在售数列表
  getSendOnSaleNumListByMarket: '/bSaleArea/sendOnSaleNumList/market',
  //业务员当前发车在售数列表
  getSendOnSaleNumListByUser: '/bSaleArea/sendOnSaleNumList/user',
  //区域当前接车在售数列表
  getRecvOnSaleNumListByArea: '/bSaleArea/receiveOnSaleNumList/area',
  //市场当前接车在售数列表
  getRecvOnSaleNumListByMarket: '/bSaleArea/receiveOnSaleNumList/market',
  //业务员当前接车在售数列表
  getRecvOnSaleNumListByUser: '/bSaleArea/receiveOnSaleNumList/user',
  //当前发车/接车在售列表
  getSendRecvCarListByIds:'/bSaleArea/onSaleList',
  //品类市场统计
  getCategoryMarketStatistics:'/categoryMarketStatistics/list',
  // 新建工单
  createWorkOrder: 'workOrderController/create',
  // 工单列表
  workOrderList: 'workOrderController/list',
  // 工单详情
  workOrderDetail: 'workOrderController/details',
  // 处理工单
  hanleWorkOrder: 'workOrderController/update',
  // 删除工单
  deleteWorkOrder: 'workOrderController/delete',
  // 工单数据看板
  workOrderNumber: 'workOrderController/dataBoard',
  // 个人业绩
  personalGrade: 'bDeliveryNotePersonal/service/fee',
  // XXX发车单列表
  personalOrder: 'bDeliveryNotePersonal/list',
  // 货主crm列表面板
  crmNumber:'goodsOwner/crm/panel',
  // 未合作原因保存
  updateRemark:'businessOpportunitiesFollow/updateRemark',
  // 0.6.2
  // 发车方案同意或拒绝
  agreeDepartureScheme:'/bDeliveryStartScheme/confirmOrRefuse',
  // 创建到货计划
  createArrivalPlan:'arrivalGoodsPlan/create',
  // 创建到货计划-前置
  preCreateArrivalPlan:'arrivalGoodsPlan/pre-create',
  // 到货计划详情
  arrivalPlanDetail:'arrivalGoodsPlan/view',
  // 编辑到货计划
  editArrPlan:'arrivalGoodsPlan/edit',
  // 今日到货计划与实际到货对比
  planContrast:'arrivalGoodsPlan/todayContrast',
  // 到货计划列表
  getArrivalList:'arrivalGoodsPlan/list',
  // 到货计划列表-品类详情
  arrPlanListItem: 'arrivalGoodsPlan/list/item',
  // 获取最早的待同意接货发车方案id
  getStartId:'/maintenanceTeamStatistics/min-start-scheme-id',
  // 删除到货计划
  deleteArrPlan:'arrivalGoodsPlan/remove',
  // 到货计划按时间
  getListByTime:'arrivalGoodsPlan/datePlanList',
  // 新转场申请列表
  newApplyTransferList:'bDeliveryOrderItem/transferApply/list',
  // 批次转场、调拨详情
  transferAndApplyDetail:'bDeliveryOrderItem/transferApply/order-item-list',
  // 根据市场、品类、车型查询费用列表
  getFeeValByMCC:'bdeliverysalerscheme/marketfee/list'
}
var H5Url = {
  AgentInfo: hostAddress + "B1/s030/replaceSell.html"
}
/***接口结束****/
function uploadImage(tempFilePath, success) {
  wx.showToast({
    title: "加载中",
    mask: true,
    icon: 'loading',
    duration: (3000 <= 0) ? 30000 : 3000
  });
  wx.request({
    url: hostAddress + generateToken,
    header: {
      'version': version,
      'Content-Type': 'application/json'
    },

    success: function(result) {
      // 成功回调
      console.log("成功")
      console.log(result)
      wx.hideToast()
      var res = JSON.parse(result.data)
      var uptoken = res.uptoken
      var uploadPath = util.formatTimeToyyyyMMdd(new Date()) + "_" + wxType + tempFilePath.split('//')[1]
      wx.uploadFile({
        url: 'https://up.qbox.me',
        filePath: tempFilePath,
        name: 'file',
        formData: {
          'key': uploadPath,
          'token': uptoken
        },
        success: function(res) {
          var data = JSON.parse(res.data);
          console.log("上传成功")
          console.log(res)
          success(data)
        },
        fail(error) {
          console.log(error)
          wx.showModal({
            title: '提示',
            showCancel: false,
            content: '上传失败',
            success: function(res) {
              if (res.confirm) {
                console.log('用户点击确定')
              }
            }
          })
        }
      })
    },
    fail: function(res) {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '上传失败',
        success: function(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    }
  });
}


/**
 * url 请求地址
 * success 成功的回调
 * fail 失败的回调
 */
function _getData(url, data, success, fail) {
  wx.showToast({
    title: "加载中",
    mask: true,
    icon: 'loading',
    duration: (3000 <= 0) ? 30000 : 3000
  });
  wx.request({
    url: hostAddress + url,
    header: {
      'version': version,
      'Content-Type': 'application/json'
    },
    data: data,
    success: function(res) {
      wx.hideToast()
      if (res.data.code == 200 || res.data.code == 201) {
        success(res);
      } else {
        if (!fail) {
          if (typeof(res.data.message) == "undefined") {
            wx.showModal({
              title: '提示',
              showCancel: false,
              content: "错误：" + res.statusCode
            })
          } else {
            wx.showModal({
              title: '提示',
              showCancel: false,
              content: res.data.message,
              success: function(res) {
                if (res.confirm) {
                  console.log('用户点击确定')
                }
              }
            })
          }
        }
        fail(res);
      }
    },
    fail: function(res) {
      wx.hideToast()
      fail(res);
    }
  });
}
/**
 * url 请求地址
 * success 成功的回调
 * fail 失败的回调
 */
function _post(url, data, success, fail) {
  wx.showToast({
    title: "加载中",
    mask: true,
    icon: 'loading',
    duration: (3000 <= 0) ? 30000 : 3000
  });
  if (stopRepeatSubmit(url, data)) {
    wx.getStorage({
      key: 'accessToken',
      success: function(res) {
        wx.request({
          url: hostAddress + url,
          header: {
            'accessToken': res.data,
            'version': version,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
          },
          method: 'POST',
          data: data,
          success: function(res) {
            wx.hideToast()
            if (res.data.code == 200 || res.data.code == 201 || res.data.code == '200' || res.data.code == 300 || res.data.code == 301 || res.data.code == 400) {
              success(res);
            } else {
              if (!fail) {
                if (typeof(res.data.message) == "undefined") {
                  wx.showModal({
                    title: '提示',
                    showCancel: false,
                    content: "错误：" + res.statusCode
                  })
                  fail(res);
                } else {
                  wx.showModal({
                    title: '提示',
                    showCancel: false,
                    content: res.data.message,
                    success: function(res) {
                      if (res.confirm) {
                        console.log('用户点击确定')
                      }
                    }
                  })
                }
              } else {
                fail(res);
              }
            }
          },
          fail: function(res) {
            wx.hideToast()
            fail(res);
          },
          complete:function(res){
            clearRepeatCache(url, data);
          }
        });
      },
      fail: function() {
        // fail
        console.log('获取token失败')
        clearRepeatCache(url, data);
      }
    })

  }

}
/**
 * url 请求地址
 * success 成功的回调
 * fail 失败的回调
 */
function _post_json(url, data, success, fail) {
  wx.showToast({
    title: "加载中",
    mask: true,
    icon: 'loading',
    duration: (3000 <= 0) ? 30000 : 3000
  });
  if (stopRepeatSubmit(url, data)) {
    wx.request({
      url: hostAddress + url,
      header: {
        'version': version,
        // 'accessToken': res.data,
        'Content-Type': 'application/json;charset=utf-8',
        'Accept': 'application/json'
      },
      method: 'POST',
      data: data,
      success: function(res) {
        wx.hideToast()
        if (res.data.code == 200 || res.data.code == 201) {
          success(res);
        } else {
          if (typeof(res.data.message) == "undefined") {
            wx.showModal({
              title: '提示',
              showCancel: false,
              content: "错误：" + res.statusCode
            })
            fail(res);
          } else {
            wx.showModal({
              title: '提示',
              showCancel: false,
              content: res.data.message,
              success: function(res) {
                if (res.confirm) {
                  console.log('用户点击确定')
                }
              }
            })
          }
        }
      },
      fail: function(res) {
        wx.hideToast()
        clearRepeatCache(url, data);
        fail(res);
      },
      complete:function(res){
        clearRepeatCache(url, data);
      }
    });
  }
}

//防重复提交
function stopRepeatSubmit(url, data) {
  var key = "URL_" + url;
  var data = JSON.stringify(data);
  //检查是否有占用
  if (wx.getStorageSync(key) != data) {
    //开始占用
    wx.setStorageSync(key, data)
    return true;
  } else { //占用
    wx.showToast({
      title: '正在提交...',
      icon: 'none'
    })
    return false
  }
}

//清除防重复提交缓存
function clearRepeatCache(url,data){
  var key = "URL_" + url;
  var data = JSON.stringify(data);
  if (wx.getStorageSync(key) == data) {
    wx.removeStorage({
      key: key,
      success: function (res) { },
    })
  }
}

/**
登陆时获取token
*/
function getTokenData(url, success, fail) {
  wx.showToast({
    title: "加载中",
    mask: true,
    icon: 'loading',
    duration: (3000 <= 0) ? 30000 : 3000
  });
  wx.request({
    url: hostAddress + url,
    method: 'get',
    header: {
      'version': version,
      'Content-Type': 'application/json'
    },
    success: function(res) {
      wx.hideToast()
      success(res);
    },
    fail: function(res) {
      wx.hideToast()
      fail(res);
    }
  });
}
/**
用户登陆
*/
function setLogin(url, data, accessToken, success, fail) {
  wx.showToast({
    title: "加载中",
    mask: true,
    icon: 'loading',
    duration: (3000 <= 0) ? 30000 : 3000
  });
  wx.request({
    url: hostAddress + url,
    method: 'post',
    data: data,
    header: {
      'version': version,
      'accessToken': accessToken,
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
    },
    success: function(res) {
      wx.hideToast()
      success(res);
    },
    fail: function(res) {
      wx.hideToast()
      fail(res);
    }
  });
}
// 转发之前
function beforShar(id, type, userAccountId) {
  var that = this;
  var data = {
    userAccountId: userAccountId,
    'type': type,
    referenceId: id
  }
  _post(ApiUrl.beforForward, data,
    //成功
    function(result) {
      console.log(result);
      var resultData = result.data.data;
      if (result.data.code == 200) {
        console.log('转发')
      }
    },
    //失败
    function(result) {
      console.log(result);
      util.alertView("转发异常");
    })
}
// 转发之后
function afterForward(id, type, sendUser, userAccountId) {
  var that = this;
  var data = {
    userAccountId: userAccountId,
    type: type,
    referenceId: id,
    readUserAccountId: app.globalData.userAccountId,
    forwardUserAccountId: sendUser,
    openId: app.globalData.openId,
  }
  _post(ApiUrl.afterForward, data,
    //成功
    function(result) {
      console.log(result);
      var resultData = result.data.data;
      if (result.data.code == 200) {
        console.log('转发之后')
      }
    },
    //失败
    function(result) {
      console.log(result);
      util.alertView("转发异常");
    })
}

module.exports = {
  baiduMapKey: baiduMapKey,
  _getData: _getData,
  _post: _post,
  _post_json: _post_json,
  ApiUrl: ApiUrl,
  hostAddress: hostAddress,
  getToken: getToken,
  version: version,
  requestWXSession: requestWXSession,
  postWxEncrypted: postWxEncrypted,
  wxBindingPhone: wxBindingPhone,
  getSms: getSms,
  agentRegister: agentRegister,
  forceBind: forceBind,
  forceCodeBind: forceCodeBind,
  regCategory: regCategory,
  contactUs: contactUs,
  getUserAccountInfo: getUserAccountInfo,
  login: login,
  getSaleArea: getSaleArea,
  getSaleAreaMarket: getSaleAreaMarket,
  QINIU_ADDRESS: QINIU_ADDRESS,
  uploadImage: uploadImage,
  marketList: marketList,
  carGoodsClass: carGoodsClass,
  goodsDynamicsType: goodsDynamicsType,
  carDetailList: carDetailList,
  carInputting: carInputting,
  saleuserList: saleuserList,
  categoryList: categoryList,
  mainCategoryList: mainCategoryList,
  saleuserBase: saleuserBase,
  bCarBatchList: bCarBatchList,
  SCJLInputting: SCJLInputting,
  SCJLdetail: SCJLdetail,
  quotationsChange: quotationsChange,
  bcarbatchDynamicList: bcarbatchDynamicList,
  bMarketQuotationsList: bMarketQuotationsList,
  bMarketQuotationsCategoryList: bMarketQuotationsCategoryList,
  bMarketQuotationsCategoryAdd: bMarketQuotationsCategoryAdd,
  bMarketQuotations: bMarketQuotations,
  bCarBatchAddBCarBatch: bCarBatchAddBCarBatch,
  bCarBatchDetail: bCarBatchDetail,
  editSendGoodsInfo: editSendGoodsInfo,
  editReceiveGoodsInfo: editReceiveGoodsInfo,
  editCarBatchSaleInfo: editCarBatchSaleInfo,
  editCarBatchGoods: editCarBatchGoods,
  updateB1SaleUser: updateB1SaleUser,
  sellNumConut: sellNumConut,
  bcarbatchDynamicDelete: bcarbatchDynamicDelete,
  userMarketList: userMarketList,
  getClassList: getClassList,
  getAllDemand: getAllDemand,
  updataStatus: updataStatus,
  trainData: trainData,
  receiveGoodsData: receiveGoodsData,
  sendGoodsData: sendGoodsData,
  H5Url: H5Url,
  wxType: wxType,
  beforShar: beforShar,
  afterForward: afterForward
}