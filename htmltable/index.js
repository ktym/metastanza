Stanza(function(stanza, params) {
  console.log(params)
  stanza.render({
    template: "stanza.html",
    parameters: {
      title: params.title
    }
  })
  function draw(json) {
    var config = { selector: stanza.select("#result") }
    for (key in params) {
      if (params[key]) {
        config[key] = params[key]
      }
    }
    console.log(config)
    d3sparql.htmltable(json, config)
    console.log(json)
  }
  d3sparql.fetch(params.sparql_api, draw)
});
