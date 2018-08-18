<p align="center" id="top">
	<a href="https://www.npmjs.com/package/init-editorconfig-cli"><img src="https://cdn.abraham.gq/projects/init-editorconfig/logo.png"></a>
	<br>
	<br>
	<br>
	<a href="https://www.npmjs.com/package/init-editorconfig-cli"><b>init-editorconfig-cli</b></a>
	: Cli generator of <i>.editorconfig</i> 🐭
</p>

<p align="center">
	<!-- Travis CI -->
	<a href="https://travis-ci.org/abranhe/init-editorconfig-cli"><img src="https://img.shields.io/travis/abranhe/init-editorconfig-cli.svg?logo=travis" /></a>
	<!-- LICENSE -->
	<a href="https://github.com/abranhe/init-editorconfig-cli/blob/master/LICENSE"><img src="https://img.shields.io/github/license/abranhe/init-editorconfig-cli.svg" /></a>
	<!-- NPM Version -->
	<a href="https://www.npmjs.com/package/init-editorconfig-cli"><img src="https://img.shields.io/npm/v/init-editorconfig-cli.svg" /></a>
	<!-- @abranhe -->
	<a href="https://github.com/abranhe"><img src="https://abranhe.com/badge.svg"></a>
	<!-- Cash me -->
	<a href="https://cash.me/$abranhe"><img src="https://cdn.abraham.gq/badges/cash-me.svg"></a>
	<!-- Patreon -->
	<a href="https://www.patreon.com/abranhe"><img src="https://cdn.abraham.gq/badges/patreon.svg" /></a>
	<!-- Paypal -->
	<a href="https://paypal.me/abranhe/10"><img src="https://cdn.abraham.gq/badges/paypal.svg" /></a>
</p>

# Install

```
npm install init-gitignore-cli
```

# Cli

```console
Usage
	$ init-pkg-json <option>

Options
	--docs               Read online documentation
	-h, --help           Show this help message and close
	-v, --version        Show packge version
	-f, --feedback       Send a feedback
			--indentation    Set package.json indentaion
	-n, --name           Add name to packge.json: required *
			--pkg-version    Add version to packge.json: required *
	-d, --description    Add description to packge.json
	-k, --keywords       Add keywords to packge.json
	-l, --license        Add license to packge.json
	-r, --repository     Add repository url link to the packge.json
	-h, --home           Add homepage link to packge.json
	-b, --bugs           Add bugs link to packge.json
	-a, --author         Add author to packge.json
			--files          Add files to packge.json
	-m, --main           Add primary entry point file
			--bin            Executable files included with your project that will be installed
	-s, --scripts        For now, pass an object as script (pass an object)
			--dependencies   Add dependencies (pass an object)
			--dev-dep        Add dev dependencies (pass an object)
	-e, --engines        The engines specify versions of clients that must be used with your package

Example
	$ init-pkg-json -n "pkg-name" --pkg-version "1.0.0" -d "My amazing pkg"
```

# Example

> This is a big example 😅 : I'll be creating an interactive CLI for this module soon!

```
$ init-pkg-json -n "pkg-n" --pkg-version 1.0.3 -d "great-pkg" -k "pkg amazing" -l "MIT" -b https://github.com/u/r/issues -h https://yourpkg.org -r "https://gitub.com/u/p.git git" -a "Name email@d.com https://y.com" --files "filename.js dir/ glob/*.{js,json} test.js" --bin "command: bin/f.js, command1: index.js" -s "build-project: node build-project.js, test: test.js" --dependencies "pkg1: ^3.1.4" -e "node: >=4.4.7, yarn: ^0.14.0"
```

## Result in `package.json`

```json
{
  "name": "pkg-n",
  "version": "1.0.3",
  "description": "great-pkg",
  "keywords": [
    "pkg",
    "amazing"
  ],
  "license": "MIT",
  "homepage": "https://yourpkg.org",
  "bugs": "https://github.com/u/r/issues",
  "repository": {
    "type": "git",
    "url": "https://gitub.com/u/p.git"
  },
  "author": {
    "name": "name",
    "email": "email@d.com",
    "url": "https://y.com"
  },
  "files": [
    "filename.js",
    "dir/",
    "glob/*.{js,json}",
    "test.js"
  ],
  "bin": {
    "command": "bin/f.js",
    "command1": "index.js"
  },
  "scripts": {
    "build-project": "nodebuild-project.js",
    "test": "test.js"
  },
  "dependencies": {
    "pkg1": "^3.1.4"
  },
  "engines": {
    "node": ">=4.4.7",
    "yarn": "^0.14.0"
  }
}
```

# Related

- [init-editorconfig](https://github.com/abranhe/init-editorconfig):  API for this module 🐭
-  [init-gitignore](https://github.com/abranhe/init-gitignore): Because making git ignore files should be easier.
-  [init-pkg-json](https://github.com/abranhe/init-pkg-json): 📦 Complex generator of Package.json.

# Team

|[![Carlos Abraham Logo](https://avatars3.githubusercontent.com/u/21347264?s=50&v=4)](https://19cah.com)|
| :-: |
| [Carlos Abraham](https://github.com/abranhe) |

# License

[MIT](https://github.com/abranhe/init-editorconfig-cli/blob/master/LICENSE) License © [Carlos Abraham](https://github.com/abranhe/)

<p align="center">
	<a href="#top"><img src="https://cdn.abraham.gq/projects/init-editorconfig/logo.png" width="50"> top ↑</a>
</p>
