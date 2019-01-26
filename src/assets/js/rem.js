export default function setRem(){
    setHtmlFontSize();
    window.onresize = function(){
      setHtmlFontSize();
    }
    function setHtmlFontSize(){
      var docElem = document,
          htmlElem = docElem.documentElement;

      var doc_width = htmlElem.getBoundingClientRect().width;
          doc_width = doc_width > 500?500:doc_width;
      var htmlFontSize = doc_width / 10;
      htmlElem.setAttribute('style','font-size:'+htmlFontSize+'px');
    }
}
 