import Moment from "moment";

export default class Utils {
  static arrayToHtml(arr) {
    if (arr instanceof Array) {
      const NEW_LINE_WORD = "\n";
      let html = "";
      for (let line of arr) {
        // html += `${this.escapeHtml(line)}${newLineWord}`;
        html += `${line}${NEW_LINE_WORD}`;
      }
      let lastIndex = html.lastIndexOf(NEW_LINE_WORD);
      html = html.substring(0, lastIndex);
      return html;
    } else {
      return arr;
    }
  }

  static escapeHtml(str) {
    str = str.replace(/&/g, "&amp;");
    str = str.replace(/>/g, "&gt;");
    str = str.replace(/</g, "&lt;");
    str = str.replace(/"/g, "&quot;");
    str = str.replace(/'/g, "&#x27;");
    str = str.replace(/`/g, "&#x60;");
    return str;
  }

  static convEmptyStrToNothing(str) {
    return str === "" ? "Nothing" : str;
  }

  static devideArray(baseArr, numOfDiv) {
    let baseArrLen = baseArr.length;
    let newArr = [];
    for (var i = 0; i < Math.ceil(baseArrLen / numOfDiv); i++) {
      var j = i * numOfDiv;
      var p = baseArr.slice(j, j + numOfDiv);
      newArr.push(p);
    }
    return newArr;
  }

  static convMMMMYYYY(dateStr) {
    let date = new Date(dateStr);
    return Moment(date.toISOString()).format("MMMM YYYY");
  }

  static convVisibleToStr(visible) {
    return visible ? "" : "none";
  }
}
