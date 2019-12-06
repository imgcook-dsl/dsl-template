module.exports = function(schema, option) {
  const renderData = {};
  const style = {};

  function parseProps(propValue, isXML) {
    if (/^\{\{.*\}\}$/.test(propValue)) {
      if (isXML) {
        return propValue.slice(2, -2);
      } else {
        return propValue.slice(1, -1);
      }
    }

    if (isXML) {
      return `'${propValue}'`;
    } else {
      return propValue;
    }
  }

  function transform(json) {
    var result = '';

    if (Array.isArray(json)) {
      json.forEach(function(node) {
        result += transform(node);
      });
    } else if (typeof json == 'object') {
      var type = json.componentName && json.componentName.toLowerCase();
      var className = json.props && json.props.className;
      var classString = className ? ` style={styles.${className}}` : '';

      switch (type) {
        case 'text':
          var innerText = parseProps(json.props.text);
          result += `<span${classString}>${innerText}</span>`;
          break;
        case 'div':
        case 'page':
          if (json.children && json.children.length > 0) {
            result += `<div${classString}>${transform(json.children)}</div>`;
          } else {
            result += `<div${classString} />`;
          }
          break;
        case 'image':
          var source = parseProps(json.props.src, true);
          result += `<img${classString} src={${source}}  />`;
          break;
      }

      if (className) {
        style[className] = json.props.style;
      }
    }

    return result;
  }

  // transform json
  var jsx = `${transform(schema)}`;

  renderData.modClass = `
class Mod extends Component {
  render() {
    return (
      ${jsx}
    );
  }
}
  `;

  renderData.style = `var styles = ${JSON.stringify(style)}`;
  renderData.exports = `ReactDOM.render(<Mod />, document.getElementById('container'));`;

  const prettierOpt = {
    parser: 'babel',
    printWidth: 120,
    singleQuote: true
  };

  return {
    renderData: renderData,
    prettierOpt: prettierOpt
  };
}
