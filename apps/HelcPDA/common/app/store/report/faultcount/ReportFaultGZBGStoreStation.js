/**
 * 故障报告书报表 数据仓2  xcx  2014-5-22
 */
Ext.define('HelcPDA.store.report.faultcount.ReportFaultGZBGStoreStation',{
	extend:'Ext.data.Store',
	requires:['HelcPDA.model.report.faultcount.ReportFaultGZBGModel'],
	config:{
		model:'HelcPDA.model.report.faultcount.ReportFaultGZBGModel'
	},
});