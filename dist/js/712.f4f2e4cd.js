"use strict";(self["webpackChunkmy_app"]=self["webpackChunkmy_app"]||[]).push([[712],{7712:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"manage"},[t("el-dialog",{attrs:{title:"新增用户",visible:e.dialogVisible,width:"40%",beforeClose:e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px",inline:!0,rules:e.rules}},[t("el-form-item",{attrs:{label:"姓名",prop:"name"}},[t("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),t("el-form-item",{attrs:{label:" 年龄",prop:"age"}},[t("el-input",{attrs:{placeholder:"请输入年龄"},model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",t)},expression:"form.age"}})],1),t("el-form-item",{attrs:{label:"性别",prop:"sex"}},[t("el-select",{attrs:{placeholder:"请选择性别"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[t("el-option",{attrs:{label:"男",value:1}}),t("el-option",{attrs:{label:"女",value:0}})],1)],1),t("el-form-item",{attrs:{label:"出生日期",prop:"birth"}},[t("el-col",{attrs:{span:15}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.form.birth,callback:function(t){e.$set(e.form,"birth",t)},expression:"form.birth"}})],1)],1),t("el-form-item",{attrs:{label:" 地址",prop:"addr"}},[t("el-input",{attrs:{placeholder:"请输入地址"},model:{value:e.form.addr,callback:function(t){e.$set(e.form,"addr",t)},expression:"form.addr"}})],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:e.handleClose}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")])],1)],1),t("div",{staticClass:"manage-header"},[t("el-button",{attrs:{type:"primary"},on:{click:e.handleAdd}},[e._v(" + 新增 ")]),t("el-form",{attrs:{model:e.userForm,inline:!0}},[t("el-form-item",[t("el-input",{attrs:{placeholder:"请输入用户名称"},model:{value:e.userForm.name,callback:function(t){e.$set(e.userForm,"name",t)},expression:"userForm.name"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1)],1),t("div",{staticClass:"common-table"},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,height:"600px",stripe:""}},[t("el-table-column",{attrs:{prop:"name",label:"姓名"}}),t("el-table-column",{attrs:{prop:"age",label:"年龄"}}),t("el-table-column",{attrs:{prop:"sex",label:"性别"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(1===a.row.sex?"男":"女"))])]}}])}),t("el-table-column",{attrs:{prop:"birth",label:"出生日期"}}),t("el-table-column",{attrs:{prop:"addr",label:"地址"}}),t("el-table-column",{attrs:{prop:"",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.handleEdit(a.row)}}},[e._v("编辑")]),t("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.handleDelete(a.row)}}},[e._v("删除")])]}}])}),e._v("` ` ")],1),t("div",{staticClass:"pager"},[t("el-pagination",{attrs:{layout:"prev, pager, next",total:e.total},on:{"current-change":e.handlePageChange}})],1)],1)],1)},r=[],s=a(3397),i={name:"MyUser",data(){return{dialogVisible:!1,form:{name:"",age:"",sex:"",birth:"",addr:""},rules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"}],age:[{required:!0,message:"请输入年龄",trigger:"blur"}],sex:[{required:!0,message:"请选择性别",trigger:"blur"}],birth:[{required:!0,message:"请选择出生日期",trigger:"blur"}],addr:[{required:!0,message:"请输入地址",trigger:"blur"}]},tableData:[],modelType:0,total:0,pageData:{page:1,limit:10},userForm:{name:""}}},mounted(){this.getList()},methods:{submitForm(){this.$refs.form.validate((e=>{e&&(0===this.modelType?(0,s.nu)(this.form).then((()=>{this.getList()})):(0,s.gw)(this.form).then((()=>{this.getList()})),this.$refs.form.resetFields(),this.dialogVisible=!1)}))},handleClose(){this.$refs.form.resetFields(),this.dialogVisible=!1},getList(){(0,s.wz)({params:{...this.userForm,...this.pageData}}).then((e=>{this.tableData=e.data.list,this.total=e.data.count||0}))},handleAdd(){this.modelType=0,this.dialogVisible=!0},handleEdit(e){this.modelType=1,this.dialogVisible=!0,this.form=JSON.parse(JSON.stringify(e)),this.$refs.form.resetFields()},handleDelete(e){this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{(0,s.hG)({id:e.id}).then((()=>{this.getList()})),this.$message({type:"success",message:"删除成功!"})})).catch((()=>{this.$message({type:"info",message:"已取消删除"})}))},handlePageChange(e){console.log(e,"页码"),this.pageData.page=e,this.getList()},onSubmit(){this.getList()}}},o=i,n=a(1656),m=(0,n.A)(o,l,r,!1,null,"1adcccee",null),d=m.exports}}]);
//# sourceMappingURL=712.f4f2e4cd.js.map