# MetaStanza

MetaStanza are a Collection of generic [TogoStanza](http://togostanza.org/) (JavaScript version).

## Usage

MetaStanza are deployed at http://togostanza.org/dist/metastanza/ so all you need is to put a ```<link>``` tag for a MetaStanza ```xxx``` of your choice,

```html
<link rel="import" href="http://togostanza.org/dist/metastanza/roundtree/">
```

and put ```<togostanza-xxx>``` tag in your page where you want to embed the stanza with a REST API which returns a SPARQL query result.

```html
<togostanza-roundtree sparql_api="http://togostanza.org/sparqlist/api/d3sparql_roundtree?organism=Ramazzottius" title="D3 roundtree"></togostanza-roundtree>
```

See http://togostanza.org/sparqlist/ for some live demos of those REST APIs and embedded MetaStanza.

## Build your own

Obtain ```ts``` command for your OS from https://github.com/togostanza/ts/releases and build MetaStanza,

```sh
% git clone https://github.com/ktym/metastanza.git
% cd metastanza
% /path/to/ts build .
% cp -pr dist/stanza /path/to/www/root/path/metastanza
```

then deploy and open ```http://<your_server>/path/metastanza/``` to see the list of MetaStanza.


