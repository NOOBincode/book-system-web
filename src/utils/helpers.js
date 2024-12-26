// helpers.js

/**
 * 格式化日期为 YYYY-MM-DD 格式
 * @param {Date} date - JavaScript Date 对象
 * @returns {string} - 格式化后的日期字符串
 */
export function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  
  /**
   * 生成随机字符串
   * @param {number} length - 字符串长度
   * @returns {string} - 生成的随机字符串
   */
  export function generateRandomString(length = 8) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
  
  /**
   * 深拷贝对象
   * @param {Object} obj - 要拷贝的对象
   * @returns {Object} - 拷贝后的对象
   */
  export function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  
  /**
   * 检查对象是否为空
   * @param {Object} obj - 要检查的对象
   * @returns {boolean} - 如果为空返回 true，否则返回 false
   */
  export function isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  }
  
  /**
   * 显示错误信息
   * @param {string} message - 错误信息
   */
  export function showError(message) {
    alert(`错误: ${message}`);
  }
  
  /**
   * 延迟一定时间后执行
   * @param {number} ms - 延迟的时间 (毫秒)
   * @returns {Promise<void>} - 返回一个 Promise
   */
  export function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  