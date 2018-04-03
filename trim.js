// Function Name:	trim
// Function Description:	去除字符串的首尾的空格
// Creation Date:	2004-7-13 15:30
// Last Modify By:	N/A
// Last Modify Date:	N/A
String.prototype.trim=function(){
return this.replace(/(^\s*)|(\s*$)/g, "");
}

// Function Name:	ltrim
// Function Description:	去除字符串的左侧的空格
// Creation Date:	2004-7-13 9:58
// Last Modify By:	N/A
// Last Modify Date:	N/A
String.prototype.ltrim=function()
{
return this.replace(/(^\s*)/g, "");
}

// Function Name:	rtrim
// Function Description:	去除字符串的右侧的空格
// Creation Date:	2004-7-13 15:31
// Last Modify By:	N/A
// Last Modify Date:	N/A
String.prototype.rtrim=function()
{
return this.replace(/(\s*$)/g, "");
}

// Function Name:	len
// Function Description:	返回字符串的实际长度, 一个汉字算2个长度
// Creation Date:	2004-7-13 9:58
// Last Modify By:	N/A
// Last Modify Date:	N/A
String.prototype.len=function()
{
var str=this;
return str.replace(/[^\x00-\xff]/g, "**").length
}

// Function Name:	isValidDate
// Function Description:	判断输入是否是有效的短日期格式 - "YYYY-MM-DD"
// Creation Date:	2004-7-13 9:58
// Last Modify By:	N/A
// Last Modify Date:	N/A
String.prototype.isValidDate=function()
{
var result=this.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
if(result==null) return false;
var d=new Date(result[1], result[3]-1, result[4]);
return (d.getFullYear()==result[1]&&d.getMonth()+1==result[3]&&d.getDate()==result[4]);
}

// Function Name:	isValidTime
// Function Description:	判断输入是否是有效的时间格式 - "HH:MM:SS"
// Creation Date:	2004-7-13 9:58
// Last Modify By:	N/A
// Last Modify Date:	N/A
String.prototype.isValidTime=function()
{
var resule=this.match(/^(\d{1,2})(:)?(\d{1,2})\2(\d{1,2})$/);
if (result==null) return false;
if (result[1]>24 || result[3]>60 || result[4]>60) return false;
return true;
}

// Function Name:	isValidEmail
// Function Description:	判断输入是否是有效的电子邮件
// Creation Date:	2004-7-13 9:59
// Last Modify By:	N/A
// Last Modify Date:	N/A
String.prototype.isValidEmail=function()
{
var result=this.match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/);
if(result==null) return false;
return true;
}

// Function Name:	isValidDatetime
// Function Description:	判断输入是否是有效的长日期格式 - "YYYY-MM-DD HH:MM:SS"
// Creation Date:	2004-7-13 9:59
// Last Modify By:	N/A
// Last Modify Date:	N/A
String.prototype.isValidDatetime=function()
{
var result=this.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/);
if(result==null) return false;
var d= new Date(result[1], result[3]-1, result[4], result[5], result[6], result[7]);
return (d.getFullYear()==result[1]&&(d.getMonth()+1)==result[3]&&d.getDate()==result[4]&&d.getHours()==result[5]&&d.getMinutes()==result[6]&&d.getSeconds()==result[7]);
}

// Function Name:	isValidInteger
// Function Description:	判断输入是否是一个整数
// Creation Date:	2004-7-13 10:01
// Last Modify By:	N/A
// Last Modify Date:	N/A
String.prototype.isValidInteger=function()
{
var result=this.match(/^(-|\+)?\d+$/);
if(result==null) return false;
return true;
}

// Function Name:	isValidPositiveInteger
// Function Description:	判断输入是否是一个正整数
// Creation Date:	2004-7-13 10:01
// Last Modify By:	N/A
// Last Modify Date:	N/A
String.prototype.isValidPositiveInteger=function()
{
var result=this.match(/^\d+$/);
if(result==null) return false;
if(parseInt(this)>0) return true;
return false;
}

// Function Name:	isValidNegativeInteger
// Function Description:	判断输入是否是一个负整数
// Creation Date:	2004-7-13 10:28
// Last Modify By:	N/A
// Last Modify Date:	N/A
String.prototype.isValidNegativeInteger=function()
{
var result=this.match(/^-\d+$/);
if(result==null) return false;
return true;
}

// Function Name:	isValidNumber
// Function Description:	判断输入是否是一个数字
// Creation Date:	2004-7-13 10:01
// Last Modify By:	N/A
// Last Modify Date:	N/A
String.prototype.isValidNumber=function()
{
return !isNaN(this);
}

// Function Name:	isValidLetters
// Function Description:	判断输入是否是一个由 A-Z / a-z 组成的字符串
// Creation Date:	2004-7-13 10:10
// Last Modify By:	N/A
// Last Modify Date:	N/A
String.prototype.isValidLetters=function()
{
var result=this.match(/^[a-zA-Z]+$/);
if(result==null) return false;
return true;
}

// Function Name:	isValidDigits
// Function Description:	判断输入是否是一个由 0-9 组成的数字
// Creation Date:	2004-7-13 10:10
// Last Modify By:	N/A
// Last Modify Date:	N/A
String.prototype.isValidDigits=function()
{
var result=this.match(/^[1-9][0-9]+$/);
if(result==null) return false;
return true;
}

// Function Name:	isValidAlphanumeric
// Function Description:	判断输入是否是一个由 0-9 / A-Z / a-z 组成的字符串
// Creation Date:	2004-7-13 10:14
// Last Modify By:	N/A
// Last Modify Date:	N/A
String.prototype.isValidAlphanumeric=function()
{
var result=this.match(/^[a-zA-Z0-9]+$/);
if(result==null) return false;
return true;
}

// Function Name:	isValidString
// Function Description:	判断输入是否是一个由 0-9 / A-Z / a-z / . / _ 组成的字符串
// Creation Date:	2004-7-13 10:20
// Last Modify By:	N/A
// Last Modify Date:	N/A
String.prototype.isValidString=function()
{
var result=this.match(/^[a-zA-Z0-9\s.\-_]+$/);
if(result==null) return false;
return true;
}

// Function Name:	isValidPostalcode
// Function Description:	判断输入是否是一个有效的邮政编码
// Creation Date:	2004-7-13 10:22
// Last Modify By:	N/A
// Last Modify Date:	N/A
String.prototype.isValidPostalcode=function()
{
var result=this.match(/(^[0-9]{6}$)/);
if(result==null) return false;
return true;
}

// Function Name:	isValidPhoneNo
// Function Description:	判断输入是否是一个有效的电话号码
// Creation Date:	2004-7-13 10:22
// Last Modify By:	N/A
// Last Modify Date:	N/A
String.prototype.isValidPhoneNo=function()
{
var result=this.match(/(^[0-9]{3,4}\-[0-9]{3,8}$)|(^[0-9]{3,8}$)|(^\([0-9]{3,4}\)[0-9]{3,8}$)/);
if(result==null) return false;
return true;
}

// Function Name:	isValidMobileNo
// Function Description:	判断输入是否是一个有效的手机号码
// Creation Date:	2004-7-13 10:23
// Last Modify By:	N/A
// Last Modify Date:	N/A
String.prototype.isValidMobileNo=function()
{
var result=this.match(/(^0{0,1}13[0-9]{9}$)/);
if(result==null) return false;
return true;
}